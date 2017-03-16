# Kendo UI Bootstrap Theme

* [Overview](#overview)
* [Installation](#installation)
* [Customization](#customization)
* [Troubleshooting](#troubleshooting)
* [Under the Hood](#under-the-hood)

## Overview

The Kendo UI Bootstrap Theme is a Bootstrap v4-based theme for the Kendo UI components.

It uses the same variables as Bootstrap to achieve **mostly** the same appearance and size.

Currently, the Bootstrap theme is available for the following suites:  

* Kendo UI for React.
* Kendo UI for Angular.
* Kendo UI for jQuery.

## Installation

1. Run the `npm install` command to install the build dependencies.
1. Run the `npm run build` command to build the CSS.

## Customization

The handling of all variables happens in the [`_bootstrap-map.scss`](src/_bootstrap-map.scss) file. It loads the Bootstrap variables from the default location. For example, `node_modules/bootstrap/scss/_variables.scss`.

If you have a customized version of Bootstrap, specify the location in `_bootstrap-map.scss`. Then, build as usual.

## Troubleshooting

Since Bootstrap is loaded as an NPM module that points directly to the [Bootstrap v4 branch](https://github.com/twbs/bootstrap/tree/v4-dev), something might break after an update.

**Solution**

If a mapped variable breaks, patch it directly in `_bootstrap-map.scss`. If an explicit variable breaks, patch all files. In either case, you can open an issue.

## Under the Hood

To ensure a certain level of compatibility, the Bootstrap variables are mapped locally. This also enables Kendo UI to use an ad-hoc micro framework based on primitive components. For example, [button](src/mixins/appearance/_button.scss), [input](src/mixins/appearance/_input.scss), [node](src/mixins/appearance/_node.scss), and so on.

However, some variables, such as `$tooltip-arrow-width` that is used in the tooltip, are not mapped. They are referenced explicitly because they do not fit within the previously mentioned framework.
