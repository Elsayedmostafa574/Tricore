var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
  });
const counters = document.querySelectorAll('.counter');
const speed = 2000;

counters.forEach(counter=>{
    const UpdateCount = ()=> {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(UpdateCount, 1);
        } else {
            count.innerText = target;
        }
    }

    UpdateCount();
});
$("#owl-carousel2").owlCarousel({
    center: true,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:true
        }
    }
});
$("#owl-carousel1").owlCarousel({
    center: true,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
});
$("#owl-carousel3").owlCarousel({
    
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
});
$("#owl-carousel4").owlCarousel({
    center: true,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
});