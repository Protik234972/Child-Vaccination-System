// medicalRecord.js

document.addEventListener('DOMContentLoaded', () => {
    const medicalForm = document.getElementById('medical-form');
    const recordList = document.getElementById('record-list');
    const records = JSON.parse(localStorage.getItem('records')) || [];

    function calculateAge(dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths -= 1;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if (ageMonths < 0) {
            ageYears -= 1;
            ageMonths += 12;
        }

        return `${ageYears} years, ${ageMonths} months, ${ageDays} days`;
    }

    if (medicalForm) {
        const dobInput = document.getElementById('dob');
        const ageInput = document.getElementById('age');

        dobInput.addEventListener('change', () => {
            ageInput.value = calculateAge(dobInput.value);
        });

        medicalForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const newRecord = {
                id: document.getElementById('child-id').value,
                name: document.getElementById('child-name').value,
                dob: document.getElementById('dob').value,
                age: document.getElementById('age').value,
                gender: document.getElementById('gender').value,
                vaccineCount: document.getElementById('vaccine-count').value,
                vaccineNames: document.getElementById('vaccine-names').value,
                medicalHistory: document.getElementById('medical-history').value,
                allergies: document.getElementById('allergies').value,
                medications: document.getElementById('medications').value,
                doctorName: document.getElementById('doctor-name').value,
                doctorContact: document.getElementById('doctor-contact').value
            };

            records.push(newRecord);
            localStorage.setItem('records', JSON.stringify(records));
            alert('Medical record added successfully');
            medicalForm.reset();
            window.location.href = 'SearchRecord.html';
        });
    }

    if (recordList) {
        displayRecords(records);

        recordList.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-record')) {
                const recordId = e.target.dataset.id;
                const record = records.find(rec => rec.id === recordId);
                if (record) {
                    alert(`
                        Name: ${record.name}
                        DOB: ${record.dob}
                        Age: ${record.age}
                        Gender: ${record.gender}
                        Vaccines: ${record.vaccineCount} - ${record.vaccineNames}
                        Medical History: ${record.medicalHistory}
                        Allergies: ${record.allergies}
                        Current Medications: ${record.medications}
                        Doctor's Name: ${record.doctorName}
                        Doctor's Contact: ${record.doctorContact}
                    `);
                }
            } else if (e.target.classList.contains('delete-record')) {
                const recordId = e.target.dataset.id;
                const recordIndex = records.findIndex(rec => rec.id === recordId);
                if (recordIndex > -1) {
                    records.splice(recordIndex, 1);
                    localStorage.setItem('records', JSON.stringify(records));
                    displayRecords(records);
                    alert('Record deleted successfully');
                }
            }
        });
    }

    function displayRecords(records) {
        recordList.innerHTML = '';
        records.forEach(record => {
            const recordDiv = document.createElement('div');
            recordDiv.classList.add('record');
            recordDiv.innerHTML = `
                <span>${record.id} - ${record.name}</span>
                <div>
                    <button class="view-record" data-id="${record.id}">View Record</button>
                    <button class="delete-record" data-id="${record.id}">Delete Record</button>
                </div>
            `;
            recordList.appendChild(recordDiv);
        });
    }
});
