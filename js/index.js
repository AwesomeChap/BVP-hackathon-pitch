// AOS.init();

$("#nav1").click(function(){
    $("#one").animate({
        left:'0%'
    },800,'easeOutExpo')
    $("#two").animate({
        left:'100%'
    },800,'easeOutExpo')
    $("#three").animate({
        left:'200%'
    },800,'easeOutExpo')
    $("#four").animate({
        left:'300%'
    },800,'easeOutExpo')
})

$("#nav2").click(function(){
    $("#one").animate({
        left:'-100%'
    },800,'easeOutExpo')
    $("#two").animate({
        left:'0%'
    },800,'easeOutExpo')
    $("#three").animate({
        left:'100%'
    },800,'easeOutExpo')
    $("#four").animate({
        left:'200%'
    },800,'easeOutExpo')
})

$("#nav3").click(function(){
    $("#one").animate({
        left:'-200%'
    },800,'easeOutExpo')
    $("#two").animate({
        left:'-100%'
    },800,'easeOutExpo')
    $("#three").animate({
        left:'0%'
    },800,'easeOutExpo')
    $("#four").animate({
        left:'100%'
    },800,'easeOutExpo')
})

$("#nav4").click(function(){
    $("#one").animate({
        left:'-300%'
    },800,'easeOutExpo')
    $("#two").animate({
        left:'-200%'
    },800,'easeOutExpo')
    $("#three").animate({
        left:'-100%'
    },800,'easeOutExpo')
    $("#four").animate({
        left:'0%'
    },800,'easeOutExpo')
})

// setTimeout(function(){
//     $('.intro').fadeOut();
//     $('.main-body').css({display:'block'});
//     // $(".intro").css({display:'none'});
// },4000)

$('.main-body').css({display:'block'});