button = document.getElementById('nameButton');
 displayName = document.getElementById('displayName');

button.addEventListener('click', () => {

    const name = prompt("Please enter your name:");
    if (name) {
        Print.textContent = 'Hello,   Welcome to the site' +" "+ name;

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


function decreaseText() {
    const textElements = document.querySelectorAll('#large');
    textElements.forEach(element => {
        const currentSize = window.getComputedStyle(element).fontSize;
        const newSize = parseFloat(currentSize) - 5;
        element.style.fontSize = newSize + 'px';
    });
}






    function changeTextColor() {
        const elements = document.querySelectorAll('#large');
        elements.forEach(function(element) {
          element.style.color = 'pink';
        });
    }

    function changeBackgroundColor() {
        const background = document.getElementById('Background');
        const colors = ['black'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        background.style.background = randomColor;
    }






    
    function resetTextColor() {
        const elements = document.querySelectorAll('#large');
        elements.forEach(function(element) {
            element.style.color = '';
        });
    }
    

function playPause()
{

    const video = document.getElementById("video1");
    if (video.paused)
        video.play();
    else
        video.pause();
}

function makeBig() 
{
    const video = document.getElementById("video1");
    video.width = 600;
    video.height = 500;
}

function makeSmall() 
{
    const video = document.getElementById("video1");
    video.width = 320;
    video.height = 100;
}


function makeNormal() 
{
    const video = document.getElementById("video1");
    video.width = 420;
    video.height = 250;
}
