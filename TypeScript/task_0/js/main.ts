interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {firstName: 'John', lastName: 'Doe', age: 27, location: 'Someplace'};

const student2: Student = { firstName: 'Joe', lastName: 'Average', age: 24, location: 'Somewhere'};

const studentsList: Student[] = [student1, student2];

const studentsTable = document.createElement('table');
const headerRow = document.createElement('tr');
headerRow.innerHTML = '<th>First Name</th><th>Location</th>';
studentsTable.appendChild(headerRow);

studentsList.forEach(student => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);

  studentsTable.appendChild(row);
});

document.body.appendChild(studentsTable);
