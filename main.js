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


// Function to display alt text 
function showAltText(elementId) {
    const element = document.getElementById(elementId);
    let altText;
  
    // Making the alert 
    if (element.tagName === 'IMG') {
      altText = element.alt;
   
    alert(` ${altText}`);
  }
  
}

// Function to Increase the text Size
function enlargeText() {
    const textElements = document.querySelectorAll('#large');
    textElements.forEach(element => {
        const currentSize = window.getComputedStyle(element).fontSize;
        const newSize = parseFloat(currentSize) + 5;
        element.style.fontSize = newSize + 'px';
    });
}


