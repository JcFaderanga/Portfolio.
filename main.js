
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

document.querySelector('.logo').addEventListener('click', ()=>{
document.querySelector('.logo').style.display="none";
document.querySelector('.content-profile').style.display="grid";
document.querySelector('.content-profile').style.animation="";
document.querySelector('.about-me').style.display="none";
});
const home =document.querySelector('#home');
const profile =document.querySelector('#profile');

home.addEventListener('click', function(){
document.querySelector('.logo').style.display="none";
document.querySelector('.content-profile').style.display="grid";
document.querySelector('ul').classList.toggle('active');
document.querySelector('.nav-content').classList.toggle('active');
document.querySelector('.content-profile').style.animation="";
document.querySelector('.about-me').style.display="none";
});
profile.addEventListener('click', function(){
document.querySelector('ul').classList.toggle('active');
document.querySelector('.nav-content').classList.toggle('active');
document.querySelector('.content-profile').style.display="none";
document.querySelector('.logo').style.display="flex";
document.querySelector('.about-me').style.display="block";
});
skill.addEventListener('click', function(){
document.querySelector('ul').classList.toggle('active');
document.querySelector('.nav-content').classList.toggle('active');
document.querySelector('.content-profile').style.display="none";
document.querySelector('.logo').style.display="flex";
document.querySelector('.about-me').style.display="none";
});
