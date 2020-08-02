window.onload = function() {
    Particles.init({
        selector: '.background',
        maxParticles: 100,
        color: ['#a8e6cf', '#ffffff', '#ff8b94',],
        connectParticles: true
    });
  };

$('#custom-btn').click(()=>{
    $('html,body').animate({
        scrollTop: $(".nav").offset().top},
        'slow');
})