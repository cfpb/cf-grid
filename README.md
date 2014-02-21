# Ghost

A Less-based CSS3 grid system using parametric mixins to encourage semantic HTML, code-named **Ghost**.
This component can be used by itself, but it was made for Capital Framework, a new front end framework
developed at the [Consumer Financial Protection Bureau](http://cfpb.github.io/).

Ghost has four main features:

1. Provides fixed-width gutters and fluid-width columns.
2. Works seamlessly with any combination of grid and gutter widths.
3. Keeps HTML semantic by not including presentational classes in markup.
4. Row-agnostic. Put as many columns as you want in a container. Great for RWD.

- [See the demo](http://cfpb.github.io/cf-grid/src/examples/grid/)


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

Using Less that looks like this:

```less
.welcome-message {
  .column(4);
}

.customer-info {
  .column(8);
}
```

**Note:** This functionality is optional and you can use Ghost in legacy mode
(i.e., with traditional `.col-#` classes).


## Documentation

More extensive documentation is coming soon, but in the meantime, the `ghost.less` file should be
commented well enough to get you started.

Edit the files in `src` and run `grunt build` whenever you're ready to compile Less and automagically
copy appropriate source files into the `dist` dir, archiving the examples in a .zip.
Running `grunt` with no options will start a server on port 8000 (for testing the 
[examples](https://github.com/cfpb/cf-grid/tree/gh-pages/src/examples) locally)
and automatically `build` whenever a source file is changed.


## Contributing

We welcome your feedback and contributions.

- [Find out about contributing](https://github.com/cfpb/cf-grid/blob/gh-pages/CONTRIBUTING.md)
- [File a bug](https://github.com/cfpb/cf-grid/issues/new?body=%23%23%20URL%0D%0D%0D%23%23%20Actual%20Behavior%0D%0D%0D%23%23%20Expected%20Behavior%0D%0D%0D%23%23%20Steps%20to%20Reproduce%0D%0D%0D%23%23%20Screenshot&labels=bug)


## Using this component independent of Capital Framework

If you're already using [Bower](http://bower.io/), simply add this component as a dependency
and integrate it into your build process.
It's not currently in the Bower registry, so you'll have to point to this Git repo's URL.

You can also just copy the `ghost.less` file into your project and `@import` it into your main Less file.


## Known Issues

* **Rounding and Rendering** – Certain browsers (most notably Safari, and IE7) either (a) have poor precision when 
  rounding percentage values, (b) don't support subpixel rendering, or both. Usually this results in rows with 
  large numbers of columns rendering "short" (i.e., not stretching all the way to the right).
* **IE10 inline-block whitespace not completely removed** – Because IE10 no longer supports 
  [Conditional Comments](http://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx), the slight increase to 
  `margin-right` on the column mixin that gets it to behave in every other IE no longer works. This only manifests 
  as a problem on rows with very many columns, which is not likely to happen in real-world layout scenarios, 
  so we are electing to ignore the issue at this time.
* **Prefix/Suffix not supported in IE7** – It doesn't seem to be able to handle percentage-based padding.
* **Compiled CSS can be very large** –
  If you're using the legacy mode (where all of the classes are generated for you),
  it is essential that static assets are served gzipped,
  which can reduce the filesize of repetitive CSS dramatically (on the order of 90%).
