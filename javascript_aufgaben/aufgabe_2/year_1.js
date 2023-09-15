function leapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
console.log(leapYear(2010));

/* if (object==0) {
    alert("This is Leap Year");
} else {
    alert("This is not leap year");
}

 */
