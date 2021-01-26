
$(function(){
    var image = [
      './images/profile1.png','./images/profile2.png','./images/profile3.png'
    ]
    var smlee = document.getElementById('smlee');
    smlee.src = image[0];

  $(".navborder").hide();
  $(".navli").hover(function(){
      $(".navborder",this).show();
      $(".navborder",this).stop().animate({
      "width" : '100%'
        },300)},function(){
      $(".navborder",this).stop().animate({
        "width" : "0%"
      },300);
  });
  //메인 시작화면
    $(".title_name",).hide();
    let typingBool = false; 
    let typingTxt = $(".title_name").text(); // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       var tyInt = setInterval(typing,100); // 반복동작 
     } 
    let typingIdx=0; 
    function typing(){ 
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".text").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료
          $("div.start").animate({
            'opacity' : 0
          },1000).css({
            'z-index' : -999
          });
         $(".text").animate({
           'font-size' : 0,
          'opacity' : 0
         },'fast');
        
        $("#main").animate({
          'opacity' : 1
        },2000);
       
        $("#main").css({
          'background-color' : '#ffffff'
        });
       } 
     }



     $("#bubble").hide();
     $("#mainbackground").one('click', function(){
        $("#mainclick").hide();
        $("#imgmain2,#imgmain3").hide();
        $("#bubble").show(function(){
          $("#bubble").addClass("about");
          $(".bubbletitle").hide(); 
          let bubbleBool = false; 
          let bubbleTxt = $(".bubbletitle").text(); 
          bubbleTxt=bubbleTxt.split("");
          if(bubbleBool==false){
                bubbleBool=true; 
                var bbInt = setInterval(typing,35);
             } 
          let bubbleIdx=0; 
          function typing(){ 
                if(bubbleIdx<bubbleTxt.length){
                $(".bubbletext").append(bubbleTxt[bubbleIdx]);  
                bubbleIdx++; 
              } else{ 
                  clearInterval(bbInt);
                  $("#skillbtn").click();
                  $(".links").css({
                   'opacity' : 1
                  });        
                  $(".tabcontents").css({
                    'left' : '0',
                    'opacity' : 1
                  });
                  $("#aboutbtn").addClass('red');
                 
              }
            }   
          }); //bubbleshow

      
        $("#smlee").addClass("about");
        $("#mainbackground").addClass("size about");
        $("#nav_back").addClass("about");
     });

     $("#aboutbtn").click(function(){ /*어바웃 버튼 클릭 */
        smlee.src = image[0];
        $("#mainbackground").removeClass().addClass("size about");      
        $("#nav_back").removeClass().addClass("about");
        $("#smlee").removeClass().addClass("about");
        $("#bubble").removeClass().addClass("about")
        $(".links").addClass('active');
        $(".bubbletext,.links").css({
          'display' : 'block'
        });
        $(".tabcontents").css({
          'left' : '0',
          'opacity' : 1
        });
        $("#contact").removeClass();
        $("#project").removeClass();
        $(".bubbletext,.projecttext").empty();
        $("#projectbtn,#contactbtn").removeClass().addClass("white");
        $('#aboutbtn').removeClass().addClass('red');
        $("#skillbtn").click();
      let bubbleBool = false; 
      let bubbleTxt = $(".bubbletitle").text(); 
          bubbleTxt=bubbleTxt.split("");
        if(bubbleBool==false){
            bubbleBool=true; 
            var bbInt = setInterval(typing,35);
          } 
      let bubbleIdx=0; 
      function typing(){ 
         if(bubbleIdx<bubbleTxt.length){
           $(".bubbletext").append(bubbleTxt[bubbleIdx]);  
           bubbleIdx++;
         } else{ 
           clearInterval(bbInt);

         }
       }
   }); //about end 

     $("#skillbtn").click(function(){
     });



  $("#projectbtn").click(function(){ /*project button click */
    $(".bubbletext").css({
      'display' : 'none'
    });
    $("#mainbackground").removeClass().addClass("size project")
    $("#nav_back").removeClass().addClass("project");
    $("#smlee").removeClass().addClass("project");
    $(".tabcontents").css({
      'left' : '-2000px',
      'opacity' : 0
    });
    $("#bubble").removeClass();
    $("#aboutbtn,#contactbtn").removeClass().addClass('black');
    $("#projectbtn").removeClass().addClass("yellow");
    $("#contact").removeClass();
    $("#project").removeClass().addClass("project");

    $(".links").removeClass('active');
    $(".links").css({
      'display' : 'none'
    });
       
  }); 
  
  //project end

  $("#contactbtn").click(function(){ //contact btn
    smlee.src = image[2];
    smlee.style.zIndex=5;
    $("#smlee").removeClass().addClass("contact");
    $("#mainbackground").removeClass().addClass("size contact");
    $("#bubble").removeClass().addClass("contact");
    $("#nav_back").removeClass().addClass("contact");
    $("#projectbtn,#aboutbtn").removeClass().addClass("gray");
    $("#contactbtn").removeClass().addClass("blue");
    $(".links").removeClass('active');
    $(".links").css({
      'display' : 'none'
    });
    $(".projecttext,.bubbletext").empty();

    $(".tabcontents").css({
      'left' : '-2000px',
      'opacity' : 1
    });
    $("#project").removeClass();
    $("#contact").removeClass().addClass("contact");
   
});
  $("#contact_info_mobile").hover(function(){
    $("#contact_info").addClass("visible");
  },function(){
    $("#contact_info").removeClass("visible");
  });
 
}); //contact end
  