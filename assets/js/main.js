// HAMBURGER
var hamburger = document.querySelector(".hamburger");
var menuitems = document.querySelector(".menuitems");
hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active")
    menuitems.classList.toggle("active")
})


// hamburger disappears when tappped outside the box
menuItems = document.querySelectorAll(".menuItems");
menuItems.forEach(element => element.addEventListener('click',()=>{
    hamburger.classList.remove("active")
    menuitems.classList.remove("active") 
}
));