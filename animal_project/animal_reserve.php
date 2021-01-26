<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>이순명(대전종합동물병원 종합검진 페이지)</title>
    <script src="./js/jquery-3.2.1.min.js"></script>
    <script src="./js/prefixfree.min.js"></script>
    <link rel="stylesheet" href="./css/submain_wrap.css">
    <style>
                @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Nanum+Pen+Script&family=Noto+Serif+KR:wght@200;300&family=Shadows+Into+Light&display=swap');
    </style>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <link rel="stylesheet" href="./css/jquery-ui.min.css">
    <link rel="stylesheet" href="./css/reserve.css">
    <script src="./js/jquery-ui.js"></script>
    <script src="./js/reserve.js"></script>
</head>
<body>
    <div id="main_logo">
        <a href="./animal_index.php"><img src="./images/logo.png" alt="대전종합동물병원"></a>                
    </div>
    <div id="wrap">
        <div id="main">
            <header>
                
                <nav>
                    <ul>
                        <li>
                            <a href="animal_intro.html">병원 소개</a>
                            <ul>
                                <li><a href="animal_intro.html">인사말</a></li>
                                <li><a href="animal_staff.html">의료진 소개</a></li>
                                <li><a href="animal_facility.html">시설안내</a></li>
                                <li><a href="animal_equipment.html">보유장비</a></li>
                                <li><a href="animal_map.html">오시는 길</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="animal_guide.html" id="home">진료 안내</a>
                            <ul>
                                <li><a href="animal_guide.html">진료 안내</a></li>
                                <li><a href="animal_reserve.php" class="bold">진료 예약</a></li>
                                <li><a href="animal_check.html">종합 검진</a></li>
                                <li><a href="animal_filed.html">진료 분야</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="animal_notice.php">커뮤니티</a>
                            <ul>
                                <li><a href="animal_notice.php">공지사항</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <section id="title">
                <p id="main_title">반려동물과 함께 하는 <span>생각</span>과&nbsp;<span>행동</span></p>
                <p id="sub_title">고객님과 반려동물의 건강을 최우선으로 생각하는 병원</p>
            </section>
            <section id="main_content">
                <h1>|&nbsp;진료 예약 &nbsp;|</h1>
                <div id="date_name_reserve">
                    <div id="date_name_reserve_title">
                        <p><span>진료 예약시간 </span> 09 : 00 ~ 17 : 00 / <span>연중무휴</span></p>
                    </div>

                    <div id="date_name_reserve_subtitle">
                        <ul>
                            <li>
                                <h2>전화 예약</h2>
                                <h4>☎042-532-7588</h4>
                            </li>
                            <li>
                                <h2>온라인 예약</h2>
                                <h4>*직접 원하는 날짜와 시간을 정해 신청합니다.</h4>
                            </li>
                        </ul>
                    </div>

                    <div id="reserve">
                        
                    <form name="animal_reserve" method="POST" action="animal_reserve_insert.php">
                    <ul>
                        <li><span>예약 날짜 &nbsp;&nbsp;&nbsp;: </span> 

                            <input type="text" name="date" id="date1" size="12">
                            
                        </li>
                        <li>
                            <span>예약 시간 &nbsp;&nbsp;&nbsp;: </span>
                            <select value="hours" name="hours" id="hours">
                                <option value="09:00">09:00</option>
                                <option value="09:30">09:30</option>
                                <option value="10:00">10:00</option>
                                <option value="10:30">10:30</option>
                                <option value="11:00">11:00</option>
                                <option value="11:30">11:30</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="13:30">13:30</option>
                                <option value="14:00">14:00</option>
                                <option value="14:30">14:30</option>
                                <option value="15:00">15:00</option>
                                <option value="15:30">15:30</option>
                                <option value="16:00">16:00</option>
                                <option value="16:30">16:30</option>
                                <option value="17:00">17:00</option>
                            </select>
                        </li>
                        <li>
                            <span>예약자 성함 : </span>
                            <input type="text" name="name" id="name" size="12">
                        </li>
                        <li>
                            <span>예약자 연락처 :</span>
                            <input type="text" name="phone" id="phone" size="12">
                        </li>
                        <li>
                            <span>수의사 이름 : </span>
                            <select name="vet" id="vet">
                                <option value="유용현원장">유용현 원장</option>
                                <option value="이훈원장">이 훈 원장</option>
                                <option value="장규현원장">장규현 원장</option>
                                <option value="곽희철원장">곽희철 원장</option>
                                <option value="전교희부원장">전교희 부원장</option>
                            </select>
                        </li>
                        <li>
                            <button value="예약하기" onclick="check_input()" id="reserve_button">예약하기</button>
                        </li>
                    </ul>
                    </form>
                    
                    </div>
                </div>
                
            </section>
            <footer>
                <a href="./animal_index.html"><img src="./images/btm_logo.png"></a>
                <ul>
                    <li>우)35265 대전광역시 대덕대로 168번길 26 (갈마 2동 1438) /TEL.042-532-7588, 7589 / E-mail : vet1214@hanmail.net <br>
                    대표원장 : 윤용현/ 사업자 등록번호 : 314-10-82443 COPYRIGHT ⓒ DAEJEON GENERAL ANIMAL HOSPITAL. ALL RIGHTS RESERVED.</li>
                </ul>
            </footer>
        </div>
    </div>
</body>
</html>