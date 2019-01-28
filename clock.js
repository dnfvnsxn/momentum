const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function ch2Format(number){
    return number<10 ? '0'+number : number;
}

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    const hh = ch2Format(hours);
    const mm = ch2Format(minutes);
    const ss = ch2Format(seconds);

    clockTitle.innerText = `${hh}:${mm}:${ss}`;
}

function init(){
    getTime()
    setInterval(getTime,1000);
}

init()