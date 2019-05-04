let slideIndex = 0
const slides = [...document.querySelectorAll('.mySlides')]
const dots = [...document.querySelectorAll('.dot')]
const wideSlide = document.querySelector(".wide-slide")

const setWidths = () => {
  wideSlide.style.width = slides.length * 850 + "px"
  slides.forEach((val, num) => {
    slides[num].style.width = 100 / slides.length + "%"
  })
}

const sliderController = (() => {
	const nextSlide = () => {
		goToSlide(slideIndex + 1)
	}
	const prevSlide = () => {
		goToSlide(slideIndex - 1)
	}
	const removeDisplay = () => {
		// slides[slideIndex].style.transform = "translateX(100%)";
		dots[slideIndex].className = 'dot'
	}
	const setNewIndex = n => {
		if (n == slides.length) {
			slideIndex = 0
		} else if (n < 0) {
			slideIndex = slides.length - 1
		} else {
			slideIndex = n
		}
	}
	const showNewSlide = () => {
		wideSlide.style.left = "-" + slideIndex * 850 + "px";
		dots[slideIndex].className = 'dot active'
	}
	const goToSlide = n => {
		removeDisplay()
		setNewIndex(n)
		showNewSlide()
	}
	const display = clicked => {
		clearInterval(slideInterval)
		if (clicked.className == 'prev') {
			prevSlide()
		} else if (clicked.className == 'next') {
			nextSlide()
		} else {
			goToSlide(dots.indexOf(clicked))
		}
		slideInterval = setInterval(nextSlide, 4000)
	}
	return { nextSlide, display }
})()

const eventListener = () => {
	const slider = document.querySelector('.slideshow-container')

	slider.addEventListener('click', event => {
		const clicked = event.target
		sliderController.display(clicked)
	})
}

let slideInterval = setInterval(sliderController.nextSlide, 4000)
eventListener()
setWidths()
