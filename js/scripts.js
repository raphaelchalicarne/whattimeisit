var myClock = setInterval(clock, 1000);

function clock() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    $('#current_time').text(time);
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