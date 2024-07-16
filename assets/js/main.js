/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link');

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

// navLink.forEach(n=>n.addEventListener('click',linkAction))
for(let n of navLink){
    n.addEventListener('click',linkAction)
}
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader=()=>{
    const header=document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}

window.addEventListener('scroll',shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll') :
                        scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)


Window.addEventListener('scroll',scrollActive)
