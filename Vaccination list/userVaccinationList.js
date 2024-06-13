// function loadVaccines() {
//     const vaccines = JSON.parse(localStorage.getItem('vaccines')) || {};
//     const table = document.getElementById("vaccineTable").getElementsByTagName('tbody')[0];
//     for (let [name, price] of Object.entries(vaccines)) {
//         let row = table.insertRow();
//         row.insertCell(0).innerText = name;
//         row.insertCell(1).innerText = price;
//     }
// }

// document.addEventListener("DOMContentLoaded", loadVaccines);
