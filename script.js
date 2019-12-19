var currentHour = moment().hours()
$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        savedEvent = $(this).prev().val();
        localStorage.setItem($(".description").val(), savedEvent);
    });
    var currentHour = moment().hours()
    function hoursUpdater() {

        console.log(currentHour);
    }

    $(".time-block").each(function () {
        var blockHour = $(this).attr("id").split("-")[1]
        if (blockHour < currentHour) {
            console.log("Block Hour is before current hour");
            $(".time-block").css("background-color", "grey");
        } else if (blockHour > currentHour) {
            $(".time-block").css("background-color", "red");
        } else {
            $(".time-block").css("background-color", "green");
        }
    });

    $(".description").val(localStorage.getItem($(this).val()));

});