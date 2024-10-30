button = document.getElementById('nameButton');
 displayName = document.getElementById('displayName');

button.addEventListener('click', () => {

    const name = prompt("Please enter your name:");
    if (name) {
        Print.textContent = 'Hello,   Welcome to the site.';

    }
})

function displayMessage() {
    let image = document.getElementById("image2");
    image.classList.remove("image");
    image.classList.add("imageIncrease");
    console.log('Hello, Welcome to the site.');
}






function submitForm() {

    
    // Get the values from element
    const name = document.getElementById("name").value;
    const Email = document.getElementById("Email").value; 
    const message = document.getElementById("message").value;
    const Age = document.querySelector('input[name="Age"]:checked')?.value;
    const interest = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(el => el.value);
    const siteSeeing = document.getElementById("siteSeeing").value;

    // Check if required fields are filled
    if (!name ||!Email|| !message || !Age || interest.length === 0 || !siteSeeing) {
        alert("You need to fill out the missing information! Thank you!");
        return;
    }

    // Save to local storage given
    const formData = {
        name,
        Email,
        message,
        Age,
        interest,
        siteSeeing
        
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    // Confirmation to user
    alert("Your data has been saved locally!");
}







