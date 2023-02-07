$(document).ready(()=>{
    // hamburger click button
    $('.hamburger').on("click", ()=>{
        $(".hamburger").toggleClass("active")
        $(".menuitems").toggleClass("active")

    })

    // missing code


    // marketplace
    var products = [
        {name:"Lorem ipsum",image:"../assets/img/5.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/1.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/2.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/4.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/7.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/8.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/1.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/2.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/4.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/7.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/8.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/1.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/2.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/4.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/7.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/8.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/1.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/2.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/4.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/7.jpg",price:10},
        {name:"Lorem ipsum",image:"../assets/img/8.jpg",price:10}
    ]
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
                
                <h4>${price}</h4>

                <span class="cart">
                    <i class="fa-solid fa-cart-plus"></i>
                </span>
            </div>
            </div>
            `
        )
    }))
    console.log(newProducts)
});
