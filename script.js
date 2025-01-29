let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");
let startValue = 0;
let endValue = 100;
let speedValue = 100;

function uptadeProgress () {
    progressValue.textContent = `${startValue}%`;
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${startValue * 3.6}deg, #ededed 0deg)`

    if (startValue < endValue){
        startValue++;
        setTimeout(uptadeProgress,speedValue);
    }
}

uptadeProgress();
