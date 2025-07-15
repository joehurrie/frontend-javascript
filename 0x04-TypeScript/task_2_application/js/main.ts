interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Utility: Create a styled table with headers
function createTable(headers: string[]): HTMLTableElement {
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '60%';
  table.style.marginBottom = '30px';
  table.style.marginTop = '20px';

  const headerRow = table.insertRow();
  headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    th.style.border = '1px solid black';
    th.style.padding = '8px';
    headerRow.appendChild(th);
  });

  return table;
}

// 🎓 Setup teacher and director tables
const teacherTable = createTable(['Full Name', 'Location']);
const directorTable = createTable(['Full Name', 'Location', 'Reports']);
document.body.appendChild(teacherTable);
document.body.appendChild(directorTable);

// 🧾 Create registration form
const form = document.createElement('form');
form.innerHTML = `
  <select id="role" required>
    <option value="Teacher">Teacher</option>
    <option value="Director">Director</option>
  </select>
  <input type="text" id="firstName" placeholder="First Name" required />
  <input type="text" id="lastName" placeholder="Last Name" required />
  <input type="text" id="location" placeholder="Location" required />
  <input type="number" id="reports" placeholder="Number of Reports (for Director only)" />
  <button type="submit">Add User</button>
`;
form.style.marginTop = '20px';
form.style.marginBottom = '20px';
form.style.display = 'flex';
form.style.flexWrap = 'wrap';
form.style.gap = '10px';
document.body.insertBefore(form, teacherTable);

// 💡 Append Teacher Row
function appendTeacher(teacher: Teacher): void {
  const row = teacherTable.insertRow();
  row.innerHTML = `
    <td style="border: 1px solid black; padding: 8px;">${teacher.firstName} ${teacher.lastName}</td>
    <td style="border: 1px solid black; padding: 8px;">${teacher.location}</td>
  `;
}

// 💼 Append Director Row
function appendDirector(director: Directors): void {
  const row = directorTable.insertRow();
  row.innerHTML = `
    <td style="border: 1px solid black; padding: 8px;">${director.firstName} ${director.lastName}</td>
    <td style="border: 1px solid black; padding: 8px;">${director.location}</td>
    <td style="border: 1px solid black; padding: 8px;">${director.numberOfReports}</td>
  `;
}

// 🧠 Handle Form Submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const role = (document.getElementById('role') as HTMLSelectElement).value;
  const firstName = (document.getElementById('firstName') as HTMLInputElement).value.trim();
  const lastName = (document.getElementById('lastName') as HTMLInputElement).value.trim();
  const location = (document.getElementById('location') as HTMLInputElement).value.trim();
  const reportsStr = (document.getElementById('reports') as HTMLInputElement).value.trim();

  if (!firstName || !lastName || !location || !role) {
    alert('Please fill in all required fields.');
    return;
  }

  if (role === 'Director') {
    if (!reportsStr) {
      alert('Directors require number of reports.');
      return;
    }

    const director: Directors = {
      firstName,
      lastName,
      location,
      fullTimeEmployee: true,
      numberOfReports: parseInt(reportsStr),
    };

    appendDirector(director);
  } else {
    const teacher: Teacher = {
      firstName,
      lastName,
      location,
      fullTimeEmployee: true,
    };

    appendTeacher(teacher);
  }

  form.reset();
});
