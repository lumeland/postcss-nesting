# PostCSS Nesting [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![CSS Standard Status][css-img]][css-url]
[![Support Chat][git-img]][git-url]

[PostCSS Nesting] lets you nest style rules inside each other, following the
[CSS Nesting] specification.

```pcss
a, b {
  color: red;

  & c, & d {
    color: white;
  }
}

/* becomes */

a, b {
  color: red;
}

a c, a d, b c, b d {
  color: white;
}
```

**NOTICE**: In a future version of this project, nesting at-rules like `@media`
may be deprecated, as they are not part of the nesting proposal. In a comment,
a CSSWG member expressed interest in handling nested `@media` while handling
selector nesting. So deprecating nested at-rules has been temporarily delayed.

## Usage

Use [PostCSS Nesting] as a [PostCSS] plugin:

```js
import postcss from "https://deno.land/x/postcss/mod.js";
import postcssNesting from "https://cdn.jsdelivr.net/gh/lumeland/postcss-nesting/mod.js";

await postcss([postcssNesting]).process(YOUR_CSS /*, processOptions */);
```

[css-img]: https://cssdb.org/badge/nesting-rules.svg
[css-url]: https://cssdb.org/#nesting-rules
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss

[CSS Nesting]: https://drafts.csswg.org/css-nesting-1/
[PostCSS]: https://github.com/postcss/postcss
[PostCSS Nesting]: https://github.com/jonathantneal/postcss-nesting
