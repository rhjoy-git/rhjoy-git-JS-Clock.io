let hourHand = document.getElementById("hour-hand");
let minuteHand = document.getElementById("minute-hand");
let secondHand = document.getElementById("second-hand");
let anlogButton = document.querySelector(".aBtn");


let AbntClickcounter = 0;
let DbntClickcounter = 0;

// Analog clock update by system

anlogButton.addEventListener("click", function () {
    AbntClickcounter++;
    if (AbntClickcounter === 1)
        setInterval(analogClock, 1000)
})

function analogClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotation) {
    element.style.setProperty(`--rotation`, rotation * 360);
}

// clock update by code

let digitalButton = document.querySelector(".dBtn");
let Dghour = document.querySelector("#Dghour")
let Dgminute = document.querySelector("#Dgminute")
let Dgsecond = document.querySelector("#Dgsecond")

let hour = 00;
let min = 00;
let sec = 00;

digitalButton.addEventListener("click", function () {
    DbntClickcounter++;
    if (DbntClickcounter === 1) {
        const systemCurrentTime = new Date();
        hour = systemCurrentTime.getHours();
        min = systemCurrentTime.getMinutes();
        sec = systemCurrentTime.getSeconds();
        setTime();
        setInterval(digitalClock, 1000);
    }
})

function digitalClock() {
    sec++;
    if (sec <= 9) {
        Dgsecond.innerHTML = "0" + sec;
        console.log(sec)
    } else if (sec > 9) {
        Dgsecond.innerHTML = sec;
        console.log(sec)
    }
    if (sec > 59) {
        min++;
        if(min <= 9) {
            Dgminute.innerHTML = "0" + min;
        } 
        else if (min > 9) {
            Dgminute.innerHTML = min;
        }
        sec = 0;
        Dgsecond.innerHTML = "0" + sec;
    }

    if (min > 59) {
        hour++;
        if (hour <= 9) {
            Dghour.innerHTML = "0" + hour;
        } else if (hour > 9 && hour < 12) {
            Dghour.innerHTML = hour;
        } else {
            hour = 1;
            Dghour.innerHTML = "0" + hour;
        }

        min = 0;
        Dgminute.innerHTML = "0" + min;
    }
}

function setTime() {
    if (hour <= 9)
        Dghour.innerHTML = "0" + hour;
    else if (hour > 9)
        Dghour.innerHTML = hour;
    if (min <= 9)
        Dgminute.innerHTML = "0" + min;
    else if (min > 9)
        Dgminute.innerHTML = min;
    if (sec <= 9)
        Dgsecond.innerHTML = "0" + sec;
    else if (sec > 9)
        Dgsecond.innerHTML = sec;

}