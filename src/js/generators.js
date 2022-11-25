const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Маг',
  type: 'Magician',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char3 = {
  name: 'Демон',
  type: 'Daemon',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char4 = {
  name: 'Воин',
  type: 'Warrior',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char5 = {
  name: 'Палладин',
  type: 'Palladin',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const persons = [char, char2, char3, char4, char5];

class Team {
  constructor(persons) {
    this.persons = persons;
    this.cid = 0;
  }

  * [Symbol.iterator]() {
    while (this.cid < this.persons.length) { yield this.persons[this.cid + 1]; }
    this.cid = 0;
  }
}

const team = new Team(persons);
// console.log([...team]);
