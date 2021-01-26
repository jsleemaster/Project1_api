
function openContents(evt, contentName) {
  'use strict';

    var i, 
    tabcontent, 
    tablinks;
    tabcontent = document.getElementsByClassName("contentbox");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.opacity = 0;
      tabcontent[i].style.zIndex = 3;
      tabcontent[i].style.top = -500+'px';
    }
    tablinks = document.getElementsByClassName("links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contentName).style.opacity = 1;
    document.getElementById(contentName).style.zIndex = 4;
    document.getElementById(contentName).style.top = 0;
    evt.currentTarget.className += " active";
}
function contentList(listId){
  var a,
  listcontent,
  listcontent = document.getElementsByClassName('contentlist');
  for (a=0; a<listcontent.length; a++){
    listcontent[a].style.opacity=0;
    listcontent[a].style.zIndex=-2;
  }
  document.getElementById(listId).style.opacity= 1;
  document.getElementById(listId).style.zIndex= 3;
}
window.onload=function(){ // 컨택트에서 목록->글쓰기,제출하기 버튼
  var targetbtn = document.getElementById('listbox');
  var writebtn = document.getElementById('writebox');
  var subbtn = document.getElementById('submitbox');
  targetbtn.addEventListener('click',function(){
    writebtn.style.opacity = 1;
    writebtn.style.zIndex = 3;
    subbtn.style.opacity = 0;
    subbtn.style.zIndex = -2;
  });
  writebtn.addEventListener('click',function(){
    this.style.opacity=0;
    this.style.zIndex =-2;
    subbtn.style.opacity =1;
    subbtn.style.zIndex =3;
  });
};
function zoomIn(moreEvent){
  document.getElementById(moreEvent).style.opacity = 1;
}
function zoomOut(moreEvent){
  document.getElementById(moreEvent).style.opacity = 0;
}
  function skillBtn(){
    let width = 1;
    const html = document.getElementById("html");
    const css = document.getElementById("Css");
    const js = document.getElementById("js");
    const jquery = document.getElementById("jquery");
    const photo = document.getElementById("photoshop");
    const illust = document.getElementById("illust");
    const mysql = document.getElementById("mysql");
    const php = document.getElementById('php');
    const id = setInterval(frame, 20);
    function frame(){
      width++;
      if(width <= 60){
        js.style.width = width + "%";
        js.innerHTML=width + "%";
      }
      if(width <= 63){
        mysql.style.width = width + "%";
        mysql.innerHTML= width + "%";
        php.style.width = width + "%";
        php.innerHTML = width + "%";
      }
      if(width <= 75){
        jquery.style.width = width + "%";
        jquery.innerHTML= width + "%";
      }
      if(width <= 77){
        html.style.width = width+"%";
        html.innerHTML=width+"%";
        css.style.width = width + "%";
        css.innerHTML= width+ "%";
      }
      if(width <= 80){
        photo.style.width = width+"%";
        illust.style.width = width+"%";
        photo.innerHTML= width + "%";
        illust.innerHTML= width + "%";
      }
      if(width >=100){
        clearInterval(id);
        width = 0;
      }
    }
  }
  var slideIndex = 1;

  showSlides(slideIndex);

  function projectContent(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var b;
    var slides = document.getElementsByClassName("project_content");
    var slidesnum = document.getElementsByClassName("page_num");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (b = 0; b < slides.length; b++) {
        slides[b].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    slidesnum[slideIndex-1].innerText = slideIndex + "/" + slides.length;
  }


  function check_input(){ //연락사항 전송
    if(!document.contact_form.contact_name_input.value){
        alert("이름을 입력해주세요");
        document.contact_form.contact_name_input.focus();
        return;
    }
    if(!document.contact_form.contact_email_input.value){
        alert("이메일을 입력해주세요");
        document.contact_form.contact_email_input.focus();
        return;
    }
    if(!document.contact_form.contact_text.value){
      alert("내용을 입력해주세요!");
      document.contact_form.contact_text.focus();
      return;
    }
    document.contact_form.submit();
    alert("성공적으로 전송되었습니다. 감사합니다");
}
  function navClock(){
    const today = new Date();
    const day= "현재시간 : " + today.getFullYear() + "년 " + today.getMonth()+1 +"월 " + today.getDate() + "일";
    const time =today.getHours() + "시 " + today.getMinutes() + "분 " +today.getSeconds() + "초";
    document.getElementById("navClock").innerHTML= day+time;
    setTimeout('navClock()',1000);
  }
  navClock();
