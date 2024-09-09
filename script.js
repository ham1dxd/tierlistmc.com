const slides = document.querySelectorAll(".slide");
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
var counter = 0;

slides.forEach(
    (slide,index) => {
     slide.style.left = `${index * 100}%`
    }
)

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

const goPrev =  () => {
    if(counter === 0){
        return
    }
    counter--
    slideImage()
    console.log(counter)
}

const goNext =  () => {
    if(counter === 2){
        return
    }
    counter++
    slideImage()
    console.log(counter)
} 

next.addEventListener("click" , goNext)
prev.addEventListener("click" , goPrev)

