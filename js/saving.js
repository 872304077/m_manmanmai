$(function() {
    // var i = 10;
    // $('.prev').on('click', function() {
    //     if (i == 0) {
    //         alert('已经是首页了');
    //     } else {
    //         i--;
    //     }
    // })
    // console.log(i);
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var text = document.querySelector('.number')
    var i = text.value;

    paging(i);
    prev.onclick = function() {
        if (i == 0) {
            alert('已经是第一页了');
        } else {
            i--;
            paging(i);
            text.value = i;
            // window.num = text.value;
            return i;
        }
    }
    next.onclick = function() {
        if (i >= 10) {
            alert('已经是最后一页')
        } else {
            ++i;
            paging(i);
            text.value = i;
            return text.value;
        }
    }

    function paging(i) {
        $.ajax({
            url: 'http://157.122.54.189:9090/api/getmoneyctrl',
            data: {
                pageid: i
            },
            success: function(data) {
                console.log(data);
                var html = template('list', data);
                $('.container ul').html(html);
            }
        })
    }

})