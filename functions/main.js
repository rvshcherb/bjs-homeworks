// Задача №1
function getSolutions(a,b,c) {
  let D = Math.pow(b,2) - 4 * a * c;
  let roots = [];

  if (D < 0) {
    return {D}
  } else if (D == 0) {
    let x1 = -b / 2 * a;
    roots.push(x1);
    return {D,roots};
  } else {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    roots.push(x1,x2);
    return {D,roots};
  }
}

function showSolutionsMessage(a,b,c) {
  let result = getSolutions(a,b,c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + (${b}x) + (${c})`);
  
  if (result.D < 0) {
    console.log(`Значение дискриминанта: ${result.D}\nУравнение не имеет вещественных корней`);
  } else if (result.D === 0) {
    console.log(`Значение дискриминанта: ${result.D}\nУравнение имеет один корень X₁: ${result.roots}`);
  } else {
    console.log(`Значение дискриминанта: ${result.D}\nУравнение имеет два корня корень X₁: ${result.roots[0]}, X₂: ${result.roots[1]}`);
  }
}

showSolutionsMessage(3,-4,2);
showSolutionsMessage(1,-6,9);
showSolutionsMessage(1,-4,-5);

// Задача №2
function getPersonalData(secretData) {
  function chooseFirstName() {
    if(secretData.aaa === 0) {
      return 'Эмилио';
    } else {
      return 'Родриго';
    }
  }

  function chooseLastName() {
    if(secretData.bbb === 0) {
      return 'Эмилио';
    } else {
      return 'Родриго';
    }
  }

  let name = {
    firstName: chooseFirstName(),
    lastName: chooseLastName()
  }
  return name;
}

console.log(getPersonalData({aaa: 0, bbb:0}));
console.log(getPersonalData({aaa: 0, bbb:1}));
console.log(getPersonalData({aaa: 1, bbb:0}));
console.log(getPersonalData({aaa: 1, bbb:1}));

//Задача №3
function getAverageScore(data) {
  for (let prop in data) {
    data[prop] = averageSubject();

    function averageSubject(){
      let sum = 0;
      for (let i = 0; i < data[prop].length; i++) {
        sum += data[prop][i];
      }
      return sum / data[prop].length;;
    }
  }

  data.average = averageTotal();

  function averageTotal() {
    let quant = 0;
    let sum = 0;
    for (let prop in data) {
      sum += data[prop];
      quant++;
    }
    return sum / quant;
  }
  return data;
}

console.log(getAverageScore({
  algebra: [2,4,2,4,4,2,1,2,4,2,2,3],
  geomtry: [3,5,5,3,3,5,5,3,5,3,2,5,3,3,5,4,5,5,5],
  russian: [2,2,2,2,2,2,3,5,3,2,1,2],
  music: [3,5,4,5,5,5],
  physic: [3,5,5,3,3,5,4,5,5,5]
}));
