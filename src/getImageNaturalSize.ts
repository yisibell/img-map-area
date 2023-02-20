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
  } else {
    const temp = new Image()
    const src = imgEl.getAttribute('src') || ''

    temp.src = src
    size.w = temp.width
    size.h = temp.height
  }

  return size
}

export default getImageNaturalSize
