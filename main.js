
/** NAVBAR WHEN SROLL **/
  const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

/** HUMBERGUR BUTTON **/
const burger=document.querySelector('.humber-container');
burger.addEventListener('click', () =>{
  document.querySelector('ul').classList.toggle('active');
  document.querySelector('.nav-content').classList.toggle('active');
  document.querySelector('.content-profile').style.animation="none";
});
document.querySelector('.nav-content').addEventListener('click', ()=>{
document.querySelector('ul').classList.toggle('active');
document.querySelector('.nav-content').classList.toggle('active');
});

/** LOGO NAME MOBILE **/
document.querySelector('.logo').addEventListener('click', ()=>{
document.querySelector('.logo').style.display="none";
document.querySelector('.content-profile').style.display="grid";
document.querySelector('.content-profile').style.animation="";
document.querySelector('.about-me').style.display="none";
document.querySelector('.resume').style.display="none";
});

/** NAVBAR BOTTONS **/
const home =document.querySelector('#home');
const profile =document.querySelector('#profile');
const services =document.querySelector('#services');
const projects =document.querySelector('#projects');
const contact =document.querySelector('#contact');

/** HOME BUTTON **/
home.addEventListener('click', function(){
document.querySelector('.logo').style.display="none";
document.querySelector('.content-profile').style.display="grid";
document.querySelector('ul').classList.toggle('active');
document.querySelector('.nav-content').classList.toggle('active');
document.querySelector('.content-profile').style.animation="";
document.querySelector('.about-me').style.display="none";
document.querySelector('.services').style.display="none";
document.querySelector('.projects').style.display="none";
document.querySelector('.contact').style.display="none";
});
/** ABOUT ME BUTTON **/
profile.addEventListener('click', function(){
document.querySelector('ul').classList.toggle('active');
document.querySelector('.nav-content').classList.toggle('active');
document.querySelector('.content-profile').style.display="none";
document.querySelector('.logo').style.display="flex";
document.querySelector('.about-me').style.display="block";
document.querySelector('.services').style.display="none";
document.querySelector('.projects').style.display="none";
document.querySelector('.contact').style.display="none";
});

/** SERVICES BUTTON **/
services.addEventListener('click', function(){
document.querySelector('ul').classList.toggle('active');
document.querySelector('.nav-content').classList.toggle('active');
document.querySelector('.content-profile').style.display="none";
document.querySelector('.logo').style.display="flex";
document.querySelector('.about-me').style.display="none";
document.querySelector('.services').style.display="block";
document.querySelector('.projects').style.display="none";
document.querySelector('.contact').style.display="none";
});

/** PORJECT BUTTON **/
projects.addEventListener('click', function(){
document.querySelector('ul').classList.toggle('active');
document.querySelector('.nav-content').classList.toggle('active');
document.querySelector('.content-profile').style.display="none";
document.querySelector('.logo').style.display="flex";
document.querySelector('.about-me').style.display="none";
document.querySelector('.services').style.display="none";
document.querySelector('.projects').style.display="block";
document.querySelector('.contact').style.display="none";
});

/** CONTACT BUTTON **/
contact.addEventListener('click', function(){
document.querySelector('ul').classList.toggle('active');
document.querySelector('.nav-content').classList.toggle('active');
document.querySelector('.content-profile').style.display="none";
document.querySelector('.logo').style.display="flex";
document.querySelector('.about-me').style.display="none";
document.querySelector('.services').style.display="none";
document.querySelector('.projects').style.display="none";
document.querySelector('.contact').style.display="block";
});

