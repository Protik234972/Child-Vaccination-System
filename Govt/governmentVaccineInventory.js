// Function to update the price of a vaccine
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

// Function to add a new vaccine or update the price if it already exists
function addVaccine(event) {
    event.preventDefault();
    const vaccineName = document.getElementById("vaccineName").value.trim();
    const vaccinePrice = document.getElementById("vaccinePrice").value.trim();

    if (vaccineName && vaccinePrice) {
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
            // Update the existing vaccine price
            existingRow.cells[1].innerText = vaccinePrice;
        } else {
            // Add a new vaccine
            const newRow = table.insertRow();
            const nameCell = newRow.insertCell(0);
            const priceCell = newRow.insertCell(1);
            const actionCell = newRow.insertCell(2);

            nameCell.innerText = vaccineName;
            priceCell.innerText = vaccinePrice;
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

// Function to save vaccine data to local storage
function saveVaccineData() {
    const rows = document.querySelectorAll('#vaccineTable tbody tr');
    const vaccines = Array.from(rows).map(row => {
        return {
            name: row.cells[0].innerText,
            price: row.cells[1].innerText
        };
    });
    localStorage.setItem('vaccines', JSON.stringify(vaccines));
}

// Function to load vaccine data from local storage
function loadVaccineData() {
    const vaccines = JSON.parse(localStorage.getItem('vaccines')) || [];
    const table = document.getElementById('vaccineTable').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // Clear existing rows
    vaccines.forEach(vaccine => {
        const newRow = table.insertRow();
        const nameCell = newRow.insertCell(0);
        const priceCell = newRow.insertCell(1);
        const actionCell = newRow.insertCell(2);

        nameCell.innerText = vaccine.name;
        priceCell.innerText = vaccine.price;
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



// function updatePrice(button) {
//     const priceCell = button.parentElement.previousElementSibling;
//     const currentPrice = priceCell.innerText;
//     const newPrice = prompt("Enter new price:", currentPrice);
//     if (newPrice !== null && newPrice !== "") {
//         priceCell.innerText = newPrice;
//     }
// }

// function addVaccine(event) {
//     event.preventDefault();
//     const vaccineName = document.getElementById("vaccineName").value;
//     const vaccinePrice = document.getElementById("vaccinePrice").value;

//     if (vaccineName && vaccinePrice) {
//         const table = document.getElementById("vaccineTable").getElementsByTagName('tbody')[0];
//         const newRow = table.insertRow();

//         const nameCell = newRow.insertCell(0);
//         const priceCell = newRow.insertCell(1);
//         const actionCell = newRow.insertCell(2);

//         nameCell.innerText = vaccineName;
//         priceCell.innerText = vaccinePrice;
//         priceCell.className = "price";
        
//         const updateButton = document.createElement("button");
//         updateButton.className = "update-btn";
//         updateButton.innerText = "Update Price";
//         updateButton.setAttribute("onclick", "updatePrice(this)");
//         actionCell.appendChild(updateButton);

//         document.getElementById("addVaccineForm").reset();
//     }
// }

