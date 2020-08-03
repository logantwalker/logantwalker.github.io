window.onload = function() {
    Particles.init({
        selector: '.background',
        maxParticles: 100,
        color: ['#a8e6cf', '#ffffff', '#ff8b94',],
        connectParticles: true
    });

    ScrollReveal({duration:1000}).reveal('#greeting-parent',{delay: 500})

  };

$('#custom-btn').click(()=>{
    $('html,body').animate({scrollTop: $(".nav").offset().top},'slow');
    ScrollReveal({duration:1000}).reveal('.nav')
})

function showNavBar(){
    let distance = $('.nav').offset().top;
    console.log(distance);
}