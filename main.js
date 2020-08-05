



window.onload = function() {
    Particles.init({
        selector: '.background',
        maxParticles: 100,
        color: ['#a8e6cf', '#ffffff', '#ff8b94',],
        connectParticles: true
    });
    ScrollReveal({duration:1000}).reveal('#greeting-parent',{delay: 500})
    
};

var originalDistance = 2.41*($('#particle-div').height());

$(document).on('scroll', (event)=>{
    handleNav()
});

$('#custom-btn').click(()=>{
    $('html,body').animate({scrollTop: $(".nav").offset().top},'slow');
    ScrollReveal({duration:1000}).reveal('.nav')
})

function handleNav(){
    let classStr = $('.nav').attr('class');
    let stickyStatus = classStr.includes('sticky');

    if(stickyStatus && $(document).scrollTop() < originalDistance){
        $('.nav').removeClass('sticky')
    }
    else if($(document).scrollTop() >= originalDistance && !stickyStatus){
        $('.nav').addClass('sticky')
    }
    else{
        return;
    }
}
        
