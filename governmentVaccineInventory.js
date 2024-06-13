function updatePrice(button) {
    const priceCell = button.parentElement.previousElementSibling;
    const currentPrice = priceCell.innerText;
    const newPrice = prompt("Enter new price:", currentPrice);
    if (newPrice !== null && newPrice !== "") {
        priceCell.innerText = newPrice;
    }
}

function addVaccine(event) {
    event.preventDefault();
    const vaccineName = document.getElementById("vaccineName").value;
    const vaccinePrice = document.getElementById("vaccinePrice").value;

    if (vaccineName && vaccinePrice) {
        const table = document.getElementById("vaccineTable").getElementsByTagName('tbody')[0];
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

        document.getElementById("addVaccineForm").reset();
    }
}
