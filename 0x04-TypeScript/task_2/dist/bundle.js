/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\n// Task 5 – Interfaces and Conditional Instantiation\nclass Director {\n    workFromHome() {\n        return 'Working from home';\n    }\n    getCoffeeBreak() {\n        return 'Getting a coffee break';\n    }\n    workDirectorTasks() {\n        return 'Getting to director tasks';\n    }\n}\nclass Teacher {\n    workFromHome() {\n        return 'Cannot work from home';\n    }\n    getCoffeeBreak() {\n        return 'Cannot have a break';\n    }\n    workTeacherTasks() {\n        return 'Getting to work';\n    }\n}\nfunction createEmployee(salary) {\n    if (typeof salary === 'number' && salary < 500) {\n        return new Teacher();\n    }\n    return new Director();\n}\n// Sample logs\nconsole.log(createEmployee(200)); // Teacher instance\nconsole.log(createEmployee(1000)); // Director instance\nconsole.log(createEmployee('$500')); // Director instance\n// Task 6 – Type Predicate & Conditional Execution\nfunction isDirector(employee) {\n    return employee.workDirectorTasks !== undefined;\n}\nfunction executeWork(employee) {\n    if (isDirector(employee)) {\n        return employee.workDirectorTasks();\n    }\n    return employee.workTeacherTasks();\n}\n// Logs for testing\nconsole.log(executeWork(createEmployee(200))); // Getting to work\nconsole.log(executeWork(createEmployee(1000))); // Getting to director tasks\nfunction teachClass(todayClass) {\n    return todayClass === 'Math'\n        ? 'Teaching Math'\n        : 'Teaching History';\n}\n// Sample output\nconsole.log(teachClass('Math')); // Teaching Math\nconsole.log(teachClass('History')); // Teaching History\n// Add HTML table injection logic below your business logic\nfunction renderEmployeeTable() {\n    const employees = [\n        createEmployee(200),\n        createEmployee(1000),\n        createEmployee('$500'),\n    ];\n    const table = document.createElement('table');\n    table.style.borderCollapse = 'collapse';\n    table.style.width = '100%';\n    // Create table header\n    const header = table.insertRow();\n    ['Role', 'Work From Home', 'Coffee Break', 'Task Execution'].forEach((title) => {\n        const th = document.createElement('th');\n        th.innerText = title;\n        th.style.border = '1px solid #333';\n        th.style.padding = '8px';\n        th.style.backgroundColor = '#f4f4f4';\n        header.appendChild(th);\n    });\n    employees.forEach((emp) => {\n        const row = table.insertRow();\n        const role = isDirector(emp) ? 'Director' : 'Teacher';\n        const workFromHome = emp.workFromHome();\n        const coffeeBreak = emp.getCoffeeBreak();\n        const task = executeWork(emp);\n        [role, workFromHome, coffeeBreak, task].forEach((text) => {\n            const td = document.createElement('td');\n            td.innerText = text;\n            td.style.border = '1px solid #ccc';\n            td.style.padding = '6px';\n            row.appendChild(td);\n        });\n    });\n    document.body.appendChild(table);\n}\nwindow.onload = () => {\n    renderEmployeeTable();\n    console.log(teachClass('Math')); // Teaching Math\n    console.log(teachClass('History')); // Teaching History\n};\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;