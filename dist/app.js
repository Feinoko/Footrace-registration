// CLASSES

class Candidate {
  constructor(fullName, gender, age, experience) {
    this.fullName = fullName;
    this.gender = gender;
    this.age = age;
    this.experience = experience;
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

// EVENT HANDLERS

const genderSelection = document.getElementById('gender');

// Adding a candidate (submitting the form)
document.querySelector('form').addEventListener('submit', function(e) {
  const candidate = new Candidate();
  
  // getting the candidate's full name
  candidate.fullName = document.getElementById('fullname').value;
  console.log(candidate.fullName);
  
  // getting the candidate's gender
  const ELgenderSelection = document.getElementById('gender');
  // iterating thru each option to find the one that is selected, then assigning its value to candidate.gender
  for (let i = 0; i < ELgenderSelection.options.length; i++) {
    if (ELgenderSelection.options[i].selected) {
      candidate.gender = ELgenderSelection.options[i].value;
    }
  }
  console.log(candidate.gender);
  
  // getting candidate's age
  candidate.age = document.getElementById('age').value;
  console.log(candidate.age);

  // getting candidate's experience level
  // getting experience input element
  const ELxp = document.getElementById('experience');
  for (let i = 0; i < ELxp.options.length; i++) {
    if (ELxp.options[i].selected) {
      candidate.experience = ELxp.options[i].text;
    }
  }
  console.log(candidate.experience);
  
  console.log(candidate);

  // clearing inputs
  document.getElementById('fullname').value = '';
  ELgenderSelection.options[0].selected = true;
  document.getElementById('age').value = '';
  ELxp.options[0].selected = true;

  e.preventDefault();
});


