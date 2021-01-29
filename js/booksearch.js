
        $("#bookname").focus();
        $("#booklist,.paging").hide();
        $("#search").click(function () {
            var searchKeyword = $("#bookname").val();
            search(1, null, searchKeyword);
            $("#booklist,.paging").show();

        });
        $("#bookname").keyup(function (e) {
             if (e.keyCode == 13) {
                $("#search").trigger('click');
             }
            });

        function search(page, perPage, searchKeyword) {

            if (typeof page !== 'number' || page < 1) {
                page = 1;
            }
            if (typeof perPage !== 'number' || perPage <= 0) {
                perPage = 7;
            }
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: {
                    query: searchKeyword,
                    page: page,
                    size: perPage,
                },
                headers: { Authorization: "KakaoAK 5c0229be21a480889525aaaf6553fb3a" }
            })
                .done(function (msg) {
                    var list = msg.documents;
                    var total = msg.meta.pageable_count;
                    console.log(total);
                    if (total === 0) {
                        $("#search_result_none").empty().append("검색하신 '" + searchKeyword + "'(이)가 없습니다.");
                        $('.list,.paging').empty();
                        $("#booklist").hide();
                        $(".paging").hide();
                    }
                    else {
                        $("#search_result_none").empty();
                        var $list = $('.list').empty();
                        for (var i = 0; i < list.length; i++) {
                            var item = list[i];

                            var $elem = $("#template").clone().removeAttr('id');

                            var no = (page - 1) * perPage + i + 1;

                            $elem.find('.item-no').html(no);
                            $elem.find('.item-title').html(item.title);
                            $elem.find('.item-img').html("<img src='" + item.thumbnail + "' alt='이미지없음'/>");
                            $elem.find('.item-url').html("<a href='" + item.url + "' target='_blank'>더 보기</a>");

                            $list.append($elem);
                        }
                        showPaging(page, perPage, total, searchKeyword);
                    }

                });
        }
        function showPaging(page, perPage, total, searchKeyword) {
            var $paging = $('.paging').empty();
            var numPages = 5;
            var pageStart = Math.floor((page - 1) / numPages) * numPages + 1;
            var pageEnd = pageStart + numPages - 1;
            var totalPages = Math.floor(total / perPage) + 1;
            if (pageEnd > totalPages)
                pageEnd = totalPages;

            var prevPage = pageStart - 1;

            if (prevPage < 1)
                prevPage = 1;

            var nextPage = pageEnd + 1;

            if (nextPage > totalPages)
                nextPage = totalPages;


            var $prevElem = $('<a href="javascript:search(' + prevPage + ',' + perPage + ',\'' + searchKeyword + '\')">이전</a>');
            $prevElem.addClass('prev');
            $paging.append($prevElem);

            for (var i = pageStart; i <= pageEnd; i++) {
                var $elem = $('<a href="javascript:search(' + i + ',' + perPage + ',\'' + searchKeyword + '\')">' + i + '</a>');

                if (i === page) {
                    $elem.addClass('current');
                }

                $paging.append($elem);
            }

            var $nextElem = $('<a href="javascript:search(' + nextPage + ',' + perPage + ',\'' + searchKeyword + '\')">다음</a>');
            $nextElem.addClass('next');
            $paging.append($nextElem);

        }
