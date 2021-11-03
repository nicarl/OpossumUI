// SPDX-FileCopyrightText: Facebook, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import { _electron, ElectronApplication } from 'playwright';

export const INTEGRATION_TEST_TIMEOUT = 30000;

export async function getApp(
  commandLineArg?: string
): Promise<ElectronApplication> {
  const app = 'build/ElectronBackend/app.js';

  return await _electron.launch({
    args: commandLineArg ? [app, commandLineArg] : [app],
    timeout: 60000,
    env: {
      RUNNING_IN_E2E_TEST: 'true',
      DISPLAY: process.env.DISPLAY ?? ':99',
    },
  });
}

export function conditionalIt(condition: boolean): jest.It {
  return condition ? it : it.skip;
}
