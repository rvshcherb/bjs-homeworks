function setDailyRhythm(wakeUpTime, bedTime) {
  let currentTime;
  setInterval(() => currentTime = new Date().toTimeString().replace(/.*(\d{2}:\d{2}):\d{2}.*/, "$1"), 1000);

  function setAlarm(time, callback) {
    //console.log(`будильник заведен на ${time}`);

    return function (currentTime) {
      //console.log(`Текущее время: ${currentTime}`);
      if (currentTime === time) {
        callback();
      }
    }
  }

  const goodMorning = () => alert('Доброе утро!');
  const goodNight = () => alert('Доброй ночи!');

  const morningAlarm = setAlarm(wakeUpTime, goodMorning);
  const eveningAlarm = setAlarm(bedTime, goodNight);

  setInterval(() => morningAlarm(currentTime), 1000);
  setInterval(() => eveningAlarm(currentTime), 1000);
}

setDailyRhythm('09:00', '00:20');