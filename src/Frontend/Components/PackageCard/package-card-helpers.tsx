// SPDX-FileCopyrightText: Meta Platforms, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import { ListCardConfig, ListCardContent } from '../../types/types';
import React, { ReactElement } from 'react';
import {
  ExcludeFromNoticeIcon,
  FirstPartyIcon,
  FollowUpIcon,
  PreSelectedIcon,
} from '../Icons/Icons';
import { OpossumColors } from '../../shared-styles';

export function getKey(prefix: string, cardContent: ListCardContent): string {
  return `${prefix}-${cardContent.id}`;
}

const classes = {
  followUpIcon: {
    color: OpossumColors.orange,
  },
  excludeFromNoticeIcon: {
    color: OpossumColors.grey,
  },
};

export function getRightIcons(
  cardContent: ListCardContent,
  cardConfig: ListCardConfig,
  openResourcesIcon?: JSX.Element
): Array<ReactElement> {
  const rightIcons: Array<JSX.Element> = [];

  if (openResourcesIcon) {
    rightIcons.push(openResourcesIcon);
  }

  if (cardConfig.firstParty) {
    rightIcons.push(
      <FirstPartyIcon key={getKey('first-party-icon', cardContent)} />
    );
  }
  if (cardConfig.excludeFromNotice) {
    rightIcons.push(
      <ExcludeFromNoticeIcon
        key={getKey('exclude-icon', cardContent)}
        sx={classes.excludeFromNoticeIcon}
      />
    );
  }
  if (cardConfig.followUp) {
    rightIcons.push(
      <FollowUpIcon
        key={getKey('follow-up-icon', cardContent)}
        sx={classes.followUpIcon}
      />
    );
  }
  if (cardConfig.isPreSelected) {
    rightIcons.push(
      <PreSelectedIcon key={getKey('pre-selected-icon', cardContent)} />
    );
  }

  return rightIcons;
}
