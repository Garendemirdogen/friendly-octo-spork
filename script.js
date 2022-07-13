// Once window is loaded, current day, date and live clock will populate
window.setInterval(function () {
    $('#currentDay').html(moment().format('dddd MMMM Do, YYYY h:mm:ssA'))
}, 1000);

var timeBlock = $(".time-block");
var list = $("textarea");
// Change the color of the textarea based on if the time is in the past, present or the future
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

// save the tasks using local storage
var saveBtn = $(".saveBtn");
for (var j = 0; j < saveBtn.length; j++) {
        saveBtn[j].addEventListener("click", saveTasks);
}

