//your JS code here. If required.
function daysOfAYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        // Leap year
        return 366;
    } else {
        // Non-leap year
        return 365;
    }
}