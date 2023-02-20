# img-map-area

A library that makes Image Map Area responsive.

# Features

- One function to make **map area** responsive.
- Support Typescript.

# Installation

```bash
# yarn
$ yarn add img-map-area

# npm
$ npm i img-map-area

# pnpm
$ pnpm add img-map-area
```

# Usage

## Example

handling the **img map area** in the whole page:

```js
// src/plugins/responsive-img-map-area.js

import { responsiveImgMapArea } from 'img-map-area'

window.addEventListener('load', () => {
  // .map-area-img 放置在想要进行 responsive 处理的 img 元素上
  const elements = document.querySelectorAll('.map-area-img')

  const resizeHandler = () => {
    elements.forEach((imgEl) => {
      responsiveImgMapArea(imgEl)
    })
  }

  resizeHandler()

  window.addEventListener('resize', resizeHandler)
})
```

# CHANGE LOG

see <a href="./CHANGELOG.md">CHANGE LOG</a>.
