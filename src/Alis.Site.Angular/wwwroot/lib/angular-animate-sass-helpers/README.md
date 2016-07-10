# angular-animate-sass-helpers<br />
[![Bower version](http://img.shields.io/bower/v/angular-animate-sass-helpers.svg)](git@github.com:soda-codes/angular-animate-sass-helpers.git)
<br />
<br />

> ###DESCRIPTION###

Sass mixin helpers for ng-animate.
The idea is simplify our scss code for ng-animate defining the classes to add in the different steps of the animation.

As an example imagine developing a sidebar,
in that case you could have an overlay and on top of that,
a container for the sidebar content like this:

```html
<div class="sidebar">
    <div class="backdrop"></div>
    <div class="content"></div>
</div>
```

in this case we would like to animate:

- the `.sidebar`
- the opacity for `.backdrop`
- the translate3d property for `.content`

```sass
@import "../angular-animate-sass-helpers";

$dl_sidebar_slide_in: (
    (null, (transition: all 0.3s linear 0s)),
    (selector-1, (opacity: 1)),
    (selector-2, (transform: translate3d(0,0,0)))
);

$dl_sidebar_slide_out: (
    (null, (transition: all 0.3s linear 0s)),
    (selector-1, (opacity: 0)),
    (selector-2, (transform: translate3d(-100%,0,0)))
);

.slide {
    @include ng_if_transition_simple($dl_sidebar_slide_in, $dl_sidebar_slide_out);
}

```

## Getting Started

Add **angular-animate-sass-helpers** to you project.

Via bower:

```
$ bower install --save angular-animate-sass-helpers
```

## Developing

Clone this repository, install the dependencies and simply run `grunt`.

```
$ npm install -g grunt-cli
$ npm install
$ grunt
```

Then a `build` will be created with an example

## [MIT License](LICENSE)

[Copyright (c) 2015 JaimeBeneytez Soda.codes]

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
