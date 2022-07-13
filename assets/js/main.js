// import React, { useState, useEffect } from 'react';

// function Main() {

//   const [width, setWidth] = useState(window.innerWidth);
//   const updateWidth = () => {
//     setWidth(window.innerWidth)
//   }

//   useEffect(() => {
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   });

//   console.log(width);
// }
//   export default Main;

/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}
/*====================== Mixitup Filter Portfolio ===============*/
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});

/*====================== Link Active work ===============*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
  linkWork.forEach(l=> l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))

/*======= Work Popup =======*/
document.addEventListener("click", (e) => {
  if(e.target.classList.contains("work__button")) {
      togglePortfolioPopup();
      portfolioItemDetails(e.target.parentElement);
  }
})

function togglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)


function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}