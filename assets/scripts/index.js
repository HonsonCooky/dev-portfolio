/**
 * Assumes deferred module is used.
 */

// Working Experience Years Calculation
const start = new Date('2021/08/01') // Account for 3 months at Raygun
const diff = (new Date() - start) / (1000 * 60 * 60 * 24 * 365)
const yearsWorkingElement = document.getElementById('years-working')
if (yearsWorkingElement) yearsWorkingElement.innerText = diff.toFixed(2)

// Image Full Size
const images = document.querySelectorAll('img')
images.forEach((img) => {
  img.addEventListener('click', function (ev) {
    let fileNameIndex = img.src.indexOf('imgs/') + 5
    if (fileNameIndex <= 4) return
    let origin = window.location.origin
    let path = `${origin}/assets/imgs/full-size/${img.src.substring(fileNameIndex)}`
    window.open(path, '_blank')
  })
})
