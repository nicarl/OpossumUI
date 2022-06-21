// SPDX-FileCopyrightText: Meta Platforms, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

export enum IpcChannel {
  ExportFile = 'export-file',
  ExportFileRequest = 'export-file-request',
  FileLoaded = 'file-loaded',
  Logging = 'logging',
  OpenFile = 'open-file',
  OpenLink = 'open-link',
  ResetLoadedFile = 'reset-loaded-file',
  RestoreFrontend = 'restore-frontend',
  SaveFile = 'save-file',
  SaveFileRequest = 'save-file-request',
  SendErrorInformation = 'send-error-information',
  ToggleHighlightForCriticalSignals = 'toggle-highlight-for-critical-signals',
  ShowSearchPopup = 'show-search-pop-up',
  ShowProjectMetadataPopup = 'show-project-metadata-pop-up',
  ShowProjectStatisticsPopup = 'show-project-statistics-pop-up',
  SetBaseURLForRoot = 'set-base-url-for-root',
}
