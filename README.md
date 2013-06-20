# Ghost

A LESS-based CSS3 grid system using parametric mixins to encourage semantic HTML. Ghost has two purposes:

1. Provide fixed-width gutters with fluid-width columns without resorting to padding hacks.
1. Keep HTML semantic by not including presentational classes in markup.

Ghost uses CSS3's <a href="http://updates.html5rocks.com/2012/03/CSS-layout-gets-smarter-with-calc">calc() property</a> to provide fixed-width gutters. Older browsers fallback to fluid gutters.

## Semantic HTML

Instead of:

```
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

```
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

```
header {
  .row();
}

.welcome-message {
  .column(4);
}

.customer-info {
  .column(8);
}
```

## Getting Started

Grab `ghost.less` from the `dist` directory and @import it at the top of your application's LESS stylesheet. Some in-progress examples of how to use Ghost can be found in `dist/examples.zip`.

## Documentation
_(Coming soon)_

## Examples

Examples can be found in the archive at `dist/example.zip`. Note: They use less.js to compile their LESS. You'll need to run a server locally to avoid cross-origin complaints. Try `python -m SimpleHTTPServer` in the example's directory. There is a an example [using Bootstrap](https://fake.ghe.domain/contolini/ghost/blob/master/src/examples/bootstrap/static/example.less) and another with [unstyled html](https://fake.ghe.domain/contolini/ghost/blob/master/src/examples/employee/static/example.less).

Ghost is used by [Qui](https://fake.ghe.domain/pages/contolini/qui) (<a href="https://fake.ghe.domain/contolini/qui/blob/master/src/less/main.less">stylesheet</a>).

## Contributing

Running `grunt` will compile LESS and run a build script that copies appropriate source files into the `dist` dir, archive the examples in a .zip. `grunt watch` to build when files change.

In lieu of a formal styleguide, take care to maintain the existing coding style.

## Release History

_(Nothing yet)_

## License

Copyright (c) 2013 Consumer Financial Protection Bureau  
A work of the Public Domain.
