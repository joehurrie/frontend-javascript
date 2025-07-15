// Task 5 – Interfaces and Conditional Instantiation

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Sample logs
console.log(createEmployee(200));      // Teacher instance
console.log(createEmployee(1000));     // Director instance
console.log(createEmployee('$500'));   // Director instance

// Task 6 – Type Predicate & Conditional Execution

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

// Logs for testing
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks

// Task 7 – String Literal Types

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math'
    ? 'Teaching Math'
    : 'Teaching History';
}

// Sample output
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History

// Add HTML table injection logic below your business logic
function renderEmployeeTable(): void {
  const employees: (Director | Teacher)[] = [
    createEmployee(200),
    createEmployee(1000),
    createEmployee('$500'),
  ];

  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  // Create table header
  const header = table.insertRow();
  ['Role', 'Work From Home', 'Coffee Break', 'Task Execution'].forEach((title) => {
    const th = document.createElement('th');
    th.innerText = title;
    th.style.border = '1px solid #333';
    th.style.padding = '8px';
    th.style.backgroundColor = '#f4f4f4';
    header.appendChild(th);
  });

  employees.forEach((emp) => {
    const row = table.insertRow();
    const role = isDirector(emp) ? 'Director' : 'Teacher';

    const workFromHome = emp.workFromHome();
    const coffeeBreak = emp.getCoffeeBreak();
    const task = executeWork(emp);

    [role, workFromHome, coffeeBreak, task].forEach((text) => {
      const td = document.createElement('td');
      td.innerText = text;
      td.style.border = '1px solid #ccc';
      td.style.padding = '6px';
      row.appendChild(td);
    });
  });

  document.body.appendChild(table);
}

window.onload = () => {
  renderEmployeeTable();
  console.log(teachClass('Math'));    // Teaching Math
  console.log(teachClass('History')); // Teaching History
};
