$(".mole1").dblclick(function(){
    $(".mole1").hide();
    $(".mole-two").show();
    $(".third-mole").show();
});
    
$(".mole-two").hover(function(){
    $(".mole-two").hide();
    $(".mole1").show();
    $(".third-mole").show();
}); 
    
$(".third-mole").click(function(){
    $(".third-mole").hide();
    $(".mole1").show();
    $(".mole-two").show();
});
    
$("button").click(function(){
    $(".mole1").show();
    $(".mole-two").show();
    $(".third-mole").show();
});