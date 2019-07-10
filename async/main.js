const goodMorning = () => console.log('Доброе утро!');
const goodNight = () => console.log('Доброй ночи!');

function setDailyRhythm(wakeUpTime, bedTime) {
  let currentTime = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  
  function setAlarm(time, callback) {
    console.log(`Этот будильник заведен на ${time}`);

    return (currentTime) => {
      console.log(`Текущее время: ${currentTime}`);

      // Тут условие проверки для вызова callback-функциию

    }
  }

const morningAlarm = setAlarm(wakeUpTime, goodMorning);
const eveningAlarm = setAlarm(bedTime, goodNight);

//morningAlarm(currentTime);
//eveningAlarm(currentTime);

setInterval(morningAlarm, 1000, currentTime);
setInterval(eveningAlarm, 1000, currentTime);
}

setDailyRhythm('09:00', '23:00'); 

