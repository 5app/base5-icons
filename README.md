# base5 icons

5app's SVG icons as React components.

## Installation

`npm i --save base5-icons`

## Usage

```
import React from 'react';
import Star from 'base5-icons/star';

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

## Adding new icons

1. Add new SVG icons to [src/svg](/src/svg)
2. Add any new icons as an export inside of [src/jsx/index.js](src/jsx/index.js)

Once that's done, run `npm run build` to convert the SVGs to standalone React components inside of [src/jsx](/src/jsx). In the same step, they will then be compiled to standard ES5 JS modules in a new `dist` folder (not on git).

## Updating the repo

`npm run dist` will publish the `dist` folder to NPM. Remember to bump the version number in [package.json](package.json) if you do this.
