$(document).ready(function(){
    let navigationLinks = $("[id = navigation-links]")
       navigationLinks.on("click",function(){
        console.log("clicked")})
     navigationLinks.map((item) => {
        // item.on('click')
      
        console.log(navigationLinks[item])
     })
});