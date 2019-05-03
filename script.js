let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides")
const dots = document.querySelectorAll(".dot")

const nextSlide = () => {
  goToSlide(slideIndex + 1)
}

const prevSlide = () => {
  goToSlide(slideIndex - 1)
}

let slideInterval = setInterval(nextSlide, 10000)

const goToSlide = n => {
  slides[slideIndex].style.display = "none"
  dots[slideIndex].className = "dot"
  if (n == slides.length) {slideIndex = 0}
  else if (n < 0) {slideIndex = slides.length - 1}
  else {slideIndex = n}
  slides[slideIndex].style.display = "block"
  dots[slideIndex].className = "dot active"
}

const slider = document.querySelector(".slideshow-container")

slider.addEventListener( "click", event => {
  const clicked = event.target
  if (clicked.className == "prev") {
    clearInterval(slideInterval)
    prevSlide()
    slideInterval = setInterval(nextSlide, 10000)
  } else if (clicked.className == "next") {
    clearInterval(slideInterval)
    nextSlide()
    slideInterval = setInterval(nextSlide, 10000)
  }
}) 

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// const showSlides = () => {
//   clearTimeout(timeOut)
//   const slider = document.querySelector(".slideshow-container")
//   slider.addEventListener( "click", event => {
//     const clicked = event.target
//     if (clicked.className == "prev") {
//       slideIndex -= 1
//     } else if (clicked.className == "next") {
//       slideIndex += 1
//     }
//   })
//   if (slideIndex == slides.length) {slideIndex = 0}
//   if (slideIndex < 0) {slideIndex = slides.length - 1}
//   slides.forEach((slide, num) => {
//     slides[num].style.display = "none"
//   })
//   slides[slideIndex].style.display = "block";
//   slideIndex++;
//   if (slideIndex == slides.length) {slideIndex = 0}
//   timeOut = setTimeout(showSlides, 5000);
  // var dots = document.getElementsByClassName("dot");
   
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
   
  // dots[slideIndex-1].className += " active";
// }

//https://codepen.io/SitePoint/pen/WwqvqB

// showSlides();

//automatic slide show

// let slideIndex = 0

// const showSlides = () => {
//   const slides = document.querySelectorAll(".mySlides")
//   slides.forEach((slide, num) => {
//     slides[num].style.display = "none"
//   })  
//   slides[slideIndex].style.display = "block"; 
//   slideIndex++;
//   if (slideIndex == slides.length) {slideIndex = 0} 
//   setTimeout(showSlides, 5000); // Change image every 5 seconds
// }
// showSlides()