

const carousel = document.querySelector(".carousel");
const arrowbutton = document.querySelectorAll(".wrapper i");
const firstCrdWiwdth = document.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];




let isDraggig = false , startX , startScrollLeft ;

// get the number of cards thet can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCrdWiwdth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin" ,card.outerHTML)
});

carouselChildrens.slice(0, cardPerView).forEach(card =>{
    carousel.insertAdjacentHTML("beforeend" ,card.outerHTML)
});



arrowbutton.forEach( btn => {
    btn.addEventListener("click", () =>{
        // if clicked button is left, then substarct first card width from the carousel scrollLeft else add to it
       carousel.scrollLeft += btn.id === "left" ? -firstCrdWiwdth :  firstCrdWiwdth;
    })
})

const dragstart = function (e){
   isDraggig = true; 
   carousel.classList.add('dragging');
   // records theinitial cursor and scroll position of the carsouel
   startX = e.pageX;
   startScrollLeft = carousel.scrollLeft;
}

const dragging = function (e) {
    // console.log(e.pageX );
    if (!isDraggig) {
        // if isDraggig is false from here
        return
    }
    // scrollLeft sets or return the number of pixels an element is scrolled horizontally
    
    // appdates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX -  startX); 

    //console.log(carousel.scrollLeft);
}

const dragStop = () => {
    isDraggig = false;
    carousel.classList.remove('dragging')
}


const infinitScroll =  () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }else if (carousel.scrollLeft ===  Math.round(carousel.scrollWidth - carousel.offsetWidth)){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth
        carousel.classList.remove("no-transition");
    }
}

carousel.addEventListener("mousedown", dragstart)
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infinitScroll);
