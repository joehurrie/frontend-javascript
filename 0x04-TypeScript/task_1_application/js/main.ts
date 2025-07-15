interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Create form
const form = document.createElement('form');
form.innerHTML = `
  <input type="text" id="firstName" placeholder="First Name" required />
  <input type="text" id="lastName" placeholder="Last Name" required />
  <input type="text" id="location" placeholder="Location" required />
  <input type="number" id="experience" placeholder="Years of Experience (optional)" />
  <input type="checkbox" id="contract" /> <label for="contract">Contract</label>
  <button type="submit">Add Teacher</button>
`;
form.style.marginBottom = '20px';
document.body.appendChild(form);

// Create table
const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.width = '60%';

const headerRow = table.insertRow();
['Full Name', 'Location'].forEach(header => {
  const th = document.createElement('th');
  th.textContent = header;
  th.style.border = '1px solid black';
  th.style.padding = '8px';
  headerRow.appendChild(th);
});
document.body.appendChild(table);

// Handle form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = (document.getElementById('firstName') as HTMLInputElement).value.trim();
  const lastName = (document.getElementById('lastName') as HTMLInputElement).value.trim();
  const location = (document.getElementById('location') as HTMLInputElement).value.trim();
  const experienceStr = (document.getElementById('experience') as HTMLInputElement).value.trim();
  const contract = (document.getElementById('contract') as HTMLInputElement).checked;

  if (!firstName || !lastName || !location) {
    alert('First name, last name, and location are required.');
    return;
  }

  const teacher: Teacher = {
    firstName,
    lastName,
    location,
    fullTimeEmployee: true,
    contract,
  };

  if (experienceStr) {
    teacher.yearsOfExperience = parseInt(experienceStr, 10);
  }

  // Append row
  const row = table.insertRow();
  const nameCell = row.insertCell();
  nameCell.textContent = `${teacher.firstName} ${teacher.lastName}`;
  nameCell.style.border = '1px solid black';
  nameCell.style.padding = '8px';

  const locCell = row.insertCell();
  locCell.textContent = teacher.location;
  locCell.style.border = '1px solid black';
  locCell.style.padding = '8px';

  form.reset();
});
