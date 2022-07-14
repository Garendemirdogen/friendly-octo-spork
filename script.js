// Once window is loaded, current day and date 
document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do YYYY");
// Live clock will populate
window.setInterval(function () {
    $('#currentTime').html(moment().format('h:mm:ssA'))
}, 1000);

var timeBlock = $(".time-block");
var list = $("textarea");
// Change the color of the textarea based on if the time is in the past, present or the future
for (var i = 0; i < timeBlock.length; i++) {
    if (parseInt(timeBlock[i].id) < moment().format("H")) {
        list[i].classList.add("past");
    }
    else if (parseInt(timeBlock[i].id) == moment().format("H")) {
        list[i].classList.add("present");
    }
    else if (parseInt(timeBlock[i].id) > moment().format("H")) {
        list[i].classList.add("future");
    }
};

// save the tasks using local storage
var saveBtn = $(".saveBtn");
for (var j = 0; j < saveBtn.length; j++) {
        saveBtn[j].addEventListener("click", saveTasks);
}

// get data and check for data
var events = JSON.parse(localStorage.getItem("events"));
var timeBlockArray = $(".time-block");
if (events) {
    for (var i = 0; i < timeBlockArray.length; i++) {
        for (var k = 0; k < events.length; k++) {
            if ($(timeBlockArray[i]).attr("id") === events[k].id) {
                $(timeBlockArray[i]).find("textarea").val(events[k].text);
            }
        }
    }
}
// array for events
else { events = [
    {id: "0900", text: ""}, {id: "1000", text: ""}, {id: "1100", text: ""}, {id: "1200", text: ""}, {id: "1300", text: ""}, {id: "1400", text: ""}, {id: "1500", text: ""}, 
    {id: "1600", text: ""}, {id: "1700", text: ""}, 
    ];
};
// Save task function
function saveTasks(event) {
    var id = $(event.target).closest(".time-block").attr("id");
    var value = $(event.target).siblings("textarea").val();
    for (var i = 0; i < events.length; i++) {
        if (events[i].id === id) {
            events[i].text = value;
        }
    }

    localStorage.setItem("events", JSON.stringify(events));
}

