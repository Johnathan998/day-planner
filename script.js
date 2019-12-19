$(document).ready(function () {
    var description = $('.description');
    $('.saveBtn').on('click', function () {
        makeKeys()

    });
    function makeKeys() {
        var comment = $.trim($('#event-9').val());
        if (comment != '') {
            localStorage.setItem('event-1', comment)
        }
        var comment1 = $.trim($('#event-10').val());
        if (comment1 != '') {
            localStorage.setItem('event-2', comment1)
        }
        var comment2 = $.trim($('#event-11').val());
        if (comment2 != '') {
            localStorage.setItem('event-3', comment2)
        }
        var comment3 = $.trim($('#event-12').val());
        if (comment3 != '') {
            localStorage.setItem('event-4', comment3)
        }
        var comment4 = $.trim($('#event-13').val());
        if (comment4 != '') {
            localStorage.setItem('event-5', comment4)
        }
        var comment5 = $.trim($('#event-14').val());
        if (comment5 != '') {
            localStorage.setItem('event-6', comment5)
        }
        var comment6 = $.trim($('#event-15').val());
        if (comment6 != '') {
            localStorage.setItem('event-7', comment6)
        }
        var comment7 = $.trim($('#event-16').val());
        if (comment7 != '') {
            localStorage.setItem('event-8', comment7)
        }
        var comment8 = $.trim($('#event-17').val());
        if (comment8 != '') {
            localStorage.setItem('event-9', comment8)
        }
    }