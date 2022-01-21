# img-map-area
A library that makes Image Map Area responsive.

# Installation

``` bash
# yarn
$ yarn add img-map-area

# npm
$ npm i img-map-area
```

# Usage

1. 统一处理页面中的 `img map area`.

``` js
// src/plugins/responsive-img-map-area.js

import { responsiveImgMapArea } from 'img-map-area'

window.onload = function() {
  // .map-area-img 放置在想要进行 responsive 处理的 img 元素上
  const elements = document.querySelectorAll('.map-area-img').forEach(imgEl => {
    responsiveImgMapArea(imgEl)
  })
}

```

2. 应用到某个单独组件中。比如 `.vue` 或者 `React` 组件中。