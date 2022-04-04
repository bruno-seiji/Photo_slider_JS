var i = 1
var pic1 = document.querySelector('.pic1')
var pic2 = document.querySelector('.pic2')
var pic3 = document.querySelector('.pic3')
var pic4 = document.querySelector('.pic4')

function change() {
  if (i == 0) {
    pic1.style.left = '0'
    pic2.style.left = '100%'
    pic3.style.left = '200%'
    pic4.style.left = '300%'
  } else if (i == 1) {
    pic1.style.left = '-100%'
    pic2.style.left = '0%'
    pic3.style.left = '100%'
    pic4.style.left = '200%'
  } else if (i == 2) {
    pic1.style.left = '-200%'
    pic2.style.left = '-100%'
    pic3.style.left = '0%'
    pic4.style.left = '100%'
  } else if (i == 3) {
    pic1.style.left = '-300%'
    pic2.style.left = '-200%'
    pic3.style.left = '-100%'
    pic4.style.left = '0%'
  }
  console.log(i)
  i++
  if (i > 3) {
    i = 0
  }
}
