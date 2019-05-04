let slideIndex = 0
const slides = [...document.querySelectorAll('.mySlides')]
const dots = [...document.querySelectorAll('.dot')]
let nextIndex = 1
let prevIndex = slides.length - 1
// const wideSlide = document.querySelector(".wide-slide")

// const setWidths = () => {
//   wideSlide.style.width = slides.length * 850 + "px"
//   slides.forEach((val, num) => {
//     slides[num].style.width = 100 / slides.length + "%"
//   })
// }

const sliderController = (() => {
	const toNextSlide = () => {
		goToSlide(slideIndex + 1)
	}
	const toPrevSlide = () => {
		goToSlide(slideIndex - 1)
	}
	const setNewIndex = n => {
		if (n == slides.length) {
      slideIndex = 0
      nextIndex = 1
      prevIndex = slides.length - 1
		} else if (n < 0) {
      slideIndex = slides.length - 1
      nextIndex = 0
      prevIndex = slideIndex - 1
		} else {
      slideIndex = n
      if (slideIndex == 0) {
        nextIndex = 1
        prevIndex = slides.length - 1
      } else if (slideIndex == slides.length - 1) {
        nextIndex = 0
        prevIndex = slideIndex - 1
      } else {
        nextIndex = slideIndex + 1
        prevIndex = slideIndex - 1
      }
		}
	}
	const showNewSlide = () => {
    slides.forEach((val, num) => {
      if (num == prevIndex) {
        slides[num].className = "mySlides prev-slide"
      } else if (num == slideIndex) {
        slides[num].className = "mySlides current-slide"
      } else if (num == nextIndex) {
        slides[num].className = "mySlides next-slide"
      } else {
        slides[num].className = "mySlides"
      }
    })
    dots[slideIndex].className = 'dot active'
	}
	const goToSlide = n => {
    dots[slideIndex].className = 'dot'
		setNewIndex(n)
		showNewSlide()
  }
  const resetPrevNext = () => {
    slides.forEach((val, num) => {
      if (num == prevIndex) {
        slides[num].className = "mySlides prev-slide behind"
      } else if (num == slideIndex) {
        slides[num].className = "mySlides current-slide"
      } else if (num == nextIndex) {
        slides[num].className = "mySlides next-slide behind"
      } else {
        slides[num].className = "mySlides"
      }
    })
    removeBehind()
  }
  const removeBehind = () => {
    slides.forEach((val, num) => {
      if (num == prevIndex) {
        slides[num].className = "mySlides prev-slide"
      } else if (num == nextIndex) {
        slides[num].className = "mySlides next-slide"
      }
    })
  }
  const dotsNav = n => {
    if (slides[n].className === "mySlides") {
      dots[slideIndex].className = 'dot'
      slides.forEach((val, num) => {
        if (num == slideIndex) {
          slides[num].className = "mySlides fade"
        } else {
          slides[num].className = "mySlides"
        }
      })
      slides[n].className = "mySlides current-slide fade"
      dots[n].className = 'dot active'
      setNewIndex(n)
      setTimeout(resetPrevNext, 1000)
    } else {
      goToSlide(n)
    }
  }
	const display = clicked => {
		clearInterval(slideInterval)
		if (clicked.className == 'prev') {
			toPrevSlide()
		} else if (clicked.className == 'next') {
			toNextSlide()
		} else if (clicked.className == 'dot') {
      dotsNav(dots.indexOf(clicked))
		}
		slideInterval = setInterval(toNextSlide, 40000)
	}
	return { toNextSlide, display }
})()

const eventListener = () => {
	const slider = document.querySelector('.slideshow-container')

	slider.addEventListener('click', event => {
		const clicked = event.target
		sliderController.display(clicked)
	})
}

let slideInterval = setInterval(sliderController.toNextSlide, 40000)
eventListener()
