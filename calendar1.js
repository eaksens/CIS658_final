"use strict";

/*
 * Updates calendar.html to display the desired month.
 *
 * @param date a JavaScript Date object set to a day in the month to be displayed.
 */
var i, j;
var date;
var month, year;

function initializeCalendar() {
  date = new Date();
}

function submitDate(){
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  month = document.getElementById("form_month").value;
  console.log(month);
  year = document.getElementById("form_year").value;
  console.log(year);
  switch (month) {
    case "January":
      date = new Date(year, 0, 1);
      console.log(date);
      break;
    case "February":
      date = new Date(year, 1, 1);
      console.log(date);
      break;
    case "March":
      date = new Date(year, 2, 1);
      console.log(date);
    break;
    case "April":
      date = new Date(year, 3, 1);
      console.log(date);
      break;
    case "May":
      date = new Date(year, 4, 1);
      console.log(date);
      break;
    case "June":
      date = new Date(year, 5, 1);
      console.log(date);
    break;
    case "July":
      date = new Date(year, 6, 1);
      console.log(date);
      break;
    case "August":
      date = new Date(year, 7, 1);
      console.log(date);
      break;
    case "September":
      date = new Date(year, 8, 1);
      console.log(date);
    break;
    case "October":
      date = new Date(year, 9, 1);
      console.log(date);
      break;
    case "November":
      date = new Date(year, 10, 1);
      console.log(date);
      break;
    case "December":
      date = new Date(year, 11, 1);
      console.log(date);
    break;
  }

  displayCalendar();
}

function displayCalendar() {
  fillDays();
  setMonthYearTitle();
}

//will populate calendar with days, 1-31, depending on a month
function fillDays() {
  var i;
  var calendarDays = document
    .getElementById("calendarTable")
    .getElementsByTagName("tbody")[0]
    .getElementsByClassName("day");

  //get month -current month is April -so this got 3
  month = date.getMonth();
  console.log(month);
  //get year -current year is 2019
  year = date.getFullYear();
  console.log(year);
  var daysOffset = new Date(year, month, 1).getDay();
  console.log(daysOffset);
  var numberOfDays = new Date(year, month + 1, 0).getDate(); //0 for day gives last day of the PREVIOUS month
  console.log(numberOfDays);

  //clear cells
  for (i = 0; i < calendarDays.length; i++) {
    calendarDays[i].innerHTML = "&nbsp";
  }

  //populate cells with dates, 1-31
  for (i = 1; i <= numberOfDays; i++) {
    calendarDays[daysOffset].innerHTML = i;
    daysOffset++;
  }
}

function getPreviousMonth() {
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  if (month == 0) {
    month = 11;
    year--;
  } else {
    month--;
  }
  date = new Date(year, month, day);

  return date;
}

function getNextMonth() {
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  if (month == 11) {
    month = 0;
    year++;
  } else {
    month++;
  }
  date = new Date(year, month, day);

  return date;
}

function setMonthYearTitle() {
  //update year header on a table
  fillDays();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  switch (month) {
    case 0:
      document.getElementById("pageTile").innerHTML = months[0] + " " + year;
      break;
    case 1:
      document.getElementById("pageTile").innerHTML = months[1] + " " + year;
      break;
    case 2:
      document.getElementById("pageTile").innerHTML = months[2] + " " + year;
      break;
    case 3:
      document.getElementById("pageTile").innerHTML = months[3] + " " + year;
      break;
    case 4:
      document.getElementById("pageTile").innerHTML = months[4] + " " + year;
      break;
    case 5:
      document.getElementById("pageTile").innerHTML = months[5] + " " + year;
      break;
    case 6:
      document.getElementById("pageTile").innerHTML = months[6] + " " + year;
      break;
    case 7:
      document.getElementById("pageTile").innerHTML = months[7] + " " + year;
      break;
    case 8:
      document.getElementById("pageTile").innerHTML = months[8] + " " + year;
      break;
    case 9:
      document.getElementById("pageTile").innerHTML = months[9] + " " + year;
      break;
    case 10:
      document.getElementById("pageTile").innerHTML = months[10] + " " + year;
      break;
    case 11:
      document.getElementById("pageTile").innerHTML = months[11] + " " + year;
      break;
  }
}







var update = function(date) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var daysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  // *** Remember to use getElementsByTagName when possible.  It avoids a lot of the hassle of looking through each child. ***


  // Calculate the previous and next month
  // (You may use this for adding links to the left arrow)
  var nextMonth = date.getMonth() + 1;
  var nextYear = date.getFullYear();
  if (nextMonth >= 12) {
    // Remember:  Months are numbered beginning with 0.
    nextMonth = 0;
    nextYear++;
  }

  return daysInCurrentMonth;
}



function nextMonth() {
  getNextMonth();
  displayCalendar();

  /*
  var d = getNextMonth();
  var nextMonth = d.getMonth() + 1;
  console.log(nextMonth);
  //Update the title
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var titleMonth = document.getElementById("demo");
  var inputMonth = months[nextMonth];
  console.log(inputMonth);

  titleMonth.innerHTML = inputMonth;
  */
}

function previousMonth() {
  getPreviousMonth();
  displayCalendar();

  /*
  var d = getPreviousMonth();
  var nextMonth = d.getMonth();
  console.log(nextMonth);
  //Update the title
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var titleMonth = document.getElementById("demo");
  var inputMonth = months[nextMonth];
  console.log(inputMonth);

  titleMonth.innerHTML = inputMonth;
  */
}
