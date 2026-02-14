// script.js

// Function to display welcome message
function displayWelcome() {
    const welcomeMessage = 'Welcome to ClipArena!';
    document.getElementById('welcome').innerText = welcomeMessage;
}

// Function to handle role selection
function selectRole(role) {
    // Implement role selection logic here
    console.log(`Selected role: ${role}`);
}

// Function to navigate between sections
function navigateTo(section) {
    const sections = ['Flux', 'Classement'];
    sections.forEach(s => {
        document.getElementById(s).style.display = (s === section) ? 'block' : 'none';
    });
}

// Event listeners for role selection and navigation
document.getElementById('roleAdmin').addEventListener('click', () => selectRole('Admin'));
document.getElementById('roleUser').addEventListener('click', () => selectRole('User'));
document.getElementById('navFlux').addEventListener('click', () => navigateTo('Flux'));
document.getElementById('navClassement').addEventListener('click', () => navigateTo('Classement'));

// Call displayWelcome on page load
window.onload = displayWelcome;