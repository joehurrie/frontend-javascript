/// <reference path="./js/subjects/Teacher.ts" />
/// <reference path="./js/subjects/Subject.ts" />
/// <reference path="./js/subjects/Cpp.ts" />
/// <reference path="./js/subjects/React.ts" />
/// <reference path="./js/subjects/Java.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}

// Test output
const major1: MajorCredits = { credits: 40, brand: 'major' };
const major2: MajorCredits = { credits: 20, brand: 'major' };
console.log(sumMajorCredits(major1, major2)); // { credits: 60, brand: 'major' }

const minor1: MinorCredits = { credits: 5, brand: 'minor' };
const minor2: MinorCredits = { credits: 10, brand: 'minor' };
console.log(sumMinorCredits(minor1, minor2)); // { credits: 15, brand: 'minor' }
