// Once window is loaded, current day, date and live clock will populate
window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd MMMM Do, YYYY h:mm:ssA'))
}, 1000);

var timeBlock = $(".time-block");
var list = $("textarea");

for (var i=0; i < timeBlock.length; i++);