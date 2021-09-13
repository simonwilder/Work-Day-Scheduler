// Current Date and Time
var showDate = function() {
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDate)
};

$(".saveBtn").click(function(){
    var text = $(this).closest(".row").find("textarea").val();
    var time = $(this).closest(".row").attr("id");

    // Save in Local Storage

    localStorage.setItem(time,text);
});

// Load text from Local Storage

var loadText = function() {
    $("#9am").val(localStorage.getItem("9am"))
    $("#10am").val(localStorage.getItem("10am"))
    $("#11am").val(localStorage.getItem("11am"))
    $("#12pm").val(localStorage.getItem("12pm"))
    $("#1pm").val(localStorage.getItem("1pm"))
    $("#2pm").val(localStorage.getItem("2pm"))
    $("#3pm").val(localStorage.getItem("3pm"))
    $("#4pm").val(localStorage.getItem("4pm"))
    $("#5pm").val(localStorage.getItem("5pm"))
}



// Adjusts row color based on hour

var rowColor = function() {

    var currentTime = moment().hour();
    
    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour < currentTime) {
            $(this).addClass("past");
        } else if (currentHour === currentTime) {
            $(this).removeClass("past");
            $(this).addClass ("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

loadText();
rowColor();
showDate();