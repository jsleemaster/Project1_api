$(function(){
    $("header").hover(function(){
        $("nav").addClass("active");
    },function(){
        $("nav").removeClass("active");
    });
    
    var n=2;
    setInterval(function(){
        if(n<2){
            n=n+1;
        }
        else{
            n=0;
        }
        $("#main_title span").removeClass("active");
        $("#main_title span").eq(n).addClass("active");
    },1500)
});

