// SPDX-FileCopyrightText: Meta Platforms, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import { PackageInfo } from '../../../shared/shared-types';
import { Schema, Validator } from 'jsonschema';

const jsonSchemaValidator = new Validator();

export function getGithubAPIUrl(url: string): string {
  const { namespace, packageName } =
    getPackageNamespaceAndPackageNameFromGithubURL(url);

  return `https://api.github.com/repos/${namespace}/${packageName}/license`;
}

function getPackageNamespaceAndPackageNameFromGithubURL(url: string): {
  namespace: string;
  packageName: string;
} {
  const urlSuffix = url
    .replace(new RegExp('^https://(www.)?github.com/'), '')
    .split('/');
  return {
    namespace: urlSuffix[0],
    packageName: urlSuffix[1],
  };
}

const GITHUB_SCHEMA: Schema = {
  type: 'object',
  properties: {
    html_url: { type: 'string' },
    content: { type: 'string' },
    license: {
      type: 'object',
      properties: { spdx_id: { type: 'string' } },
      required: ['spdx_id'],
    },
  },
  required: ['license', 'html_url'],
};

interface Payload {
  html_url: string;
  content?: string;
  license: {
    spdx_id: string;
  };
}

export async function convertGithubPayload(
  payload: Response
): Promise<PackageInfo> {
  const convertedPayload = (await payload.json()) as Payload;
  jsonSchemaValidator.validate(convertedPayload, GITHUB_SCHEMA, {
    throwError: true,
  });

  const { namespace, packageName } =
    getPackageNamespaceAndPackageNameFromGithubURL(convertedPayload.html_url);
  const licenseText = convertedPayload.content
    ? Buffer.from(convertedPayload.content, 'base64').toString()
    : undefined;
  return {
    licenseName: convertedPayload.license.spdx_id,
    licenseText,
    packageType: 'github',
    packageNamespace: namespace,
    packageName,
    packagePURLAppendix: undefined,
  };
}
