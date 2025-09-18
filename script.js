// script.js

// Feature 1: Alert button click
const alertBtn = document.getElementById('alertBtn');
alertBtn.addEventListener('click', function() {
    alert('Button clicked!');
});

// Feature 2: Change background color on hover
const section = document.getElementById('interactive-section');
section.addEventListener('mouseover', function() {
    section.style.backgroundColor = '#f0f0f0';
});
section.addEventListener('mouseout', function() {
    section.style.backgroundColor = '';
});

// Custom form validation
const form = document.getElementById('customForm');
form.addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();

    let messages = [];
    if(username === '') {
        messages.push('Username is required.');
    }
    if(email === '' || !email.includes('@')) {
        messages.push('Valid email is required.');
    }

    if(messages.length > 0) {
        event.preventDefault(); // prevent form submission
        alert(messages.join('\n'));
    }
});
