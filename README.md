# NewTab-Page

## Purpose

A custom new tab page.

## Requirements

No requirements needed.

## Configuration

The configuration can currently only be changed by editing the `default_options.json` file.

setting | default | options | description
--- | --- | --- | ---
`page_title` | `"New Tab"` | Any string value | String that will be displayed in the top left hand corner of the navbar
`online_status` | `true` | `true`,`false`| Whether online status indicator should be displayed in the navbar
`clock` | `"24h"` | `"24h"`,`"12h"`,`false`| Whether the clock should be displayed, and/or whether it should be 24h or 12h format (currenly disabled)
`themeswitcher` | `true` | `true`,`false` | Whether themeswitcher should be displayed
`default_theme` | `"light"` | `true`,`false` | What the default theme should be (not valid when `themeswitcher` is `true`)
`locale` | `"en"` | `"en"` | Language for the page - currently only english is available. This option is here for future compatability.
`shortcuts` | See `default_options` | `"en"` | Language for the page - currently only english is available. This option is here for future compatability.
`greeting_name` | `null` | Any string value | Name to be displayed after the greeting.

## Roadmap/Known Issues

- User friendly options page to change configuration
