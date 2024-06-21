window.onload = function() {
    const childDataArray = JSON.parse(localStorage.getItem('childData')) || [];

    childDataArray.forEach((childData, index) => {
        if (childData) {
            const table = document.getElementById('childTable');
            const row = table.insertRow(-1);

            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);
            const cell7 = row.insertCell(6);
            const cell8 = row.insertCell(7);

            cell1.innerHTML = childData.childName;
            cell2.innerHTML = childData.gender;
            cell3.innerHTML = childData.dob;
            cell4.innerHTML = childData.motherName;
            cell5.innerHTML = childData.address;
            cell6.innerHTML = childData.email;
            cell7.innerHTML = childData.mobile;

            // Add a "Remove" button to the row
            cell8.innerHTML = '<button class="remove-button">Remove</button>';

            // Add an event listener to the "Remove" button
            cell8.querySelector('.remove-button').addEventListener('click', function() {
                const confirmAction = confirm('Are you sure you want to remove this data?');

                if (confirmAction) {
                    // Remove the data from the array
                    childDataArray.splice(index, 1);

                    // Update the data in localStorage
                    localStorage.setItem('childData', JSON.stringify(childDataArray));

                    // Remove the row from the table
                    table.deleteRow(row.rowIndex);

                    alert('Data removed successfully!');
                }
            });
        }
    });
};