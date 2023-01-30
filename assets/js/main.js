// HAMBURGER
var hamburger = document.querySelector(".hamburger");
var menuitems = document.querySelector(".menuitems");
hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active")
    menuitems.classList.toggle("active")
})