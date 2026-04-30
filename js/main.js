const btn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(btn&&nav){btn.addEventListener('click',()=>{const expanded=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open');});}
