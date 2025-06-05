// When the page loads, say hi
window.onload = function() {
  alert('Welcome to my portfolio! Let’s build cool stuff 😎');
}

// Button to change message text
const button = document.getElementById('greet-btn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Have a nice day 🙌 My YouTube channel: @jade_pm';
});




