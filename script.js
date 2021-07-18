window.onload = function() {
    printTime();
}

function printTime() {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10 ) {
        min = "0" + min;
    }
    if (sec < 10 ) {
        sec = "0" + sec;
    }

    document.getElementById('time').innerHTML = hour + ":" + min + ":" + sec;
    document.getElementById('date').innerHTML = days[day] + ", " + date + " " + months[month] + " " + year;

}
setInterval(printTime, 1000);