
//  landing page
let backimages = Array.from(document.querySelectorAll('.landing .image img'));
currentimageslanding = 0;

let timerlanding = setInterval(()=>{
    removeactive();
    if (currentimageslanding === backimages.length) {
        currentimageslanding = 0
    }
    backimages[currentimageslanding++].classList.add('active');
},5000);

function removeactive(){
    backimages.forEach(img =>{
        img.classList.remove('active');
    })
}




// mega menu active
document.querySelector('.header .container .main-nav .add').onclick =  () => {
    document.querySelector('.header .container .main-nav .add').classList.toggle('active');
}



// create popup with the images

let Img1 = document.querySelector('.gallery .box img[alt="image one"]');

if (Img1.hasAttribute("class")) {
    console.log(Img1.getAttribute('class'));
}

let Img2 = document.querySelector('.gallery .box img[alt="image two"]');
let Img3 = document.querySelector('.gallery .box img[alt="image three"]');
let Img4 = document.querySelector('.gallery .box img[alt="image for"]');
let Img5 = document.querySelector('.gallery .box img[alt="image five"]');
let Img6 = document.querySelector('.gallery .box img[alt="image six"]');

let arrayimg = [Img1, Img2, Img3, Img4, Img5, Img6];

// console.log(arrayimg);

arrayimg.forEach(img =>{
    img.addEventListener('click',(e)=>{

        // create overlay element
        let overlay = document.createElement('div');

        overlay.className = "popup-overlay";

        // append overlay to body

        document.body.appendChild(overlay);

        // create popup box

        let popupbox = document.createElement('div');

        popupbox.className = "popup-box";

        if (img.alt !== null) {
            
            let imgheadin = document.createElement('h3');
            let textheading = document.createTextNode(img.alt);
            imgheadin.appendChild(textheading);
            popupbox.appendChild(imgheadin)
            
        } 

        // create the image

        let popupImg = document.createElement('img');

        // set image src

        popupImg.src = img.src;

        // add img to pupop box and body
        popupbox.appendChild(popupImg);

        document.body.appendChild(popupbox);

        // create close span

        let closeButton = document.createElement('span');

        let closeText = document.createTextNode('X')

        closeButton.appendChild(closeText)

        closeButton.className = "close-button"

        popupbox.appendChild(closeButton);

    

    })
})


document.addEventListener('click', function (e){
    if (e.target.className === "close-button") {
        
        // remove the current puppop

        e.target.parentNode.remove();

        document.querySelector('.popup-overlay').remove(); 
    }
})

//  select skills 

let ourskils = document.querySelector(".our-skill");

window.onscroll = function () {

    // skills ofset Top

    let skillsTop = ourskils.offsetTop; // tahsblk height mn top hta div t3k
    // console.log(skillsTop);

    // Ofset Hight or outer height

    let skillheight = ourskils.offsetHeight; // tahsblk height t3 div t3k

    // window height

    let windowHeight = this.innerHeight; // height t3 window ecran

    // window scrolltop  => joz1 li t3ml fih scroll

    let windowScrollTop = this.pageYOffset; // gdah ybt cursor t3 scoll mn pixel

    // console.log(windowScrollTop);

    // console.log(skillsTop);

    if (windowScrollTop > (skillsTop + skillheight - windowHeight)) {
        
        let allskills = document.querySelectorAll('.our-skill .skills-rate .box .gray span');
        
        
        allskills.forEach(skill =>{
            // console.log(skill);

            skill.style.width = skill.dataset.progress;
        })
    }
}

// onclick li => skills

let LiSkills = document.querySelector('.header .add .mega-menu .links .skill');

LiSkills.onclick = function () {
    
    let allskills = document.querySelectorAll('.our-skill .skills-rate .box .gray span');
        
        
        allskills.forEach(skill =>{
            // console.log(skill);

            skill.style.width = skill.dataset.progress;
        })
   
}



// time line timer 

let CountDownTime = new Date("Dec 31, 2023 23:59:59").getTime();
// console.log(CountDownTime);

let counter = setInterval(()=>{

    // get date now
    let DateNow = new Date().getTime();

    //  find the date diffrence between Now And Countdown Date
    let dataDiff = CountDownTime - DateNow;
    
    // get time uinite
    let secondes = Math.floor(dataDiff % ( 1000 * 60) / 1000) ;
    let minutes = Math.floor(dataDiff % (1000 * 60 * 60) / 1000 / 60);
    let hours = Math.floor(dataDiff % (1000 * 60 * 60 * 24) /1000 / 60 / 60);
    let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
    document.querySelector('.events .unit .days').innerHTML = days < 10 ? `0${days}`:days;
    document.querySelector('.events .unit .hours').innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.events .unit .minutes').innerHTML = minutes < 10 ? `0${minutes}`:minutes;
    document.querySelector('.events .unit .seconds').innerHTML = secondes < 10 ? `0${secondes}`:secondes;

    if (dataDiff  < 0 ) {
        clearInterval(counter)
    }

},1000);



// section  => videoss

let arrays = document.querySelectorAll('.video .preview .videos video');

// array t3 video t3na
let arrayVideo = Array.from(arrays);

// array t3 Li 
let arrayLI = Array.from(document.querySelectorAll('.video .list ul li'));


arrayLI.forEach((li, indexLi) => {
    li.addEventListener('click',(e)=> {

        removeAllActive();

        // add active list to the clikable

        e.target.classList.add("active");

        arrayVideo.forEach((video, indexVideo) => {

            if (indexLi === indexVideo) {

                video.classList.add('active')
            }
        })
    })
});


function removeAllActive() {

    arrayLI.forEach(Li =>{
        Li.classList.remove('active');
    });
    arrayVideo.forEach(Vi =>{
        Vi.classList.remove('active');
    })
}


