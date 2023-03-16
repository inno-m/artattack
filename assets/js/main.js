$(document).ready(()=>{
    // hamburger click button
    $('.hamburger').on("click", ()=>{
        // $(".cartItems").removeClass("active")
        $(".hamburger").toggleClass("active")
        $(".menuitems").toggleClass("active")
        // $(".cartItems").remove("active")


    });
        $('[class=menuItems]').on('click',()=>{
        $(".hamburger").toggleClass("active");
         $(".menuitems").toggleClass("active")
    });
   



    // marketplace
    var products = [
        // animals photography
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/1.jpg",price:10},
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/2.jpg",price:10},
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/3.jpg",price:10},
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/4.jpg",price:10},
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/5.jpg",price:10},
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/6.jpg",price:10},
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/7.jpg",price:10},
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/8.jpg",price:10},
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/9.jpg",price:10},
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/10.jpg",price:10},
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/11.jpg",price:10},
        {category:"photography",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/photography/12.jpg",price:10},

        // animals painting
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/1.jpg",price:10},
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/2.jpg",price:10},
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/3.jpg",price:10},
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/4.jpg",price:10},
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/5.jpg",price:10},
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/6.jpg",price:10},
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/7.jpg",price:10},
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/8.jpg",price:10},
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/9.jpg",price:10},
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/10.jpg",price:10},
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/11.jpg",price:10},
        {category:"painting",id:"animals",name:"Lorem ipsum",image:"../assets/img/animals/painting/12.jpg",price:10},



        // beaches photography
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/1.jpg",price:10},
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/2.jpeg",price:10},
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/3.jpeg",price:10},
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/4.jpeg",price:10},
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/5.jpeg",price:10},
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/6.jpeg",price:10},
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/7.jpeg",price:10},
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/8.jpeg",price:10},
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/9.jpeg",price:10},
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/10.jpeg",price:10},
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/11.jpeg",price:10},
        {category:"photography",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/photography/12.jpeg",price:10},

        // beaches painting
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/1.jpeg",price:10},
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/2.jpeg",price:10},
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/3.jpeg",price:10},
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/4.jpeg",price:10},
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/5.jpeg",price:10},
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/6.jpeg",price:10},
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/7.jpeg",price:10},
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/8.jpeg",price:10},
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/9.jpeg",price:10},
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/10.jpeg",price:10},
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/11.jpeg",price:10},
        {category:"painting",id:"beaches",name:"Lorem ipsum",image:"../assets/img/beaches/painting/12.jpeg",price:10},



        // buildings photography
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/1.jpeg",price:10},
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/2.jpeg",price:10},
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/3.jpeg",price:10},
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/4.jpeg",price:10},
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/5.jpeg",price:10},
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/6.jpeg",price:10},
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/7.jpeg",price:10},
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/8.jpeg",price:10},
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/9.jpeg",price:10},
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/10.jpeg",price:10},
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/11.jpeg",price:10},
        {category:"photography",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/photography/12.jpeg",price:10},

        // buildings painting
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/1.jpeg",price:10},
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/2.jpeg",price:10},
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/3.jpeg",price:10},
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/4.jpeg",price:10},
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/5.jpeg",price:10},
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/6.jpeg",price:10},
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/7.jpeg",price:10},
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/8.jpeg",price:10},
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/9.jpeg",price:10},
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/10.jpeg",price:10},
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/11.jpeg",price:10},
        {category:"painting",id:"buildings",name:"Lorem ipsum",image:"../assets/img/buildings/painting/12.jpeg",price:10},



        // cars photography
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/1.jpeg",price:10},
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/2.jpeg",price:10},
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/3.jpeg",price:10},
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/4.jpeg",price:10},
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/5.jpeg",price:10},
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/6.jpeg",price:10},
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/7.jpeg",price:10},
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/8.jpeg",price:10},
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/9.jpeg",price:10},
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/10.jpeg",price:10},
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/11.jpeg",price:10},
        {category:"photography",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/photography/12.jpeg",price:10},

        // cars painting
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/1.jpeg",price:10},
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/2.jpeg",price:10},
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/3.jpeg",price:10},
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/4.jpeg",price:10},
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/5.jpeg",price:10},
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/6.jpeg",price:10},
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/7.jpeg",price:10},
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/8.jpeg",price:10},
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/9.jpeg",price:10},
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/10.jpeg",price:10},
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/11.jpeg",price:10},
        {category:"painting",id:"cars",name:"Lorem ipsum",image:"../assets/img/cars/painting/12.jpeg",price:10},



         // food photography
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/1.jpeg",price:10},
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/2.jpeg",price:10},
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/3.jpeg",price:10},
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/4.jpeg",price:10},
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/5.jpeg",price:10},
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/6.jpeg",price:10},
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/7.jpeg",price:10},
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/8.jpeg",price:10},
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/9.jpeg",price:10},
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/10.jpeg",price:10},
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/11.jpeg",price:10},
         {category:"photography",id:"food",name:"Lorem ipsum",image:"../assets/img/food/photography/12.jpeg",price:10},
 
         // food painting
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/1.jpeg",price:10},
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/2.jpeg",price:10},
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/3.jpeg",price:10},
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/4.jpeg",price:10},
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/5.jpeg",price:10},
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/6.jpeg",price:10},
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/7.jpeg",price:10},
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/8.jpeg",price:10},
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/9.jpeg",price:10},
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/10.jpeg",price:10},
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/11.jpeg",price:10},
         {category:"painting",id:"food",name:"Lorem ipsum",image:"../assets/img/food/painting/12.jpeg",price:10},



         // landscapes photography
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/1.jpeg",price:10},
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/2.jpeg",price:10},
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/3.jpeg",price:10},
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/4.jpeg",price:10},
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/5.jpeg",price:10},
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/6.jpeg",price:10},
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/7.jpeg",price:10},
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/8.jpeg",price:10},
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/9.jpeg",price:10},
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/10.jpeg",price:10},
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/11.jpeg",price:10},
         {category:"photography",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/photography/12.jpeg",price:10},
 
         // landscapes painting
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/1.jpeg",price:10},
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/2.jpeg",price:10},
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/3.jpeg",price:10},
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/4.jpeg",price:10},
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/5.jpeg",price:10},
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/6.jpeg",price:10},
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/7.jpeg",price:10},
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/8.jpeg",price:10},
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/9.jpeg",price:10},
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/10.jpeg",price:10},
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/11.jpeg",price:10},
         {category:"painting",id:"landscape",name:"Lorem ipsum",image:"../assets/img/landscape/painting/12.jpeg",price:10},



        // mountains photography
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/1.jpeg",price:10},
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/2.jpeg",price:10},
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/3.jpeg",price:10},
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/4.jpeg",price:10},
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/5.jpeg",price:10},
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/6.jpeg",price:10},
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/7.jpeg",price:10},
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/8.jpeg",price:10},
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/9.jpeg",price:10},
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/10.jpeg",price:10},
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/11.jpeg",price:10},
        {category:"photography",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/photography/12.jpeg",price:10},

        // mountains painting
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/1.jpeg",price:10},
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/2.jpeg",price:10},
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/3.jpeg",price:10},
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/4.jpeg",price:10},
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/5.jpeg",price:10},
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/6.jpeg",price:10},
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/7.jpeg",price:10},
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/8.jpeg",price:10},
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/9.jpeg",price:10},
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/10.jpeg",price:10},
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/11.jpeg",price:10},
        {category:"painting",id:"mountains",name:"Lorem ipsum",image:"../assets/img/mountains/painting/12.jpeg",price:10},


            




        // nature photography
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/1.jpeg",price:10},
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/2.jpeg",price:10},
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/3.jpeg",price:10},
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/4.jpeg",price:10},
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/5.jpeg",price:10},
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/6.jpeg",price:10},
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/7.jpeg",price:10},
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/8.jpeg",price:10},
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/9.jpeg",price:10},
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/10.jpeg",price:10},
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/11.jpeg",price:10},
        {category:"photography",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/photography/12.jpeg",price:10},

        // nature painting
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/1.jpeg",price:10},
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/2.jpeg",price:10},
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/3.jpeg",price:10},
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/4.jpeg",price:10},
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/5.jpeg",price:10},
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/6.jpeg",price:10},
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/7.jpeg",price:10},
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/8.jpeg",price:10},
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/9.jpeg",price:10},
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/10.jpeg",price:10},
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/11.jpeg",price:10},
        {category:"painting",id:"nature",name:"Lorem ipsum",image:"../assets/img/nature/painting/12.jpeg",price:10},
    
    
    

        // space photography
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/1.jpeg",price:10},
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/2.jpeg",price:10},
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/3.jpeg",price:10},
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/4.jpeg",price:10},
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/5.jpeg",price:10},
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/6.jpeg",price:10},
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/7.jpeg",price:10},
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/8.jpeg",price:10},
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/9.jpeg",price:10},
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/10.jpeg",price:10},
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/11.jpeg",price:10},
        {category:"photography",id:"space",name:"Lorem ipsum",image:"../assets/img/space/photography/12.jpeg",price:10},

        // space painting
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/1.jpeg",price:10},
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/2.jpeg",price:10},
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/3.jpeg",price:10},
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/4.jpeg",price:10},
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/5.jpeg",price:10},
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/6.jpeg",price:10},
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/7.jpeg",price:10},
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/8.jpeg",price:10},
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/9.jpeg",price:10},
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/10.jpeg",price:10},
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/11.jpeg",price:10},
        {category:"painting",id:"space",name:"Lorem ipsum",image:"../assets/img/space/painting/12.jpeg",price:10},
    
    

        // technology photography
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/1.jpeg",price:10},
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/2.jpeg",price:10},
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/3.jpeg",price:10},
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/4.jpeg",price:10},
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/5.jpeg",price:10},
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/6.jpeg",price:10},
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/7.jpeg",price:10},
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/8.jpeg",price:10},
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/9.jpeg",price:10},
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/10.jpeg",price:10},
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/11.jpeg",price:10},
        {category:"photography",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/photography/12.jpeg",price:10},

        // technology painting
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/1.jpeg",price:10},
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/2.jpeg",price:10},
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/3.jpeg",price:10},
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/4.jpeg",price:10},
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/5.jpeg",price:10},
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/6.jpeg",price:10},
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/7.jpeg",price:10},
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/8.jpeg",price:10},
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/9.jpeg",price:10},
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/10.jpeg",price:10},
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/11.jpeg",price:10},
        {category:"painting",id:"technology",name:"Lorem ipsum",image:"../assets/img/technology/painting/12.jpeg",price:10},
    
    
    
    
    ]
   
      // LOOP THROUGH THE PRODUCTS AND RETURN EACH PRODUCT
        let shuffled = products.sort(()=>0.5-Math.random())
        let shuffledProducts = shuffled.slice(0,products.length)
      let newProducts = shuffledProducts.map((item)=>{
        return item
    })
    // RETURN HTML ELEMENTS IN THE DOM
    $(".grid-container,.newPainting,.newPhotography").html(newProducts.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))

    $('#all').on('click',function(){
     $(".grid-container").html(products.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(photography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(painting.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
    }) 

    let photography = products.filter(e =>e.category=='photography')
    let painting = products.filter(e =>e.category=='painting')
    // filter
    let space = products.filter(e =>e.id=='space');
    let spacePhotography = photography.filter(e =>e.id=='space');
    let spacepainting = painting.filter(e =>e.id=='space');
    let anime = products.filter(e =>e.id=='anime')
    let animePhotography = photography.filter(e =>e.id=='anime')
    let animepainting = painting.filter(e =>e.id=='anime')
    let animals = products.filter(e =>e.id=='animals')
    let animalsPhotography = photography.filter(e =>e.id=='animals')
    let animalspainting = painting.filter(e =>e.id=='animals')
    let mountains = products.filter(e =>e.id=='mountains')
    let mountainsPhotography = photography.filter(e =>e.id=='mountains')
    let mountainspainting = painting.filter(e =>e.id=='mountains')
    let nature = products.filter(e =>e.id=='nature')
    let naturePhotography = photography.filter(e =>e.id=='nature')
    let naturepainting = painting.filter(e =>e.id=='nature')
    let food = products.filter(e =>e.id=='food')
    let foodPhotography = photography.filter(e =>e.id=='food')
    let foodpainting = painting.filter(e =>e.id=='food')
    let beaches = products.filter(e =>e.id=='beaches')
    let beachesPhotography = photography.filter(e =>e.id=='beaches')
    let beachespainting = painting.filter(e =>e.id=='beaches')
    let technology = products.filter(e =>e.id=='technology')
    let technologyPhotography = photography.filter(e =>e.id=='technology')
    let technologypainting = painting.filter(e =>e.id=='technology')
    let buildings= products.filter(e =>e.id=='buildings')
    let buildingsPhotography = photography.filter(e =>e.id=='buildings')
    let buildingspainting = painting.filter(e =>e.id=='buildings')
    let cars = products.filter(e =>e.id=='cars')
    let carsPhotography = photography.filter(e =>e.id=='cars')
    let carspainting = painting.filter(e =>e.id=='cars')
    let landscape = products.filter(e =>e.id=='landscape')
    let landscapePhotography = photography.filter(e =>e.id=='landscape')
    let landscapepainting = painting.filter(e =>e.id=='landscape')
    

// SPACE
    $('#space').on('click',function(){
          $(".grid-container").html(space.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(spacePhotography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(spacepainting.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
    })


    // MOUNTAINS
        $('#mountains').on('click',function(){
          $(".grid-container").html(mountains.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(mountainsPhotography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(mountainspainting.map(function(item){
       
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
    })


    // NATURE
          $('#nature').on('click',function(){
          $(".grid-container").html(nature.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(naturePhotography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(naturepainting.map(function(item){
       
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
    })


    // BULDINGS
          $('#buildings').on('click',function(){
          $(".grid-container").html(buildings.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(buildingsPhotography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(buildingspainting.map(function(item){
       
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
    })


    // ANIME
         $('#anime').on('click',function(){
          $(".grid-container").html(anime.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(animePhotography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(animepainting.map(function(item){
       
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))

    })
    // ANIMALS
        $('#animals').on('click',function(){
          $(".grid-container").html(animals.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(animalsPhotography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(animalspainting.map(function(item){
       
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
    })


    // FOOD
         $('#food').on('click',function(){
          $(".grid-container").html(food.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(foodPhotography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(foodpainting.map(function(item){
       
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
    })

    // BEACHES
         $('#beaches').on('click',function(){
          $(".grid-container").html(beaches.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(beachesPhotography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(beachespainting.map(function(item){
       
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
    })

    // CARS
         $('#cars').on('click',function(){
          $(".grid-container").html(cars.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(carsPhotography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(carspainting.map(function(item){
       
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
    })

    // LANDSCAPE
          $('#landscape').on('click',function(){
          $(".grid-container").html(landscape.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(landscapePhotography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(landscapepainting.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
    })
    // TECHNOLOGY
         $('#technology').on('click',function(){
          $(".grid-container").html(technology.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
        $(".newPhotography").html(technologyPhotography.map(function(item){
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
    }))
      $(".newPainting").html(technologypainting.map(function(item){
       
        var {image,name,price}=item
        return(
            `<div class="grid-content">
            <img src=${image}>
            <p >${name}</p>
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
            </div>
            </div>
            `
        )
    }))
    })

  



    // ADDING TO CART
    
    const cart = [];
    $(".cart").on('click',function(){       
    addToCart(( $(".cart").index(this)))
    
    })
        function addToCart(a){
        cart.push({...newProducts[a]})
       
        updateButton()
    
    }
    function updateButton(){
            $(".notification").html(function(){
            return(
                 `${cart.length}
                  `
                )
            })}
    updateButton()
  
  
    $("#cartWindow").on("click",function(){
       
        
        $(document.body).html(function(){
              
            return(`
              <nav>
        <div class="logoname">
            <h5>art<span>ify</span> </h5>
        </div>
       
        
        <div class="two">
            <div class="menu">
                <div class="menuitems">
                    <ul>
                        <li class="menuItems"><a href="../pages/landingpage.html">Home</a></li>
                        <li class="menuItems"><a href="../pages/landingpage.html#sec-2">Market Place</a></li>
                        <li class="menuItems"><a href="../pages/about-us.html">About Us</a></li>
                        <li class="menuItems"><a href="#column">Contact Us</a></li>


                    </ul>

            <!-- Add icons -->

                    <div class="profile">
                        <a class="menuItems" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                        <a class="menuItems" href="../index.html"><i class="fa-solid fa-user"></i></a>
                
                    </div>
                </div>
                

                <!-- Hamburger Menu -->
                <div class="hamburger">
                    <span class="hamburgerspan"></span>
                    <span class="hamburgerspan"></span>
                    <span class="hamburgerspan"></span>

                </div>




            </div>

        </div>


    </nav>

        <!-- cart section -->
<section class="sec-cart"> 
 
    <div class="full-cart">
       <div class="cart-product"> </div>

        

            <div class="cart-summary">
                <div class="cart-header"> Cart Summary </div>
          
                <div class="summary-extras"> 
                    <div class="summary-contents"> Sub-total  </div>
                    <div class="summary-contents"> Shipping fee </div>
                    <div class="summary-contents"> VAT   </div>
                    <div class="summary-option">
                    <select>
                        <option value="mpesa">Mpesa</option>
                        <option value="airtel-money">Airtel Money</option>
                        <option value="t-kash">T-Kash</option>

                    </select>
                    </div>
                
                </div>


                <button class="total-sec">
                <span class="total-name"> Checkout </span>
                <span id="total">$0.00</span></button>

                
            </div>
    </div>
</section>
        





    <!-- footer -->
    <footer id="footer">
        <div id="newsletter" >
            <div class="newstext">
                <h4>Sign Up For Newsletter</h4>
                <p>Get email updates about our latest products and <span>special offers.</span></p>
                
            </div>
            <form action="">
                <input type="email" placeholder="Enter your email...">
                <button type="submit">SUBMIT</button>
            </form>
           
        </div>


        <!-- footer section -->


        <div class="column" id="column">
            <div class="logoname" id="logoname">
                <h5>art<span>ify</span> </h5>
            </div>
            <div class="big-screen">
                <div class="contacts">
                    <h4>Contact</h4>
                    <p><strong>Address: </strong>Tumaini, Ongata Rongai</p>
                    <p><strong>Phone: </strong> <a href="tel:+254705036698">+2547 050 36698, +2547 592 42900</a> </p>
            </div>
            
            <div class="">
                <h4>Our Socials</h4>
                    <div>
                        <a href="https://www.instagram.com/innoxv/">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://wa.me/message/3OPSEQ47UDYYJ1">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
            </div>
            <div class="about-account">
                <div class="more">
                    <h4>About Us</h4>
                    <a href="">Delivery Information</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">FAQ's</a>
                    
                </div>
                <div class="more">
                    <h4>My Account</h4>
                    <a href="">Sign In</a>
                    <a href="">View Cart</a>
                    <a href="">Track My Order</a>
                    <a href="">Help</a>
                    
                </div>
            </div>
            
            <div class="colinstall">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                        <div class="row">
                            <a href="https://itunes.apple.com/app/"><img src="../assets/img/appstore.png" alt=""></a>
                            <a href="https://play.google.com/store/apps/"><img src="../assets/img/googleplay.png" alt=""></a>
                        </div>
            </div> 
            
            

            </div>
            
            <div class="copyright">
                <p>&copy; 2023 - <a href="tel:+254705036698">WAZEE WAZIMA!!</a> </p>
            </div>
    
        </div>
       

    </footer>`)
        })
 
 function displayCart(a){
      let total=0;
      let totalItemPrice=0;
      
            if(cart.length == 0){
                $(".sec-cart").html(function(){
                        $("#total").html("$0.00");
                        return(`<div class="empty-cart">
                        <img src="https://img.icons8.com/cute-clipart/64/null/shopping-cart.png"/>
                        <h2>Your Cart is Empty !!</h2>
                        <h3>Browse our Categories to Discover More</h3>
                        <a href="./landingpage.html#sec-2"><button>MARKETPLACE</button></a>
                    </div>`)
                    })
                }
            else{
                $(".cart-product").html(cart.map(function(item){
                        let{name,price,image}=item;
                      
                 
                        return(
                `       
                         
                         <div class="cart-item">

                            <div class="item-des">
                                <div class="item-image"><img src="${image}"></div>
                                <div class="item-name">${name}</div>
                            </div>
                            
                            
                            <div class="item-extras">
                                <button class="delete"><i class="fa-solid fa-trash"></i></button>
                                <button class="decrement"><i class="fa-solid fa-square-minus"></i></button>
                                <span class="counter">1</span>
                                <button class="increment"><i class="fa-solid fa-square-plus"></i></button>
                                <div class="item-price">${price}</div>
                            </div>
                </div>
                `
                            )
                            
                    }).join(''))
               
                
                }
    
    

    let value = $(".counter").html()
    function updateProductPrice(){
        cart.map(function(item){
        let{price}=item;
        totalItemPrice =value*price}
       )
        $(".item-price").html("$"+totalItemPrice+".00")
     
    }
    function updateTotalPrice(){
        cart.map((item)=>{
            let allTotal=0;
            let totalItemPrice=0;
            let{price}=item
            total = total+price
            allTotal = totalItemPrice+total
            $("#total").html("$"+allTotal+".00")
        })
      
    }
    
       
    updateProductPrice()
    updateTotalPrice()
    function increment(){
         if(value ==value){
            value++
            }
        $(".counter").html(function(){
             return(value)
            

        })
       updateProductPrice()
        updateTotalPrice()
    
        console.log(value);
    }
    function decrement(a){
          if(value > 1){
            value--
            }
            $(".counter").html(value)
             console.log(value);
            updateProductPrice()
            updateTotalPrice()
        }
     $(".increment").on("click",function(){
          increment()
    })  
     $(".decrement").on("click",function(){
        decrement()
      
    })
      function removeFromCart(a){
        cart.splice(a,1)
        displayCart()
        updateButton()
        
    
    }
    $(".delete").on('click',function(){
    removeFromCart($(".delete").index(this))
    console.log("clicked")
    })    
          
            
    } 
    displayCart()
   
    })

});
