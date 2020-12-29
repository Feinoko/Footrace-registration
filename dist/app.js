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
    console.log(`Candidate's name is ${this.fullName}, ${pronoun} is a ${whatGender}, and is ${this.age} years old`); //d
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

  loadCandidates() {
    
  }

}

// EVENT HANDLERS

// loading all existing candidates from local memory
  window.onload = function() {
    // assigning memorized candidates to local var
    let candidates = JSON.parse(localStorage.getItem('candidates'));
    // if memory is void, skip, otherwise create a table row for each candidate in memory
    if (candidates !== null) {
      candidates.forEach(function(candidate) {
        const row = document.createElement('tr');
        row.className = "text-center";
        row.innerHTML = `
        <td>${candidate.fullName}</td>
        <td>${candidate.gender}</td>
        <td>${candidate.age}</td>
        <td>${candidate.experience}</td>
        <td><span class="bg-red-400 text-xs p-0.5">Gents/Long</span></td>
        `;
        document.getElementById('candidatesTable').appendChild(row);
      })
    } else { //d
      console.log('memory is void');
    }
  }

// Adding a candidate (submitting the form)
document.querySelector('form').addEventListener('submit', function(e) {
  const candidate = new Candidate();
  
  // getting the candidate's full name
  candidate.fullName = document.getElementById('fullname').value;
  console.log(candidate.fullName); //d
  
  // getting the candidate's gender
  const ELgenderSelection = document.getElementById('gender');
  // iterating thru each option to find the one that is selected, then assigning its value to candidate.gender
  for (let i = 0; i < ELgenderSelection.options.length; i++) {
    if (ELgenderSelection.options[i].selected) {
      candidate.gender = ELgenderSelection.options[i].value;
    }
  }
  console.log(candidate.gender); //d
  
  // getting candidate's age
  candidate.age = document.getElementById('age').value;
  console.log(candidate.age); //d

  // getting candidate's experience level
  // getting experience input element
  const ELxp = document.getElementById('experience');
  for (let i = 0; i < ELxp.options.length; i++) {
    if (ELxp.options[i].selected) {
      candidate.experience = ELxp.options[i].text;
    }
  }
  console.log(candidate.experience); //d
  
  console.log(candidate); //d

  // clearing inputs
  document.getElementById('fullname').value = '';
  ELgenderSelection.options[0].selected = true;
  document.getElementById('age').value = '';
  ELxp.options[0].selected = true;

  // adding table line with candidate's properties
  // creating the candidate row
  const row = document.createElement('tr');
  row.className = "text-center";
  row.innerHTML = `
  <td>${candidate.fullName}</td>
  <td>${candidate.gender}</td>
  <td>${candidate.age}</td>
  <td>${candidate.experience}</td>
  <td><span class="bg-red-400 text-xs p-0.5">Gents/Long</span></td>
  `;
  document.getElementById('candidatesTable').appendChild(row);

  // saving candidate data to local storage
  let candidates;
  localStorage.getItem('candidates') === null ? candidates = [] : candidates = JSON.parse(localStorage.getItem('candidates'));
  // set the task item into storage
  candidates.push(candidate);
  localStorage.setItem('candidates', JSON.stringify(candidates));

  e.preventDefault();
});

// manually removing candidates

