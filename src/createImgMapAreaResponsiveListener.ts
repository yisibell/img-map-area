import responsiveImgMapArea from './responsiveImgMapArea'

/**
 *  Create a listener to make map area responsive
 */
const createImgMapAreaResponsiveListener = (imgSelector = '.map-area-img') => {
  window.addEventListener('load', () => {
    // Put .map-area-img selector in the <img /> element which will be responsive
    const elements = document.querySelectorAll<HTMLImageElement>(imgSelector)

    const resizeHandler = () => {
      elements.forEach((imgEl) => {
        responsiveImgMapArea(imgEl)
      })
    }

    resizeHandler()

    window.addEventListener('resize', resizeHandler)
  })
}

export default createImgMapAreaResponsiveListener
