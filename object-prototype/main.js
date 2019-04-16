function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
  let now = Date.now();
  let dateOfBirth = new Date(birthday);
  let diff = now - +dateOfBirth;
  let age = diff / (((365 * 24 * 60 * 60 * 1000)*3 + (366 * 24 * 60 * 60 * 1000)) / 4);

  return (age > 18);
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
  let sound = animal.sound;
  return (sound) ? `${sound}` : null; 
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
  let summ = 0;
  for (let i = 0; i < marks.length; i++) {
    summ += Number(marks[i]);
  }
  let average = summ / marks.length;
  let roundedAverage = Math.round(average);

  return roundedAverage;
}