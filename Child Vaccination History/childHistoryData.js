window.onload = function() {
    const vaccineData = JSON.parse(localStorage.getItem('vaccineData')) || [];

    vaccineData.forEach((data) => {
        const table = document.getElementById('childTable');
        const row = table.insertRow(-1); // Insert row at the end of the table

        // Add cells for each column
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        const cell8 = row.insertCell(7);
        const cell9 = row.insertCell(8);

        // Populate cells with data
        cell1.textContent = data.childName;
        cell2.textContent = data.age;
        cell3.textContent = data.gender;
        cell4.textContent = data.dose;
        cell5.textContent = data.dateAdministered;
        cell6.textContent = data.administeredBy;
        cell7.textContent = data.nextDueDate;
        cell8.textContent = data.notes;
        cell9.textContent = data.missedDoses;
    });
};
