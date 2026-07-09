let alarmHour = null, alarmMinute = null, alarmTriggered = false;

function updateClock() {
    const now = new Date();
    const h = now.getHours() % 12;
    const m = now.getMinutes();
    const s = now.getSeconds();

    document.querySelector('.hour-hand').style.transform = `rotate(${h * 30 + m * 0.5}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${m * 6}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${s * 6}deg)`;

    if (alarmHour !== null && h === (alarmHour % 12) && m === alarmMinute && s === 0 && !alarmTriggered) {
        triggerAlarm();
    }
}

function setAlarm() {
    const val = document.getElementById('alarmTime').value; // "HH:MM"
    if (!val) return alert('Pick a time first');
    [alarmHour, alarmMinute] = val.split(':').map(Number);
    alarmTriggered = false;
    alert(`Alarm set for ${val}`);
}

function triggerAlarm() {
    alarmTriggered = true;
    document.getElementById('alarmSound').play();
    alert('⏰ Alarm ringing!');
}

function stopAlarm() {
    const sound = document.getElementById('alarmSound');
    sound.pause();
    sound.currentTime = 0;
    alarmHour = null;
    alarmMinute = null;
    alert('Alarm stopped.');
}

function snoozeAlarm() {
    const sound = document.getElementById('alarmSound');
    sound.pause();
    sound.currentTime = 0;
    const now = new Date();
    now.setMinutes(now.getMinutes() + 5);
    alarmHour = now.getHours();
    alarmMinute = now.getMinutes();
    alarmTriggered = false;
    alert(`Snoozed. New alarm at ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`);
}

setInterval(updateClock, 1000);
updateClock();