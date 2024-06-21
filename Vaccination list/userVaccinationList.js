function loadVaccineData() {
    const vaccines = JSON.parse(localStorage.getItem('vaccines')) || [];
    const table = document.getElementById('vaccineTable').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // Clear existing rows
    vaccines.forEach(vaccine => {
        const newRow = table.insertRow();
        const nameCell = newRow.insertCell(0);
        const priceCell = newRow.insertCell(1);
        const companyCell = newRow.insertCell(2);
        const sideEffectsCell = newRow.insertCell(3);
        const variantCell = newRow.insertCell(4);

        nameCell.innerText = vaccine.name;
        priceCell.innerText = vaccine.price;
        companyCell.innerText = vaccine.company;
        sideEffectsCell.innerText = vaccine.sideEffects;
        variantCell.innerText = vaccine.variant;

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
