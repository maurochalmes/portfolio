$(document).ready(function(){
    
    // sticky navbar
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    // toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });
    
    // animação texto
    var typed = new Typed(".typing", {
        strings: ["Estudante", "Desenvolvedor", "Atleta", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Estudante", "Desenvolvedor", "Atleta", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    
});

