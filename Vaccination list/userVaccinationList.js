// Function to load vaccine data from local storage and display it
function loadVaccineData() {
    const vaccines = JSON.parse(localStorage.getItem('vaccines')) || [];
    const table = document.getElementById('vaccineTable').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // Clear existing rows
    vaccines.forEach(vaccine => {
        const newRow = table.insertRow();
        const nameCell = newRow.insertCell(0);
        const priceCell = newRow.insertCell(1);

        nameCell.innerText = vaccine.name;
        priceCell.innerText = vaccine.price;
        priceCell.className = 'price';
    });
}

// Load vaccine data on page load
document.addEventListener('DOMContentLoaded', loadVaccineData);


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
