const hamburgerBtn = document.getElementById("hamburgerBtn");
const hamburgerLists = document.getElementById("hamburgerLists");

hamburgerBtn.addEventListener("click", () => {
  hamburgerLists.classList.toggle("absolute");
  hamburgerLists.classList.toggle("hidden");
  hamburgerLists.classList.toggle("my-2");
  hamburgerBtn.classList.toggle("hamburger-active");
});

// window.addEventListener("click", function (e) {
//   if (e.target != hamburgerBtn && e.target != hamburgerLists) {
//     hamburgerLists.classList.remove("absolute");
//     hamburgerLists.classList.remove("hidden");
//     hamburgerLists.classList.remove("my-2");
//     hamburgerBtn.classList.remove("hamburger-active");
//     hamburgerLists.classList.add("hidden");
//   }
// });

// window.onload = function () {
//   document.body.classList.add("loaded");
// };

window.onscroll = function () {
  const header = document.querySelector("nav");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`nav a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`nav a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// for text otomatis
const words = ["sensei", "sepuh", "fosil"];
    
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 180; // in milliseconds
const cursor = document.getElementById('cursor');
const dynamicWordElement = document.getElementById('dynamic-word');
const staticText = "I'm still a beginner, please tutor me ";

function type() {
  if (charIndex < words[wordIndex].length) {
    dynamicWordElement.innerText += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, typingSpeed * 2);
  }
}

function erase() {
  if (charIndex > 0) {
    dynamicWordElement.innerText = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, typingSpeed / 2);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingSpeed);
  }
}

// Initial call to start the typewriter effect
setTimeout(type, typingSpeed);
