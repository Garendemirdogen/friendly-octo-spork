console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
// Once window is loaded, current day and date
document.querySelector("#currentDay").textContent =
  moment().format("dddd, MMMM Do YYYY");
// Live clock will populate
window.setInterval(function () {
  $("#currentTime").html(moment().format("h:mm:ssA"));
}, 1000);

console.log(moment().format("H"));

var timeBlock = $(".time-block");
var list = $("textarea");
// Change the color of the textarea based on if the time is in the past, present or the future
for (var i = 0; i < timeBlock.length; i++) {
  if (parseInt(timeBlock[i].id) < moment().format("H")) {
    list[i].classList.add("past");
  } else if (parseInt(timeBlock[i].id) == moment().format("H")) {
    list[i].classList.add("present");
  } else if (parseInt(timeBlock[i].id) > moment().format("H")) {
    list[i].classList.add("future");
  }
}

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
else {
  events = [
    { id: "9", text: "" },
    { id: "10", text: "" },
    { id: "11", text: "" },
    { id: "12", text: "" },
    { id: "13", text: "" },
    { id: "14", text: "" },
    { id: "15", text: "" },
    { id: "16", text: "" },
    { id: "17", text: "" },
  ];
}
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
