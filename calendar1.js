"use strict";

/*
 * Updates calendar.html to display the desired month.
 *
 * @param date a JavaScript Date object set to a day in the month to be displayed.
 */
var i, j;
var date;

function initializeCalendar()
{
  date = new Date();
}

function displayCalendar() {
  fillDays();
  setMonthTitle();
  setYearTitle();
}

//will populate calendar with days, 1-31, depending on a month
function fillDays(){
  var i;
  var calendarDays = document
  .getElementById("calendarTable")
  .getElementsByTagName("tbody")[0]
  .getElementsByClassName("day");

  var month = date.getMonth();
  var year = date.getFullYear();
  var daysOffset = new Date(year,month,1).getDay();
  var numberOfDays = new Date(year,month+1,0).getDate(); //0 for day gives last day of the PREVIOUS month

  //clear cells
  for(i=0; i<calendarDays.length;i++){
    calendarDays[i].innerHTML = "&nbsp";
  }

  //populate cells with dates, 1-31
  for(i=1; i<=numberOfDays; i++)
  {
    calendarDays[daysOffset].innerHTML = i;
    daysOffset++;
  }
}

function getPreviousMonth(){
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  if(month == 0){
    month = 11;
    year--;
  } else {
    month--;
  }
  date = new Date(year,month,day);

  return date;
}

function getNextMonth(){
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  if(month == 11){
    month = 0;
    year++;
  } else {
    month++;
  }
  date = new Date(year,month,day);

  return date;
}

function setMonthTitle(){
  //update year header on a table
}

function setYearTitle(){
  //update month header on a table
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



function nextMonth(){
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
