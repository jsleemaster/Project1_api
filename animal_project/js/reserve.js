
 $(function() {
    $("#date1").datepicker();
 });

 function check_input(){
    if(!document.animal_reserve.date.value){
        alert("날짜를 입력하세요!");
        document.animal_reserve.date.focus();
        return;
    }
    if(!document.animal_reserve.hours.value){
        alert("시간을 입력하세요!");
        document.animal_reserve.hours.focus();
        return;
    }
    if(!document.animal_reserve.name.value){
        alert("이름를 입력하세요!");
        document.animal_reserve.name.focus();
        return;
    }
    if(!document.animal_reserve.phone.value){
        alert("휴대폰 번호를 입력하세요!");
        document.animal_reserve.phone.focus();
        return;
    }
    if(!document.animal_reserve.vet.value){
        alert("수의사를 선택해주세요!");
        document.animal_reserve.vet.focus();
        return;
    }
    document.animal_reserve.submit();
    alert(`예약이 완료되었습니다.`);
    
}