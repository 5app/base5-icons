# base5 icons

5app's SVG icons as React components, powered by styled-components.

## Installation

`npm i --save base5-icons styled-components`

## Usage

```
import React from 'react';
import Star from 'base5-icons/Star';

class Message extends React.Component {
  render() {
    return (
      <div>
        You're a <Star />!
      </div>
    );
  }
}
```

## Props

### `scale`

Number. By default, icons are sized at `1em`, scaling along with their surrounding text. The `scale` prop lets you define a scaling factor to size the icon, i.e. a value of `2` will make the icon twice as large.

### `color`

String. By default, icons use the colour of their containing element (`currentcolor`). You can change this to any valid color value here.

### `vAlign`

Boolean. When placed next to or inside of text, square icons tend to sit a bit too low compared to the text's baseline. Use the `vAlign` flag to nudge the icon up by a few pixels to visually align it with its surrounding text.

Example: `<Star vAlign /> Favourite`

### `spacingLeft` & `spacingRight`

String. Add some left or right margin to the icon. Accepts any valid CSS length value, a unit must be included.

## Adding new icons

1. Add new SVG icons to [src/svg](/src/svg)
2. Add any new icons as an export inside of [src/js/index.js](src/js/index.js)
3. Define a `string` name for any new icons in the icon map in [src/js/iconMap.js](src/js/iconMap.js)

Once that's done, run `npm run build` to convert the SVGs to standalone React components inside of [src/js](/src/js). In the same step, they will then be compiled to a new `dist` folder as standard ES5 JS modules.

## Updating the repo

1. Bump the version number using `npm version [patch|minor|major]`
2. Run `npm run dist` to publish the `dist` folder to NPM
