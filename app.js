let menu=document.querySelector('#menu');
let cancel=document.querySelector('#cancel');
let menuBar=document.querySelector('.menu-bar');

menu.addEventListener('click',()=>{
    menuBar.style.display='block';
    menu.style.display='none';
    cancel.style.display='block';
})

cancel.addEventListener('click',()=>{
    menuBar.style.display='none';
    menu.style.display='block';
    cancel.style.display='none';
})