# NewTab-Page

## Purpose

This is an alternative New Tab page for Chromium based browsers. This was originally written as I was frustrated by not being able to specify my own custom HTML as a New Tab page in Chromium-based browsers, as you can in Safari on MacOS. 

## Requirements

A Chromium-based browser (Google Chrome or Microsoft Edge >v79).

## Installation

As this extension is still in development, it is not currently available for install through the Google or Microsoft extension stores.

To run it, it must be sideloaded. To load it in Chrome, please follow these instructions: https://developer.chrome.com/extensions/getstarted#manifest

To sideload this app in Microsoft Edge (Chromium), please follow these instructions: https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/part1-simple-extension#run-your-extension-locally-in-your-browser-while-developing-it-side-loading

If you have an issue, please feel free to open a pull request!

## Configuration

The configuration can currently only be changed by editing the `default_options.json` file.

setting | default | options | description
--- | --- | --- | ---
`page_title` | `"New Tab"` | Any string value | String that will be displayed in the top left hand corner of the navbar
`online_status` | `true` | `true`,`false`| Whether online status indicator should be displayed in the navbar
`clock` | `"24h"` | `"24h"`,`"12h"`,`false`| Whether the clock should be displayed, and/or whether it should be 24h or 12h format (currently disabled)
`themeswitcher` | `true` | `true`,`false` | Whether themeswitcher should be displayed
`default_theme` | `"light"` | `true`,`false` | What the default theme should be (not valid when `themeswitcher` is `true`)
`locale` | `"en"` | `"en"` | Language for the page - currently only English is available. This option is here for future compatibility
`shortcuts` | See `default_options` | JSON | Links to be displayed in the navbar
`greeting_name` | `null` | Any string value | Name to be displayed after the greeting.

## Roadmap/Known Issues

- User friendly options page to change configuration

See [Issues page](https://github.com/Gunner237/NewTab-Page/issues) for more information.