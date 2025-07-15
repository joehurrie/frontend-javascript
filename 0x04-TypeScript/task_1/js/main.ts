interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'Nairobi',
  contract: true,
};

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Mutua',
  fullTimeEmployee: true,
  location: 'Mombasa',
  numberOfReports: 10,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

console.log(printTeacher('John', 'Doe')); // Output: J. Doe

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass({ firstName: 'Amina', lastName: 'Kariuki' });
console.log(student.displayName()); // Output: Amina
console.log(student.workOnHomework()); // Output: Currently working
