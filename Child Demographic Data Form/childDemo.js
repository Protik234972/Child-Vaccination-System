document.getElementById('form-pading').addEventListener('submit', function(event) {
    event.preventDefault();

    const childName = document.getElementById('child-name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const dob = document.getElementById('date-of-birth').value;
    const motherName = document.getElementById('mother-name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile-no').value;

    const childData = {
        childName,
        gender,
        dob,
        motherName,
        address,
        email,
        mobile
    };

    // Retrieve the existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem('childData')) || [];

    // Add the new child data to the existing data
    existingData.push(childData);

    // Store the updated data in localStorage
    localStorage.setItem('childData', JSON.stringify(existingData));

    // Clear the form
    event.target.reset();

    // Show a notification
    alert('Successfully registered!');
});