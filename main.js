responsiveDataContainer();

window.onload = function () {
    Particles.init({
        selector: '.background',
        maxParticles: 100,
        color: ['#a8e6cf', '#ffffff', '#ff8b94',],
        connectParticles: true,
        responsive: [
            {      
                breakpoint: 769,
                options: {
                    sizeVariations: 20,
                    maxParticles:80,
                    connectParticles:false,
                    color: ['#a8e6cf', '#ffffff', '#ff8b94',],
                    speed: 1.5
                }
            }, 
            
            {
                breakpoint: 600,
                options: {
                    sizeVariations: 20,
                    maxParticles:40,
                    connectParticles:false,
                    color: ['#a8e6cf', '#ffffff', '#ff8b94',],
                    speed: 1
                }
            }
        ]
    });
    ScrollReveal({ duration: 1000 }).reveal('#greeting-parent', { delay: 500 })

};

var originalDistance = 2.41 * ($('#particle-div').height());

$(document).on('scroll', (event) => {
    handleNav()
});

$('#custom-btn').click(() => {
    $('html,body').animate({ scrollTop: $(".nav").offset().top }, 'slow');
    ScrollReveal({ duration: 1000 }).reveal('.nav')
})

function handleNav() {
    let classStr = $('.nav').attr('class');
    let stickyStatus = classStr.includes('sticky');

    if (stickyStatus && $(document).scrollTop() < originalDistance) {
        $('.nav').removeClass('sticky')
    }
    else if ($(document).scrollTop() >= originalDistance && !stickyStatus) {
        $('.nav').addClass('sticky')
    }
    else {
        return;
    }
}

$('#nav-about').click(() => {
    $('html,body').animate({ scrollTop: $("#about-page").offset().top }, 'slow');
    ScrollReveal({ duration: 1000 }).reveal('#github-stats')
})

$('#nav-portfolio').click(() => {
    $('html,body').animate({ scrollTop: $("#portfolio-container").offset().top }, 'slow');
    ScrollReveal({ duration: 1000 }).reveal('#portfolio-content')
})

$('#nav-home').click(() => {
    $('html,body').animate({ scrollTop: $("#particle-div").offset().top }, 'slow');
    ScrollReveal({ duration: 1000 }).reveal("#particle-div")
})

$('#nav-contact').click(() => {
    $('html,body').animate({ scrollTop: $(".page-footer").offset().top }, 'slow');

})

function responsiveDataContainer(){
    if(window.innerHeight > 850 && window.innerHeight < 980){
        $('.data-container').css('height','475px');
    }
    else if(window.innerHeight > 980 && window.innerHeight < 1100){
        $('.data-container').css('height','520px');
    }
    else if(window.innerHeight > 1100){
        $('.data-container').css('height','700px');
    }
}