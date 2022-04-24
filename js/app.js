
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

// TagCloud js for 3d text sphere
const Texts = [
  'HTML', 'CSS', 'JAVASCRIPT',
  'SWIFT', 'MONGOOSE', 'REACT',
  'PYTHON', 'SASS',
  'DJANGO', 'NODEJS', 'MONGODB',
  'EXPRESS', 'MYSQL', 'JQUERY', 'JAVA'
]

var tagCloud = TagCloud('.Sphere', Texts, {

  // Sphere radius in px
  radius: 330,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'fast',

  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
  direction: 135,

  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true

})

var color = '#ffc700';
document.querySelector('.Sphere').style.color = color

// Scroll to up Button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0, behavior: 'smooth' }, '300');
});

// Text ANimation
const svgPath = document.querySelectorAll('.path');

const svgText = anime({
  targets: svgPath,
  loop: false,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 700,
  delay: (el, i) => { return i * 500 }
});


// /// Smooth scroll effect
const scroll = new Scrooth({
  element: window,
  strength: 20,
  acceleration: 25,
  deceleration: 0.900,
});

//  SmoothReveal
ScrollReveal().reveal('nav', { delay: 2000 });
          ScrollReveal().reveal('.title', { delay: 500 });
          ScrollReveal().reveal('.exploration-text', { delay: 1000 });
          ScrollReveal().reveal('.exploration-grid', { delay: 1600 });
          ScrollReveal().reveal('.home-casestudies', { delay: 1600 });
          ScrollReveal().reveal('.footer-input', { delay: 1600 });
          ScrollReveal().reveal('.contact-form .text-area', { delay: 1600 });
          ScrollReveal().reveal('iframe', { delay: 2000 });
          ScrollReveal().reveal('.about-sec', { delay: 2000 });
          ScrollReveal().reveal('#my-form-button', { delay: 2000 });
          
          


// Projects images Animation GSAP



// Project Outputs Desc
// const header = document.querySelector(".top h1")
// header.innerHTML = header.innerText.split("").map(function(char){
//   if (char === '') {
//     char ="&nbsp;"
//   }
//   return "<span>"+char+"</span>"
// }).join("")

// anime.timeline({ loop: false})
// .add({
//   targets: ".top h1 span",
//   scale: [3,1],
//   delay: function(element, i) {
//     return i*50
//   }
// })


footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));



// Skill Effect
function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };
    setTimeout(updateCount, 1000);
  });
}

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});


/// ASYNC JS form for Form Submission ( FORMSPREE API SERVICE )
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.classList.add('.statusMssg');
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

var morphing = anime({
  targets: '.morph',
	points: [
        //Debut
        { value: '460.677372 125.296036 108.040017 24.8652344 112.454079 125.296036' },
        //Fin
        { value: '460.677372 157.296036 112.758683 38.9677241 119.111306 145.719727' },
	],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true
});

var morphing = anime({
  targets: '.morph2',
	points: [
        //Debut
        { value: '108.040017 24.8652344 168.780251 0 460.677372 125.296036' },
        //Fin
        { value: '112.758683 38.9677241 184.146186 0 460.677372 157.296036' },
	],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true
});

var morphing = anime({
  targets: '.morph3',
	points: [
        //Debut
        { value: '75.3147561 38.1354167 460.677372 125.296036 0 68.5184024' },
        //Fin
        { value: '78.250435 57.8044647 460.677372 157.296036 0 100.518402' },
	],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true
});


var bleep = new Audio();
bleep.src = "./sounds/bubble1.wav";

function loadContent(num){
    bleep.play(); 
}





