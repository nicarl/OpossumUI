// SPDX-FileCopyrightText: Meta Platforms, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import MuiToggleButton from '@mui/material/ToggleButton';

import React, { ReactElement } from 'react';
import { OpossumColors } from '../../shared-styles';
import { SxProps } from '@mui/material';

const classes = {
  button: {
    height: '40px',
    background: OpossumColors.lightBlue,
    color: OpossumColors.black,
    '&:hover': {
      background: OpossumColors.lightBlueOnHover,
    },
    '&.Mui-selected': {
      background: OpossumColors.darkBlue,
      color: OpossumColors.black,
    },
  },
};

interface ToggleButtonProps {
  buttonText: string;
  selected: boolean;
  handleChange: () => void;
  disabled?: boolean;
  sx?: SxProps;
  ariaLabel?: string;
}

export function ToggleButton(props: ToggleButtonProps): ReactElement {
  return (
    <MuiToggleButton
      value="check"
      selected={props.selected}
      onChange={props.handleChange}
      sx={{ ...classes.button, ...props.sx }}
      aria-label={props.ariaLabel}
    >
      {props.buttonText}
    </MuiToggleButton>
  );
}
