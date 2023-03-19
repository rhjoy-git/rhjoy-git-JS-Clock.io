let hourHand = document.getElementById("hour-hand");
let minuteHand = document.getElementById("minute-hand");
let secondHand = document.getElementById("second-hand");
let anlogButton = document.querySelector(".timeBtn");
let bntClickcounter = 0;

anlogButton.addEventListener("click", function(){
    bntClickcounter++;
    if(bntClickcounter === 1)
        setInterval(setClock, 1000)
})

function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondsRatio + currentDate.getMinutes() ) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotation){
    element.style.setProperty(`--rotation`, rotation * 360);
}
















