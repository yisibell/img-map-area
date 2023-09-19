/**
 * Get image Natural size
 */
const getImageNaturalSize = (imgEl: HTMLImageElement) => {
  const size = {
    w: 0,
    h: 0,
  }

  if (imgEl.naturalWidth) {
    size.w = imgEl.naturalWidth
    size.h = imgEl.naturalHeight
  }

  return size
}

export default getImageNaturalSize
