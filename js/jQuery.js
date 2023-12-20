$('document').ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        items:1,
        nav:true,
        navText: [
            "<i id='owl-pre' class='fa fa-chevron-left'></i>",
            "<i id='owl-next' class='fa fa-chevron-right'></i>"
        ]

    });

    // COUNTER Number

    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
                Counter: $(this).data('value')
            }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {                      
                $(this).text(this.Counter.toFixed(0));
            }
        });
    });

    // slick slider

    $('.autoplay-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
        }
        }
                        // instead of a settings object
    ]
    });


    $(".menu-button").on("click",function(e){
        e.preventDefault();
        $(".slide-bar").addClass("show-slide-bar");
    });
    $(".slide-hide-button").on("click",function(e){
        e.preventDefault();
        $(".slide-bar").removeClass("show-slide-bar");
    });

    const inputs = document.querySelectorAll('.form-control input');
    const labels = document.querySelectorAll('.form-control label');

    labels.forEach(label => {
        label.innerHTML = label.innerText
            .split('')
            .map((letter, idx) => `<span style="
                    transition-delay: ${idx * 50}ms
                ">${letter}</span>`)
            .join('');
    });


    // Way point Ariea

    $('.bannar-heading').waypoint(function(){
        $('.bannar-heading').addClass('animate__animated animate__backInLeft')
    },{
         offset:'80%'
    });
    $('.bannar-sub-bg-img1').waypoint(function(){
        $('.bannar-sub-bg-img1').addClass('animate__animated animate__backInRight')
    },{
         offset:'80%'
    });

    $('.what-we-do-heading').waypoint(function(){
        $('.what-we-do-heading').addClass('animate__animated animate__bounceInLeft')
    },{
         offset:'80%'
    });

    $('.what-we-do-heading-box.box-1,.box-2').waypoint(function(){
        $('.what-we-do-heading-box.box-1,.box-2').addClass('animate__animated animate__backInLeft')
    },{
         offset:'80%'
    });
    $('.what-we-do-heading-box.box-3,.box-4').waypoint(function(){
        $('.what-we-do-heading-box.box-3,.box-4').addClass('animate__animated animate__backInRight')
    },{
         offset:'80%'
    });

    $('.what-we-do-heading-box.box-5,.box-6').waypoint(function(){
        $('.what-we-do-heading-box.box-5,.box-6').addClass('animate__animated animate__backInLeft')
    },{
         offset:'80%'
    });
    $('.what-we-do-heading-box.box-7,.box-8').waypoint(function(){
        $('.what-we-do-heading-box.box-7,.box-8').addClass('animate__animated animate__backInRight')
    },{
         offset:'80%'
    });

    // GROW YOUR Business
    
    $('.grow-your-business-img').waypoint(function(){
        $('.grow-your-business-img').addClass('animate__animated animate__zoomIn')
    },{
         offset:'40%'
    });
    $('.grow-your-business-content').waypoint(function(){
        $('.grow-your-business-content').addClass('animate__animated animate__backInRight')
    },{
         offset:'50%'
    });

    // Connected Banking Solution
    
    $('.connected-banking-solution-content').waypoint(function(){
        $('.connected-banking-solution-content').addClass('animate__animated animate__backInLeft')
    },{
         offset:'70%'
    });
    $('.connected-banking-solution-img').waypoint(function(){
        $('.connected-banking-solution-img').addClass('animate__animated animate__backInRight')
    },{
         offset:'70%'
    });

    // Value Added Services:

    $('.valu-added-services-img').waypoint(function(){
        $('.valu-added-services-img').addClass('animate__animated animate__backInLeft')
    },{
         offset:'80%'
    });

    $('.valu-added-services-content').waypoint(function(){
        $('.valu-added-services-content').addClass('animate__animated animate__backInRight')
    },{
         offset:'80%'
    });

    // 

    $('.product01').waypoint(function(){
        $('.product01').addClass('animate__animated animate__slideInDown')
    },{
         offset:'80%'
    });

    $('.product02').waypoint(function(){
        $('.product02').addClass('animate__animated animate__slideInLeft')
    },{
         offset:'80%'
    });
    $('.product03').waypoint(function(){
        $('.product03').addClass('animate__animated animate__slideInRight')
    },{
         offset:'80%'
    });

    $('.product04').waypoint(function(){
        $('.product04').addClass('animate__animated animate__slideInUp')
    },{
         offset:'80%'
    });

    //     

    $('.grow-with-hellope-img-ariea').waypoint(function(){
        $('.grow-with-hellope-img-ariea').addClass('animate__animated animate__backInLeft')
    },{
         offset:'50%'
    });
    $('.grow-with-hellope-content-ariea').waypoint(function(){
        $('.grow-with-hellope-content-ariea').addClass('animate__animated animate__backInRight')
    },{
         offset:'50%'
    });

    // counter-bannar  

    // $('.counter').waypoint(function(){
    //     $('.counter').addClass('animate__animated animate__zoomIn')
    // },{
    //      offset:'60%'
    // });

    //partners-company-logo-content

     $('.partners-company-logo-content').waypoint(function(){
        $('.partners-company-logo-content').addClass('animate__animated animate__backInLeft')
    },{
         offset:'60%'
    });
    $('.company-logo').waypoint(function(){
        $('.company-logo').addClass('animate__animated animate__zoomIn')
    },{
         offset:'60%'
    });

    $(window).scroll(function(event){
        var scrol = $(window).scrollTop();
        console.log(scrol);
        if(scrol>100){
            $('#header').addClass('header');
            $('.nave-menu ul li a , .nave-menu ul li p ').addClass('nav-text-color');
            $('.menu-button .one , .menu-button .tow').addClass('menu-button-color-change')
        }else{
            $('#header').removeClass('header');
            $('.nave-menu ul li a , .nave-menu ul li p ').removeClass('nav-text-color');
            $('.menu-button .one , .menu-button .tow').removeClass('menu-button-color-change');
        }
    })

});
