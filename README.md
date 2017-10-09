<a href="https://www.telerik.com/kendo-angular-ui/" target="_blank">
<img width="631" src="https://www.telerik.com/kendo-angular-ui/npm-banner.svg">
</a>

# Kendo UI Bootstrap Theme

The Kendo UI Bootstrap Theme is a theme for the Kendo UI components which is based on the Twitter Bootstrap framework, version 4. To style and size the components and make them blend in with the surrounding page, the Bootstrap theme uses the variables defined in Bootstrap.

* [License](#license)
* [Basic Usage](#basic-usage)
* [Running Custom Builds](#running-custom-builds)
* [Applying Mapped Variables](#applying-mapped-variables)
* [Troubleshooting](#troubleshooting)
* [Resources](#resources)
* [Questions and Feedback](#questions-and-feedback)

## License

This package is part of the following suites:

* [Kendo UI for Angular](http://www.telerik.com/kendo-angular-ui/)
* [Kendo UI for jQuery](http://www.telerik.com/kendo-ui)
* [UI for ASP.NET MVC](http://www.telerik.com/aspnet-mvc)
* [UI for ASP.NET Core](http://www.telerik.com/aspnet-core-ui)

This is commercial software. To use it, you need to agree to the [**Telerik End User License Agreement for Kendo UI Complete**](http://www.telerik.com/purchase/license-agreement/kendo-ui-complete). If you do not own a commercial license, this file shall be governed by the trial license terms.

All available Kendo UI commercial licenses may be obtained at http://www.telerik.com/purchase/kendo-ui.

## Basic Usage

For more information on how to implement the Material theme in your project, refer to the following articles:

* [Using the Bootstrap Theme in Angular Projects](http://gyoshevlnx:4000/components/styling/)
* [Using the Bootstrap Theme in jQuery Projects](http://docs.telerik.com/kendo-ui/styles-and-layout/sass-themes)
* [Customizing the Bootstrap Theme](https://github.com/telerik/kendo-theme-default/blob/13713a572b392806ca7c2950f77f9b033f87d8ea/README.md)

## Running Custom Builds

The handling of all variables happens in the [`_bootstrap-map.scss`](src/_bootstrap-map.scss) file. It loads the Bootstrap variables from the default location. For example, `node_modules/bootstrap/scss/_variables.scss`.

If you have a customized version of Bootstrap:

1. Specify the location in `_bootstrap-map.scss`.
1. Build as usual.

## Applying Mapped Variables

To ensure a certain level of compatibility, the Bootstrap variables are locally mapped. This also enables Kendo UI to use an ad-hoc micro framework based on primitive components. For example, [button](src/mixins/appearance/_button.scss), [input](src/mixins/appearance/_input.scss), [node](src/mixins/appearance/_node.scss), and so on.

However, some variables, such as `$tooltip-arrow-width` which is used in the tooltip, are not mapped. They are referenced explicitly because they do not fit in the previously mentioned framework.

## Troubleshooting

Because Bootstrap v4 is still in beta, its variables may change between releases. Make sure to use the Bootstrap version which is [specified in the peer dependencies](package.json) of the package.

## Resources

- [Get Started](https://www.telerik.com/kendo-angular-ui/getting-started)
- [Component References](https://www.telerik.com/kendo-angular-ui/components)
- [Blogs](http://www.telerik.com/blogs/kendo-ui)

## Questions and Feedback

- [FAQ](https://www.telerik.com/kendo-angular-ui/components/faq/)
- [GitHub Issues](https://github.com/telerik/kendo-angular/issues)
- [Feedback Portal](http://kendoui-feedback.telerik.com/forums/555517-kendo-ui-for-angular-2-feedback)
- [StackOverflow](https://stackoverflow.com/questions/tagged/kendo-ui-angular2)

*Copyright © 2017 Progress Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.*

*Progress, Telerik, and certain product names used herein are trademarks or registered trademarks of Progress Software Corporation and/or one of its subsidiaries or affiliates in the U.S. and/or other countries.*
