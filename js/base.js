$(function() {
    $('#header').addClass('hidden');


    $('.c').on('click', '.col-xs-3:eq(7)', function() {
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