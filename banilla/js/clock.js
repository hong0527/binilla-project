const clock = document.querySelector("h2#clockInform");

function hadleClock(){
    const date = new Date();

    const hour = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hour}: ${min} : ${sec}`;
}


setInterval(hadleClock,1000);