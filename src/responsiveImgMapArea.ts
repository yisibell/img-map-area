import getImageNaturalSize from './getImageNaturalSize'

/**
 * Handles a single img element, making the associated map area responsive
 */
const responsiveImgMapArea = (imgEl: HTMLImageElement) => {
  if (!imgEl) return
  if (typeof imgEl.getAttribute('usemap') === 'undefined') return

  const { parseInt } = Number

  imgEl.addEventListener('load', () => {
    let w = parseInt(imgEl.getAttribute('width') || '0')
    let h = parseInt(imgEl.getAttribute('height') || '0')

    if (!w || !h) {
      const size = getImageNaturalSize(imgEl)
      if (!w) w = size.w
      if (!h) h = size.h
    }

    const wPercent = imgEl.clientWidth / 100
    const hPercent = imgEl.clientHeight / 100

    const mapNameAttr = imgEl.getAttribute('usemap')
    const mapName =
      typeof mapNameAttr === 'string' ? mapNameAttr.replace('#', '') : ''

    document
      .querySelectorAll('map[name="' + mapName + '"] area')
      .forEach((areaEl) => {
        const areaElDataset = (areaEl as HTMLElement).dataset

        if (!areaElDataset.coords) {
          areaElDataset.coords = areaEl.getAttribute('coords') || ''
        }

        const coords = areaElDataset.coords
          .split(',')
          .map((str) => parseInt(str))
        const coordsPercent: number[] = new Array(coords.length)

        for (let i = 0; i < coordsPercent.length; ++i) {
          if (i % 2 === 0) {
            coordsPercent[i] = (coords[i] / w) * 100 * wPercent
          } else {
            coordsPercent[i] = (coords[i] / h) * 100 * hPercent
          }
        }

        areaEl.setAttribute('coords', coordsPercent.toString())
      })
  })

  imgEl.setAttribute('src', imgEl.getAttribute('src') || '')
}

export default responsiveImgMapArea
