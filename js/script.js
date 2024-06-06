$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center: true,

        responsive:{
            0:{
                items:1,
            },
            767:{
                items:1,
            },
            1000:{
                items:3,
            }
        }
    })
})