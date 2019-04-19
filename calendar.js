"use strict";

/*
 * Updates calendar.html to display the desired month.
 *
 * @param date a JavaScript Date object set to a day in the month to be displayed.
 */
var i, j;

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

function displayMonth() {
  debugger;
  //Update the title
  var titleMonth = document.getElementById("demo"),
    inputMonth = document.getElementById("form_month"),
    inputYear = document.getElementById("form_year");

  titleMonth.innerHTML = inputMonth.value + " " + inputYear.value;

  //get Today Date to work
  var d = new Date();
  console.log(update(d));
  var row, col;

  //Fill in the calendar with dates
  var table = document.getElementById("calendarTable");
  for (var i = 1, row; row = table.rows[i]; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[j]; j++) {
      //iterate through columns
      //columns would be accessed using the "col" variable assigned in the for loop
      col.innerHTML = j;
    }
  }
}

function previousMonth() {
  var d = new Date();
  var nextMonth = d.getMonth() - 1;
  console.log(nextMonth);
  //Update the title
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var titleMonth = document.getElementById("demo");
  var inputMonth = months[nextMonth];
  console.log(inputMonth);

  titleMonth.innerHTML = inputMonth;
}
