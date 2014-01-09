# [Ghost](https://cfpb.github.io/cf-grid/grid/index.html)

[Capital Framework](http://github.com/cfpb/capital-framework)'s LESS-based CSS3 grid system using parametric mixins
to encourage semantic HTML, code-named **Ghost**. Ghost has three main features:

1. Provides fixed-width gutters and fluid-width columns.
1. Works seamlessly with any combination of grid and gutter widths.
1. Keeps HTML semantic by not including presentational classes in markup.


## Semantic HTML

Instead of:

```html
<header class="row">
    <aside class="span4">
        Lorem ipsum Ut deserunt do nostrud. 
    </aside>
    <section class="span8">
        Lorem ipsum Voluptate pariatur Duis fugiat cupidatat quis pariatur.
    </section>
</header>
```

Ghost allows you to write:

```html
<header>
    <aside class="welcome-message">
        Lorem ipsum Ut deserunt do nostrud. 
    </aside>
    <section class="customer-info">
        Lorem ipsum Voluptate pariatur Duis fugiat cupidatat quis pariatur.
    </section>
</header>
```

Using LESS that looks like this:

```less
.welcome-message {
  .column(4);
}

.customer-info {
  .column(8);
}
```

**Note:** This functionality is optional and you can use Ghost in legacy mode.


## Getting Started

<<<<<<< HEAD
Grab `ghost.less` from the `dist` directory and @import it at the top of your application's LESS stylesheet.
=======
If you're not building it along with [Capital Framework](http://github.com/cfpb/capital-framework), grab
`ghost.less` from the `dist` directory and `@import` it at the top of your application's LESS stylesheet. If
you want to support IE6/7, ensure `boxsizing.htc` is in the same directory as your compiled stylesheet.
>>>>>>> 3847647... Start preparing for public release.


## Documentation

More extensive documentation is coming soon, but in the meantime, the `ghost.less` file should be commented well 
enough to get you started.


## Examples

There is a [test runner](https://cfpb.github.io/cf-grid/grid/index.html) and an example of 
[Bootstrap integration](https://cfpb.github.io/cf-grid/bootstrap/index.html). These examples can be 
found in the archive at `dist/example.zip`. They use less.js to compile their LESS. You'll need to run a server 
locally to avoid cross-origin complaints. Try `python -m SimpleHTTPServer` in the example's directory.


## Known Issues

* **Rounding and Rendering** – Certain browsers (most notably Safari, and IE7) either (a) have poor precision when 
  rounding percentage values, (b) don't support subpixel rendering, or both. Usually this results in rows with 
  large numbers of columns rendering "short" (i.e., not stretching all the way to the right).
* **IE10 inline-block whitespace not completely removed** – Because IE10 no longer supports 
  [Conditional Comments](http://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx), the slight increase to 
  `margin-right` on the column mixin that gets it to behave in every other IE no longer works. This only manifests 
  as a problem on rows with very many columns, which is not likely to happen in real-world layout scenarios, 
  so we are electing to ignore the issue at this time.
* **Prefix/Suffix not supported in IE7** – It doesn't seem to be able to handle percentage-based padding.
* **Compiled CSS can be very large** – It is essential that we begin serving gzipped assets on our servers, which 
  can reduce the filesize of repetitive CSS dramatically (on the order of 90%).

## Contributing

Edit the files in `src` and run `grunt build` whenever you're ready to compile LESS and automagically copy 
appropriate source files into the `dist` dir, archiving the examples in a .zip. Running `grunt` with no options 
will start a server on port 8000 (for testing the 
[examples](https://github.com/cfpb/cf-grid/tree/master/src/examples) locally) and automatically `build` 
whenever a source file is changed.

In lieu of a formal styleguide, take care to maintain the existing coding style.


## Release History

 * 2014-01-09   [v0.6.4](../../tree/v0.6.4)   Start preparing for public release.
 * 2013-11-07   [v0.6.3](../../tree/v0.6.3)   Correct version number in bower.json.
 * 2013-11-07   [v0.6.2](../../tree/v0.6.2)   Correct link in CONTRIBUTING.md.
 * 2013-11-07   [v0.6.1](../../tree/v0.6.1)   Add bower.json file.
 * 2013-07-17   [v0.6.0](../../tree/v0.6.0)   Removed overflow:hidden from wrapper.
 * 2013-07-16   [v0.5.3](../../tree/v0.5.3)   Add missing boxsizing.htc.
 * 2013-07-15   [v0.5.2](../../tree/v0.5.2)   Update README to be accurate and add list of known issues. Remove a little bit of outdated stuff from ghost.less.
 * 2013-07-15   [v0.5.1](../../tree/v0.5.1)   Moved repo and updated documentation links accordingly.
 * 2013-07-13   [v0.5.0](../../tree/v0.5.0)   Total rewrite to use box-sizing and padding instead of calc(). Compile examples' LESS.
 * 2013-07-12   [v0.4.2](../../tree/v0.4.2)   Add proper git tag.
 * 2013-07-11   [v0.4.1](../../tree/v0.4.1)   Bump package.json version to aid dependency management.
 * 2013-07-01   [v0.4.0](../../tree/v0.4.0)   Add grunt-cfpb-internal to manage semantic versioning.

## License

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication](http://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

Software source code previously released under an open source license and then modified by CFPB staff is considered a "joint work" (see 17 USC § 101); it is partially copyrighted, partially public domain, and as a whole is protected by the copyrights of the non-government authors and must be released according to the terms of the original open-source license.

For further details, please see: http://www.consumerfinance.gov/developers/sourcecodepolicy/

---

*This file was generated on Thu Jan 09 2014 12:50:17.*
