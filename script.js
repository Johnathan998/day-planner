$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        console.log($(this))
    })
    function hoursUpdater() {
        var currentHour = moment().hours();
        console.log(currentHour);
        $(".time-block").each(function () {
            var blockHour = $(this).attr("id").split("-")[1]
            if (blockHour < currentHour) {
                console.log("Block Hour is before current hour");
                $(".time-block").css("background-color", "grey")
            } else if {

            } else {

            }
        })
    }
    hoursUpdater();
});

