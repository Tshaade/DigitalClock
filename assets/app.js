const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const amPmEl = document.getElementById("amPm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = "PM";

    if(h > 12){
        h = h - 12;
        ap = "AM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    amPmEl, (innerText = ap);
    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();
