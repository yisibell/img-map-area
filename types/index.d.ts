declare function getImageNaturalSize(imgEl: HTMLImageElement): {
  w: number
  h: number
}

declare function responsiveImgMapArea(imgEl: HTMLImageElement): void

declare function createImgMapAreaResponsiveListener(imgSelector?: string): void

export {
  responsiveImgMapArea,
  getImageNaturalSize,
  createImgMapAreaResponsiveListener,
}
