// CLASSES

class Candidate {
  constructor(fullName, gender, age) {
    this.fullName = fullName;
    this.gender = gender;
    this.age = age;
  }

  getFullInfo() {
    let pronoun;
    let whatGender;
    this.gender === 'Female' ? whatGender = 'female' : whatGender = 'male';
    this.gender === 'Female' ? pronoun = 'she' : pronoun = 'he';
    console.log(`Candidate's name is ${this.fullName}, ${pronoun} is a ${whatGender}, and is ${this.age} years old`);
  }

  getCategory() {

  }

}

class UI {
  // set all functions for UI interactions

  addCandidate() {

  }

  removeCandidate() {

  }

  clearCandidates() {

  }

}

const jane = new Candidate('Jane Houston', 'Female', 25);

console.log(jane);
console.log(jane.getFullInfo());

// EVENT HANDLERS

