const students = [];

const firstNames = [
  'Bob', 'Bill', 'Joe', 'John', 
  'Max', 'Kevin', 'Sue', 'Mary', 
  'Sandy', 'Jennifer', 'Olivia', 
  'Sam', 'Ben', 'Jim', 'Sally'
]
const lastNames = [
  'Jones', 'Smith', 'Johnson', 'Lee', 
  'Manning', 'Trump', 'Ford', 'Carter', 
  'Wilson', 'Jefferson', 'Roosevelt', 
  'Kennedy', 'Bush', 'Lincoln', 'Nixon'
]

while (students.length < 60) {
  var first = firstNames[Math.floor(Math.random() * firstNames.length)];
  var last = lastNames[Math.floor(Math.random() * lastNames.length)];
  if (!JSON.stringify(students).includes(JSON.stringify(`${first} ${last}`))) {
    students.push({
      name: `${first} ${last}`, 
      campusId:  Math.floor((students.length) / 20) + 1
    });
  }
}

export default students;