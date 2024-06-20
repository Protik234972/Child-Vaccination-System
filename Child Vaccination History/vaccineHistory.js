document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('vaccineForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const vaccineName = document.getElementById('vaccineName').value;
        const dateAdministered = document.getElementById('dateAdministered').value;
        const age = document.getElementById('age').value;
        const administeredBy = document.getElementById('administeredBy').value;
        const dose = document.getElementById('dose').value;
        const nextDueDate = document.getElementById('nextDueDate').value;
        const notes = document.getElementById('notes').value;
        const missedDoses = document.getElementById('missedDoses').value;

        // Create table row
        const table = document.getElementById('vaccineTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        // Insert cells into the new row
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);

        // Add values to the cells
        cell1.textContent = vaccineName;
        cell2.textContent = dateAdministered;
        cell3.textContent = age;
        cell4.textContent = administeredBy;
        cell5.textContent = dose;
        cell6.textContent = nextDueDate;
        cell7.textContent = notes;
        cell8.textContent = missedDoses;

        // Clear the form
        form.reset();

        // Optionally, you can display a success message or navigate to another page
        alert('Vaccination record added successfully!');
        window.location.href = '../Child Vaccination History/childHistoryData.html'; // Redirect to history page
    });
});
