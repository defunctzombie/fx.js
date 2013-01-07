# fx

basic dom effects

This library works in conjunction with any css transitions you are using. It does not perform simulated animations in javascript. You must specify the transitions for elements using css3 transitions. This library just fixes some of the quirks when trying to use these transitions in specific ways.

## example

```javascript
var fx = require('fx');
var element = document.querySelector('#container');

fx.slideUp(element);
```

```css
#content {
    transition: height 0.5s ease;
}
```

## api

### .slideUp(element);

### .slideDown(element);

## install via [npm](https://npmjs.org)

```
npm install fx
```
