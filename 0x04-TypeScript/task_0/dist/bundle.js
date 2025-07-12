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

eval("{\nconst student1 = {\n    firstName: 'Nia',\n    lastName: 'Kariuki',\n    age: 22,\n    location: 'Nairobi',\n};\nconst student2 = {\n    firstName: 'Liam',\n    lastName: 'Omondi',\n    age: 25,\n    location: 'Mombasa',\n};\nconst studentsList = [student1, student2];\n// Create the HTML table\nconst table = document.createElement('table');\ntable.style.borderCollapse = 'collapse';\ntable.style.width = '50%';\n// Add header row\nconst headerRow = table.insertRow();\n['First Name', 'Location'].forEach((text) => {\n    const th = document.createElement('th');\n    th.textContent = text;\n    th.style.border = '1px solid black';\n    th.style.padding = '8px';\n    headerRow.appendChild(th);\n});\n// Populate rows from studentsList\nstudentsList.forEach((student) => {\n    const row = table.insertRow();\n    const firstNameCell = row.insertCell();\n    firstNameCell.textContent = student.firstName;\n    firstNameCell.style.border = '1px solid black';\n    firstNameCell.style.padding = '8px';\n    const locationCell = row.insertCell();\n    locationCell.textContent = student.location;\n    locationCell.style.border = '1px solid black';\n    locationCell.style.padding = '8px';\n});\n// Append table to the document body\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

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