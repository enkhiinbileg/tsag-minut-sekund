const hours = document.querySelector("#hours");  
const minutes = document.querySelector("#minutes");  
const secund = document.querySelector("#seconds");  
const startBtn = document.querySelector("#start-btn");  
const stopBtn = document.querySelector("#stop-btn");  
const resetBtn = document.querySelector("#reset-btn");  
const lapBtn = document.querySelector("#lap-btn");  

let i = 0;  
let timer = null;  
let laps = [];   

function updateTime() {
    const h = Math.floor(i / 3600);  
    const m = Math.floor((i % 3600) / 60); 
    const s = i % 60;  

    
    hours.innerText = h < 10 ? '0' + h : h;
    minutes.innerText = m < 10 ? '0' + m : m;
    secund.innerText = s < 10 ? '0' + s : s;
}




startBtn.addEventListener("click", () => {
    if (!timer) {  
        timer = setInterval(() => {
            i++;  
            updateTime();  
        }, 100);  
    }
});




stopBtn.addEventListener("click", () => {
    clearInterval(timer);  
    timer = null; 
});





resetBtn.addEventListener("click", () => {
    clearInterval(timer);  
    timer = null;  
    i = 0;  
    updateTime();  
});



lapBtn.addEventListener("click", () => {
    const lapTime = {  
        hours: hours.innerText,
        minutes: minutes.innerText,
        seconds: secund.innerText
    };
    laps.push(lapTime);  
    
    
    const lapList = document.querySelector("#lap-list");  
    const lapItem = document.createElement("li");  
    lapItem.innerText = Lap ${laps.length}: ${lapTime.hours}:${lapTime.minutes}:${lapTime.seconds};
    lapList.appendChild(lapItem);  
});
