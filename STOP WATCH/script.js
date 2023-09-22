let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("timer");
let times = null;

function watchTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let hrs = hours < 10 ? "0" + hours : hours;
    let mnts = minutes < 10 ? "0" + minutes : minutes;
    let scnds = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = hrs + ":" + mnts + ":" + scnds;
}
function onStart() {
    if (times !== null) {
        clearInterval(times);
    }
    times = setInterval(watchTimer, 1000);
}
function onstop() {

    clearInterval(times);

}
function onReset() {

    clearInterval(times);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";


}
