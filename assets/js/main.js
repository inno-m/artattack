$(document).ready(()=>{
    // hamburger click button
    $('.hamburger').on("click", ()=>{
        $(".hamburger").toggleClass("active")
        $(".menuitems").toggleClass("active")

    });

    // hamburger disappears on click
        $('[class=menuItems]').on('click',()=>{
        $(".hamburger").toggleClass("active");
         $(".menuitems").toggleClass("active")
    });

    // marketplace
    var products = [
        {id:"mountain",name:"Lorem ipsum",image:"../assets/img/5.jpg",price:10},
        {id:"river",name:"Lorem ipsum",image:"../assets/img/1.jpg",price:10},
        {id:"mountain",name:"Lorem ipsum",image:"../assets/img/2.jpg",price:10},
        {id:"space",name:"Lorem ipsum",image:"../assets/img/4.jpg",price:10},
        {id:"mountain",name:"Lorem ipsum",image:"../assets/img/7.jpg",price:10},
        {id:"mountain",name:"Lorem ipsum",image:"../assets/img/8.jpg",price:10},
        {id:"buildings",name:"Lorem ipsum",image:"../assets/img/1.jpg",price:10},
        {id:"buildings",name:"Lorem ipsum",image:"../assets/img/2.jpg",price:10},
        {id:"buildings",name:"Lorem ipsum",image:"../assets/img/4.jpg",price:10},
        {id:"buildings",name:"Lorem ipsum",image:"../assets/img/7.jpg",price:10},
        {id:"nature",name:"Lorem ipsum",image:"../assets/img/8.jpg",price:10},
        {id:"nature",name:"Lorem ipsum",image:"../assets/img/1.jpg",price:10},
        {id:"nature",name:"Lorem ipsum",image:"../assets/img/2.jpg",price:10},
        {id:"nature",name:"Lorem ipsum",image:"../assets/img/4.jpg",price:10},
        {id:"nature",name:"Lorem ipsum",image:"../assets/img/7.jpg",price:10},
        {id:"space",name:"Lorem ipsum",image:"../assets/img/8.jpg",price:10},
        {id:"space",name:"Lorem ipsum",image:"../assets/img/1.jpg",price:10},
        {id:"space",name:"Lorem ipsum",image:"../assets/img/2.jpg",price:10},
        {id:"space",name:"Lorem ipsum",image:"../assets/img/4.jpg",price:10},
        {id:"space",name:"Lorem ipsum",image:"../assets/img/7.jpg",price:10},
        {id:"space",name:"Lorem ipsum",image:"../assets/img/8.jpg",price:10}
    ]

    $('#all').on('click',function(){
          $(".grid-container").html(newProducts.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })
    // filter
    let space = products.filter(e =>e.id=='space')
    let anime = products.filter(e =>e.id=='anime')
    let animals = products.filter(e =>e.id=='animals')
    let mountains = products.filter(e =>e.id=='mountain')
    let nature = products.filter(e =>e.id=='nature')
    let food = products.filter(e =>e.id=='food')
    let beaches = products.filter(e =>e.id=='beaches')
    let technology = products.filter(e =>e.id=='technology')
    let buildings= products.filter(e =>e.id=='buildings')
    let cars = products.filter(e =>e.id=='cars')
    let landscape = products.filter(e =>e.id=='landscape')

// SPACE
    $('#space').on('click',function(){
          $(".grid-container").html(space.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })
    // MOUNTAINS
        $('#mountains').on('click',function(){
          $(".grid-container").html(mountains.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })

    // NATURE
        $('#nature').on('click',function(){
          $(".grid-container").html(nature.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })

    // BULDINGS
        $('#buildings').on('click',function(){
          $(".grid-container").html(buildings.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })
    // ANIME

          $('#anime').on('click',function(){
          $(".grid-container").html(anime.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })
    // ANIMALS
        $('#animals').on('click',function(){
          $(".grid-container").html(animals.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })

    // FOOD

          $('#food').on('click',function(){
          $(".grid-container").html(food.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })
    // BEACHES
          $('#beaches').on('click',function(){
          $(".grid-container").html(beaches.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })
    // CARS
          $('#cars').on('click',function(){
          $(".grid-container").html(cars.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })
    // LANDSCAPE
          $('#landscape').on('click',function(){
          $(".grid-container").html(landscape.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })
    // TECHNOLOGY
          $('#technology').on('click',function(){
          $(".grid-container").html(technology.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    })
    // LOOP THROUGH THE PRODUCTS AND RETURN EACH PRODUCT
    let newProducts = products.map((item)=>{
        return item
    })
    // RETURN HTML ELEMENTS IN THE DOM
    $(".grid-container").html(newProducts.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p style="color:white">${name}</p>
            <div class="extras">
                <span class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                
                <h4>$${price}.00</h4>

                <span class="cart">
                    <i id="addCart" class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }).join(''))
    console.log(newProducts)
});
