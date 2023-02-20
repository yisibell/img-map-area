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
  // Put .map-area-img selector in the <img /> element which will be responsive
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

Or, Just use `createImgMapAreaResponsiveListener` for above does.

``` ts
// src/plugins/responsive-img-map-area.ts

import { createImgMapAreaResponsiveListener } from 'img-map-area'

createImgMapAreaResponsiveListener()

```

# APIS

1. `responsiveImgMapArea`

Handles a single img element, making the associated map area responsive.

``` ts
import { responsiveImgMapArea } from 'img-map-area'
```

**parameters**

- `imgEl`: `HTMLImageElement`.

1. `createImgMapAreaResponsiveListener`

Create a listener to make map area responsive.

``` ts
import { createImgMapAreaResponsiveListener } from 'img-map-area'
```

**parameters**

- `imgSelector`: A selector string, default is `.map-area-img`.

# CHANGE LOG

see <a href="./CHANGELOG.md">CHANGE LOG</a>.
