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

eval("{\n// Utility: Create a styled table with headers\nfunction createTable(headers) {\n    const table = document.createElement('table');\n    table.style.borderCollapse = 'collapse';\n    table.style.width = '60%';\n    table.style.marginBottom = '30px';\n    table.style.marginTop = '20px';\n    const headerRow = table.insertRow();\n    headers.forEach(text => {\n        const th = document.createElement('th');\n        th.textContent = text;\n        th.style.border = '1px solid black';\n        th.style.padding = '8px';\n        headerRow.appendChild(th);\n    });\n    return table;\n}\n// 🎓 Setup teacher and director tables\nconst teacherTable = createTable(['Full Name', 'Location']);\nconst directorTable = createTable(['Full Name', 'Location', 'Reports']);\ndocument.body.appendChild(teacherTable);\ndocument.body.appendChild(directorTable);\n// 🧾 Create registration form\nconst form = document.createElement('form');\nform.innerHTML = `\r\n  <select id=\"role\" required>\r\n    <option value=\"Teacher\">Teacher</option>\r\n    <option value=\"Director\">Director</option>\r\n  </select>\r\n  <input type=\"text\" id=\"firstName\" placeholder=\"First Name\" required />\r\n  <input type=\"text\" id=\"lastName\" placeholder=\"Last Name\" required />\r\n  <input type=\"text\" id=\"location\" placeholder=\"Location\" required />\r\n  <input type=\"number\" id=\"reports\" placeholder=\"Number of Reports (for Director only)\" />\r\n  <button type=\"submit\">Add User</button>\r\n`;\nform.style.marginTop = '20px';\nform.style.marginBottom = '20px';\nform.style.display = 'flex';\nform.style.flexWrap = 'wrap';\nform.style.gap = '10px';\ndocument.body.insertBefore(form, teacherTable);\n// 💡 Append Teacher Row\nfunction appendTeacher(teacher) {\n    const row = teacherTable.insertRow();\n    row.innerHTML = `\r\n    <td style=\"border: 1px solid black; padding: 8px;\">${teacher.firstName} ${teacher.lastName}</td>\r\n    <td style=\"border: 1px solid black; padding: 8px;\">${teacher.location}</td>\r\n  `;\n}\n// 💼 Append Director Row\nfunction appendDirector(director) {\n    const row = directorTable.insertRow();\n    row.innerHTML = `\r\n    <td style=\"border: 1px solid black; padding: 8px;\">${director.firstName} ${director.lastName}</td>\r\n    <td style=\"border: 1px solid black; padding: 8px;\">${director.location}</td>\r\n    <td style=\"border: 1px solid black; padding: 8px;\">${director.numberOfReports}</td>\r\n  `;\n}\n// 🧠 Handle Form Submission\nform.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const role = document.getElementById('role').value;\n    const firstName = document.getElementById('firstName').value.trim();\n    const lastName = document.getElementById('lastName').value.trim();\n    const location = document.getElementById('location').value.trim();\n    const reportsStr = document.getElementById('reports').value.trim();\n    if (!firstName || !lastName || !location || !role) {\n        alert('Please fill in all required fields.');\n        return;\n    }\n    if (role === 'Director') {\n        if (!reportsStr) {\n            alert('Directors require number of reports.');\n            return;\n        }\n        const director = {\n            firstName,\n            lastName,\n            location,\n            fullTimeEmployee: true,\n            numberOfReports: parseInt(reportsStr),\n        };\n        appendDirector(director);\n    }\n    else {\n        const teacher = {\n            firstName,\n            lastName,\n            location,\n            fullTimeEmployee: true,\n        };\n        appendTeacher(teacher);\n    }\n    form.reset();\n});\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

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