// Once window is loaded, current day, date and live clock will populate
window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd MMMM Do, YYYY h:mm:ssA'))
}, 1000);

var timeBlock = $(".time-block");
var list = $("textarea");

for (var i = 0; i < timeBlock.length; i++) {
    if (setInterval(timeBlock[i].id) < moment().format("h")) {
        list[i].classList.add("past");
    }
    else if (setInterval(timeBlock[i].id) == moment().format("h")) {
        list[i].classList.add("present");
    }
    else if (setInterval(timeBlock[i].id) > moment().format("h")) {
        list[i].classList.add("future");
    }
};