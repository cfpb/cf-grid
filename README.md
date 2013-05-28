# Ghost

An invisible, totally-not-ready-for-production LESS-based grid system promoting semantic HTML.

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
        Main content goes here.
    </section>
</header>
```

Using LESS that looks like this:

```
header {
  .ghost-row;
}

.welcome-message {
  .ghost-span(4);
}

.customer-info {
  .ghost-span(8);
}
```

## Getting Started

Grab `ghost.less` from the `dist` directory.

## Documentation
_(Coming soon)_

## Examples

An in-progress example can be found in `dist/example`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Consumer Financial Protection Bureau  
A work of the Public Domain.
