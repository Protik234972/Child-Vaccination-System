// medicalRecord.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to calculate age in years, months, and days
    function calculateAge(dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years} years, ${months} months, and ${days} days`;
    }

    // Event listener to calculate and display age when date of birth is selected
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    if (dobInput && ageInput) {
        dobInput.addEventListener('input', function() {
            const dob = dobInput.value;
            if (dob) {
                ageInput.value = calculateAge(dob);
            } else {
                ageInput.value = '';
            }
        });
    }

    // Function to handle form submission for adding a new record
    const medicalForm = document.querySelector('.medical-form');
    if (medicalForm) {
        medicalForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(event.target);
            const record = {};
            formData.forEach((value, key) => {
                record[key] = value;
            });

            let records = JSON.parse(localStorage.getItem('medicalRecords')) || [];
            records.push(record);
            localStorage.setItem('medicalRecords', JSON.stringify(records));

            alert('Medical record added successfully!');
            event.target.reset();
            ageInput.value = '';

            // Redirect to the search record page to display the updated list of records
            window.location.href = '../MedicalHistoryData/SearchRecord.html';
        });
    }

    // Function to display records in a table
    function displayRecords() {
        const recordList = document.getElementById('record-list');
        const records = JSON.parse(localStorage.getItem('medicalRecords')) || [];
        recordList.innerHTML = '';

        if (records.length === 0) {
            recordList.innerHTML = '<p>No records found.</p>';
            return;
        }

        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        const tbody = table.querySelector('tbody');

        records.forEach((record, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${record['child-id']}</td>
                <td>${record['child-name']}</td>
                <td>${record['age']}</td>
                <td>${record['gender']}</td>
                <td>
                    <button onclick="viewRecord(${index})">View</button>
                    <button onclick="deleteRecord(${index})">Delete</button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        recordList.appendChild(table);
    }

    // Function to view a record
    window.viewRecord = function(index) {
        const records = JSON.parse(localStorage.getItem('medicalRecords')) || [];
        const record = records[index];

        alert(`
            Child's ID: ${record['child-id']}
            Child's Name: ${record['child-name']}
            Date of Birth: ${record['dob']}
            Age: ${record['age']}
            Gender: ${record['gender']}
            Mobile No.: ${record['mobile-no']}
            Number of Vaccines Taken: ${record['vaccine-count']}
            Names of Vaccines Taken: ${record['vaccine-names']}
            Medical History: ${record['medical-history']}
            Allergies: ${record['allergies']}
            Current Medications: ${record['medications']}
            Doctor's Name: ${record['doctor-name']}
            Doctor's Contact: ${record['doctor-contact']}
        `);
    };

    // Function to delete a record
    window.deleteRecord = function(index) {
        let records = JSON.parse(localStorage.getItem('medicalRecords')) || [];
        records.splice(index, 1);
        localStorage.setItem('medicalRecords', JSON.stringify(records));
        displayRecords();
    };

    // Initial call to display records on search record page
    if (document.getElementById('record-list')) {
        displayRecords();
    }
});
