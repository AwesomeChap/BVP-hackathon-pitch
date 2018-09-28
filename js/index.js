// AOS.init();
$(function(){
    setTimeout(function(){
        $('.part1').css({display:'block'});
    },4000);
});

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
    $('.part1').css({display:'block'});
    $('.part2').css({display:'none'});
    $('.part3').css({display:'none'});
    $('.part4').css({display:'none'});
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
    $('.part1').css({display:'none'});
    $('.part2').css({display:'block'});
    $('.part3').css({display:'none'});
    $('.part4').css({display:'none'});
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
    $('.part1').css({display:'none'});
    $('.part2').css({display:'none'});
    $('.part3').css({display:'block'});
    $('.part4').css({display:'none'});
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

    $('.part1').css({display:'none'});
    $('.part2').css({display:'none'});
    $('.part3').css({display:'none'});
    $('.part4').css({display:'block'});
})

setTimeout(function(){
    $('.intro').fadeOut();
    $('.main-body').css({display:'block'});
    // $(".intro").css({display:'none'});
},4000)

// $('.main-body').css({display:'block'});