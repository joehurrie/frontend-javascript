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

eval("{\n// Create form\nconst form = document.createElement('form');\nform.innerHTML = `\r\n  <input type=\"text\" id=\"firstName\" placeholder=\"First Name\" required />\r\n  <input type=\"text\" id=\"lastName\" placeholder=\"Last Name\" required />\r\n  <input type=\"text\" id=\"location\" placeholder=\"Location\" required />\r\n  <input type=\"number\" id=\"experience\" placeholder=\"Years of Experience (optional)\" />\r\n  <input type=\"checkbox\" id=\"contract\" /> <label for=\"contract\">Contract</label>\r\n  <button type=\"submit\">Add Teacher</button>\r\n`;\nform.style.marginBottom = '20px';\ndocument.body.appendChild(form);\n// Create table\nconst table = document.createElement('table');\ntable.style.borderCollapse = 'collapse';\ntable.style.width = '60%';\nconst headerRow = table.insertRow();\n['Full Name', 'Location'].forEach(header => {\n    const th = document.createElement('th');\n    th.textContent = header;\n    th.style.border = '1px solid black';\n    th.style.padding = '8px';\n    headerRow.appendChild(th);\n});\ndocument.body.appendChild(table);\n// Handle form submit\nform.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const firstName = document.getElementById('firstName').value.trim();\n    const lastName = document.getElementById('lastName').value.trim();\n    const location = document.getElementById('location').value.trim();\n    const experienceStr = document.getElementById('experience').value.trim();\n    const contract = document.getElementById('contract').checked;\n    if (!firstName || !lastName || !location) {\n        alert('First name, last name, and location are required.');\n        return;\n    }\n    const teacher = {\n        firstName,\n        lastName,\n        location,\n        fullTimeEmployee: true,\n        contract,\n    };\n    if (experienceStr) {\n        teacher.yearsOfExperience = parseInt(experienceStr, 10);\n    }\n    // Append row\n    const row = table.insertRow();\n    const nameCell = row.insertCell();\n    nameCell.textContent = `${teacher.firstName} ${teacher.lastName}`;\n    nameCell.style.border = '1px solid black';\n    nameCell.style.padding = '8px';\n    const locCell = row.insertCell();\n    locCell.textContent = teacher.location;\n    locCell.style.border = '1px solid black';\n    locCell.style.padding = '8px';\n    form.reset();\n});\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

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