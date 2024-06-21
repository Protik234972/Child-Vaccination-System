document.getElementById('vaccinationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const childName = document.getElementById('child-name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const dob = document.getElementById('date-of-birth').value;
    const mobile = document.getElementById('mobile-no').value;
    const vaccineName = document.getElementById('vaccineName').value;
    const dateAdministered = document.getElementById('dateAdministered').value;
    const age = document.getElementById('age').value;
    const administeredBy = document.getElementById('administeredBy').value;
    const dose = document.getElementById('dose').value;
    const nextDueDate = document.getElementById('nextDueDate').value;
    const notes = document.getElementById('notes').value;
    const missedDoses = document.getElementById('missedDoses').value;

    const vaccineData = {
        childName,
        gender,
        dob,
        mobile,
        vaccineName,
        dateAdministered,
        age,
        administeredBy,
        dose,
        nextDueDate,
        notes,
        missedDoses
    };

   // Retrieve the existing data from localStorage
   const existingData = JSON.parse(localStorage.getItem('vaccineData')) || [];

   // Add the new child data to the existing data
   existingData.push(vaccineData);

   // Store the updated data in localStorage
   localStorage.setItem('vaccineData', JSON.stringify(existingData));

   // Clear the form
   event.target.reset();

   // Show a notification
   alert('Successfully SUbmitted!');
});