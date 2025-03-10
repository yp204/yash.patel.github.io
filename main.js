document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.querySelector('input[placeholder="Full Name"]');
    const emailInput = document.querySelector('input[placeholder="Email Address"]');
    const mobileInput = document.querySelector('input[placeholder="Mobile Number"]');
    const messageInput = document.querySelector('textarea');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        // Create an object to store the form data
        const contactData = {
            name: nameInput.value,
            email: emailInput.value,
            mobile: mobileInput.value,
            message: messageInput.value
        };

        // Save the data to Local Storage
        localStorage.setItem('contactData', JSON.stringify(contactData));

        // Show a confirmation message
        alert('Your message has been saved!');

        // Clear the form inputs
        nameInput.value = '';
        emailInput.value = '';
        mobileInput.value = '';
        messageInput.value = '';
    });
});


window.addEventListener('load', () => {
    const savedData = localStorage.getItem('contactData');
    if (savedData) {
        console.log('Retrieved Contact Data:', JSON.parse(savedData));
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents the form from actually submitting
        alert("Your message has been successfully sent!");
    });
});
