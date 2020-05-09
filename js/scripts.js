var myClock = setInterval(clock, 500);

function clock() {
    var date = new Date();
    var time_us = date.toLocaleTimeString('en-US');
    var time_us_array = time_us.split(' ');
    $('#current_time').text(time_us_array[0]);
    $('#am_pm').text(time_us_array[1]);
}

var locale = Intl.DateTimeFormat().resolvedOptions().locale;
var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
$('#timezone').text(tz);

function calculateUtcOffset() {
    let date = new Date();
    var utc_offset_min = date.getTimezoneOffset();
    var utc_offset_h = utc_offset_min/60;
    console.log(utc_offset_h);
    return utc_offset_h.toString();
}
$('#utc_offset').text("UTC" + calculateUtcOffset());