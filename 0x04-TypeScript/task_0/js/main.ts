interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Joe',
  lastName: 'Hurrie',
  age: 22,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Liam',
  lastName: 'Omondi',
  age: 25,
  location: 'Mombasa',
};

const studentsList: Student[] = [student1, student2];

// Create the HTML table
const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.width = '50%';

// Add header row
const headerRow = table.insertRow();
['First Name', 'Location'].forEach((text) => {
  const th = document.createElement('th');
  th.textContent = text;
  th.style.border = '1px solid black';
  th.style.padding = '8px';
  headerRow.appendChild(th);
});

// Populate rows from studentsList
studentsList.forEach((student) => {
  const row = table.insertRow();

  const firstNameCell = row.insertCell();
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = '1px solid black';
  firstNameCell.style.padding = '8px';

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
  locationCell.style.border = '1px solid black';
  locationCell.style.padding = '8px';
});

// Append table to the document body
document.body.appendChild(table);
