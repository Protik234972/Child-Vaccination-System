function updatePrice(button) {
    const row = button.parentElement.parentElement;
    const priceCell = row.cells[1];
    const currentPrice = priceCell.innerText;
    const newPrice = prompt("Enter new price:", currentPrice);
    if (newPrice !== null && newPrice !== "") {
        priceCell.innerText = newPrice;
        saveVaccineData();
    }
}

function addVaccine(event) {
    event.preventDefault();
    const vaccineName = document.getElementById("vaccineName").value.trim();
    const vaccinePrice = document.getElementById("vaccinePrice").value.trim();
    const vaccineCompany = document.getElementById("vaccineCompany").value.trim();
    const vaccineSideEffects = document.getElementById("vaccineSideEffects").value.trim();
    const vaccineVariant = document.getElementById("vaccineVariant").value.trim();

    if (vaccineName && vaccinePrice && vaccineCompany && vaccineSideEffects && vaccineVariant) {
        const table = document.getElementById("vaccineTable").getElementsByTagName('tbody')[0];
        let existingRow = null;

        // Check if the vaccine already exists
        for (let i = 0; i < table.rows.length; i++) {
            if (table.rows[i].cells[0].innerText === vaccineName) {
                existingRow = table.rows[i];
                break;
            }
        }

        if (existingRow) {
            // Update the existing vaccine data
            existingRow.cells[1].innerText = vaccinePrice;
            existingRow.cells[2].innerText = vaccineCompany;
            existingRow.cells[3].innerText = vaccineSideEffects;
            existingRow.cells[4].innerText = vaccineVariant;
        } else {
            // Add a new vaccine
            const newRow = table.insertRow();
            const nameCell = newRow.insertCell(0);
            const priceCell = newRow.insertCell(1);
            const companyCell = newRow.insertCell(2);
            const sideEffectsCell = newRow.insertCell(3);
            const variantCell = newRow.insertCell(4);
            const actionCell = newRow.insertCell(5);

            nameCell.innerText = vaccineName;
            priceCell.innerText = vaccinePrice;
            companyCell.innerText = vaccineCompany;
            sideEffectsCell.innerText = vaccineSideEffects;
            variantCell.innerText = vaccineVariant;

            priceCell.className = "price";

            const updateButton = document.createElement("button");
            updateButton.className = "update-btn";
            updateButton.innerText = "Update Price";
            updateButton.setAttribute("onclick", "updatePrice(this)");
            actionCell.appendChild(updateButton);
        }

        document.getElementById("addVaccineForm").reset();
        saveVaccineData();
    }
}

function saveVaccineData() {
    const rows = document.querySelectorAll('#vaccineTable tbody tr');
    const vaccines = Array.from(rows).map(row => {
        return {
            name: row.cells[0].innerText,
            price: row.cells[1].innerText,
            company: row.cells[2].innerText,
            sideEffects: row.cells[3].innerText,
            variant: row.cells[4].innerText
        };
    });
    localStorage.setItem('vaccines', JSON.stringify(vaccines));
}

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
        const actionCell = newRow.insertCell(5);

        nameCell.innerText = vaccine.name;
        priceCell.innerText = vaccine.price;
        companyCell.innerText = vaccine.company;
        sideEffectsCell.innerText = vaccine.sideEffects;
        variantCell.innerText = vaccine.variant;

        priceCell.className = 'price';

        const updateButton = document.createElement('button');
        updateButton.className = 'update-btn';
        updateButton.innerText = 'Update Price';
        updateButton.setAttribute('onclick', 'updatePrice(this)');
        actionCell.appendChild(updateButton);
    });
}

// Load vaccine data on page load
document.addEventListener('DOMContentLoaded', loadVaccineData);
