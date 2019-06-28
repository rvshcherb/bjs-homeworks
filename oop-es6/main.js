/***** Задача №1 *****/

class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.initialDurability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    let durability = this.durability - damage;
    if (durability >= 0) {
      this.durability = durability;
    } else {
      this.durability = 0;
    }
  }

  getDamage(){
    if (this.durability > 0) {
      if(this.durability / this.initialDurability <= 0.3 ) {
        return this.attack = this.attack / 2;
      } else {
        return this.attack;
      }
    } else {
      return 0;
    }
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}


let arm = new Weapon('Рука', 1, Infinity, 1);
let bow = new Weapon('Лук', 10, 200, 3);
let sword = new Weapon('Меч', 25, 500, 1);
let knife = new Weapon('Нож', 5, 300, 1);
let crook = new Weapon('Посох', 8, 300, 2);

let longBow = Object.create(bow);
longBow.name = 'Длинный лук';
longBow.attack = 15;
longBow.range = 4;

let poleAxe = Object.create(sword);
poleAxe.name = 'Секира';
poleAxe.attack = 27;
poleAxe.durability = 800;

let crookOfStorm = Object.create(crook);
crookOfStorm.name = 'Посох бури';
crookOfStorm.attack = 10;
crookOfStorm.range = 3;


/***** Задача №2 *****/

class Arm extends Weapon {
  constructor() {
    super('Рука', 1, Infinity, 1);
  }
}

class Bow extends Weapon {
  constructor() {
    super('Лук', 10, 200, 3);
  }
}

class Sword extends Weapon {
  constructor() {
    super('Меч', 25, 500, 1);
  }
}

class Knife extends Weapon {
  constructor() {
    super('Нож', 5, 300, 1);
  }
}

class Crook extends Weapon {
  constructor() {
    super('Посох', 8, 300, 2);
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class PoleAxe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}

class CrookOfStorm extends Crook {
  constructor() {
    super();
    this.name = 'Посох бури';
    this.attack = 10;
    this.range = 3;
  }
}

/***** Задача №3 *****/

class StudentLog {
  constructor(name) {
    this.name = name;
    this.algebra = [];
    this.geometry = [];
    this.chemistry = [];
  }

  getName() {
    return this.Name;
  }


  addGrade(grade, subject) {
    for (let prop in this) {
      if (prop == subject) {
        if (grade > 0 && grade <= 5) {
          this[prop].push(grade);
          return this[prop].length;
        } else {
          console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
          return this[prop].length;
        }
      } 
    }
  }

  getAverageBySubject(subject) {
    for (let prop in this) {
      if (prop == subject) {
        let sum = 0;
        for (let i = 0; i < this[prop].length; i++) {
          sum += this[prop][i];
        }
        return sum / this[prop].length;
      }
    }
    return 0;
  }

  getTotalAverage() {
    let sum = 0;
    let length = 0;

    for (let prop in this) {
      if (typeof(this[prop]) == 'object') {
        length += this[prop].length;
        for (let i = 0; i < this[prop].length; i++) {
          sum += this[prop][i];
        } 
      }
    }
    return sum / length;
  }
}


const vasya = new StudentLog('Василий Васильев');

vasya.addGrade(3, 'algebra');
vasya.addGrade(3, 'algebra');
vasya.addGrade(2, 'algebra');
vasya.addGrade(3, 'algebra');

vasya.addGrade(5, 'geometry');
vasya.addGrade(4, 'geometry');
vasya.addGrade(8, 'geometry');
vasya.addGrade(4, 'geometry');

console.log(vasya.getTotalAverage());

















