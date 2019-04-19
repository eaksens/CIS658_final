"use strict";

/*
 * Updates calendar.html to display the desired month.
 *
 * @param date a JavaScript Date object set to a day in the month to be displayed.
 */
var i,j;

var update = function (date) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // *** Remember to use getElementsByTagName when possible.  It avoids a lot of the hassle of looking through each child. ***


    // Calculate the previous and next month
    // (You may use this for adding links to the left arrow)
    var nextMonth = date.getMonth()  + 1;
    var nextYear = date.getFullYear();
    if (nextMonth >= 12) {
        // Remember:  Months are numbered beginning with 0.
        nextMonth = 0;
        nextYear++;
    }

  return daysInCurrentMonth;
}

function displayMonth(){
  //Update the title
  var titleMonth = document.getElementById("demo");
  var inputMonth = document.getElementById("form_month"),
      inputYear = document.getElementById("form_year");
  titleMonth.innerHTML = inputMonth.value + " " + inputYear.value;

  //Fill in the calendar with dates
  var t = document.getElementById("calendarTable"); // This have to be the ID of your table, not the tag

  //get Today Date to work
  var d = new Date();
  console.log(update(d));

      for(i=1; i<=7; i++){
              var row = t.getElementsByTagName("tr")[1],
                  col = row.getElementsByTagName("td");
              col[i].innerHTML = i;
      }

      for(i=1; i<=7; i++){
              var row = t.getElementsByTagName("tr")[2],
                  col = row.getElementsByTagName("td");
              col[i].innerHTML = i;
      }

console.log(col);





}

function previousMonth(){
  var d = new Date();
  var nextMonth = d.getMonth()  + 1;
  console.log(nextMonth);
  //Update the title
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var titleMonth = document.getElementById("demo");
  var inputMonth = months[nextMonth];
  console.log(inputMonth);

  titleMonth.innerHTML = inputMonth;
}
