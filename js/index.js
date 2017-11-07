$(function() {
    $('#header').addClass('hidden');
    setMenu();
    setProductList();
    // 设置菜单的方法
    function setMenu() {
        // 1. 用ajax请求数据
        $.ajax({
            url: 'http://157.122.54.189:9090/api/getindexmenu',
            success: function(data) {
                console.log(data);
                // 2. 拿到data数据调用模板
                var html = template('navTmp', data);
                // console.log(html);
                $('.row').html(html);
                $('#nav .col-xs-3:eq(8)').addClass('hidden');
                $('#nav .col-xs-3:eq(9)').addClass('hidden');
                $('#nav .col-xs-3:eq(10)').addClass('hidden');
                $('#nav .col-xs-3:eq(11)').addClass('hidden');
            }
        })
    }

    function setProductList() {
        // 用ajax获取商品列表的数据
        $.ajax({
            url: 'http://157.122.54.189:9090/api/getmoneyctrl',
            success: function(data) {
                var html = template('productListTmp', data)
                    // console.log(html);
                $('#article .product-list').html(html);
            }
        })
    }


    $('.row').on('click', '.col-xs-3:eq(7)', function() {
        // console.log(8888);
        $('.row .col-xs-3:eq(8)').toggleClass('hidden');
        $('.row .col-xs-3:eq(9)').toggleClass('hidden');
        $('.row .col-xs-3:eq(10)').toggleClass('hidden');
        $('.row .col-xs-3:eq(11)').toggleClass('hidden');
    })

    $('.header-logo').on('click', function() {
        // console.log(5555);
        $('#header').toggleClass('hidden');
    })
    $('#header').on('click', '.glyphicon-remove-circle', function() {
        $('#header').toggleClass('hidden');
    })

});