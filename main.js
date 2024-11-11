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






