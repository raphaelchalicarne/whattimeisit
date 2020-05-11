var myClock = setInterval(clock, 500);
var settingTitle = setInterval(setTitle, 1000);

function clock() {
    var date = new Date();
    // setTitle(date);
    var time_us = date.toLocaleTimeString('en-US');
    var time_us_array = time_us.split(' ');
    $('#current_time').text(time_us_array[0]);
    switch(time_us_array[1]) {
        case "AM":
            $('#am').text("AM");
            $('#pm').empty();
            break;
        case "PM":
            $('#am').empty();
            $('#pm').text("PM");
            break;
    }
}

function setTitle(date) {
    var date = new Date();
    var time_us = date.toLocaleTimeString('en-US');
    var time_us_array = time_us.split(' ');
    var time_h_m_s = time_us_array[0].split(':');
    var clock_emojis = [`🕐`, `🕜`, `🕐`, `🕝`, `🕒`, `🕞`, `🕓`, `🕟`, `🕔`, `🕠`, `🕕`, `🕡`, `🕖`, `🕢`, `🕗`, `🕣`, `🕘`, `🕤`, `🕙`, `🕥`, `🕚`, `🕦`];
    var h = date.getHours();
    if (h > 11) {
        h -= 12;
    }
    var m = date.getMinutes();
    var index = h*2;
    if (m > 29) {
        index-=1;
    } else {
        index -= 2;
    }
    if (index < 0) {
        index += 2;
    }
    var emoji = clock_emojis[index]
    $('title').text(emoji + ' ' + time_h_m_s[0] + ':' + time_h_m_s[1] + ' ' + time_us_array[1]);
    return index;
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