const timerCardData = document.querySelector('#timer-card-data');
const secondInput = document.querySelector('#second-input');
const minuteInput = document.querySelector('#minute-input');
const hourInput = document.querySelector('#hour-input');
const timerButton = document.querySelector('#timer-button');
const reloadButton = document.querySelector('#reload-button');

timerButton.addEventListener('click', () => {
    let second = parseInt(secondInput.value) || 0;
    let minute = parseInt(minuteInput.value) || 0;
    let hour = parseInt(hourInput.value) || 0;

    const temporizador = setInterval(() => {
        
        const formatHour = String(hour).padStart(2, '0');
        const formatMinute = String(minute).padStart(2, '0');
        const formatSecond = String(second).padStart(2, '0');

        timerCardData.innerHTML = `${formatHour} : ${formatMinute} : ${formatSecond}`;

        if (hour === 0 && minute === 0 && second === 0) {
            clearInterval(temporizador);
            timerCardData.innerHTML = `<img src='rocket.gif' id='gif-despegue' alt='Despegue'>`;
            return;
        }

        if (second > 0) {
            second--;
        } else {
            second = 59;
            if (minute > 0) {
                minute--;
            } else if (hour > 0) {
                minute = 59;
                hour--;
            }
        }
    }, 3000);
});

reloadButton.addEventListener('click', () => {
    location.reload();
});