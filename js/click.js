const spotlight = document.getElementById('spotlight');
const content = document.getElementById('content');

// Function to toggle the spotlight effect
function toggleSpotlight() {
    if (spotlight.style.display === 'none' || spotlight.style.display === '') {
        spotlight.style.display = 'block';
        content.style.display = 'none';
    } else {
        spotlight.style.display = 'none';
        content.style.display = 'block';
    }
}

// Add a click event listener to the body to toggle the spotlight effect
document.body.addEventListener('click', toggleSpotlight);
