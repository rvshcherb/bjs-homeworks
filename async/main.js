const goodMorning = () => console.log('Доброе утро!');
const goodNight = () => console.log('Доброй ночи!');

function setDailyRhythm(wakeUpTime, bedTime) {

}

function setAlarm(time, callback) {
  return function checkTime() {
    actualTime = new Date().toTimeString().replace(/.*(\d{2}:\d{2}):\d{2}.*/, "$1");
    if(actualTime === time) {
      callback();
    } else {
      //console.log(actualTime);
      setTimeout(checkTime, 1000);
    }
  }
}

const morningAlarm = setAlarm('14:37', goodMorning);
const eveningAlarm = setAlarm('14:38', goodNight);

morningAlarm();
eveningAlarm();