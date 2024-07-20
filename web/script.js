const signupForm = document.getElementById('signupForm');
const messageDiv = document.getElementById('message');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Basic validation
  if (username === '' || email === '' || password === '') {
    showMessage('Please fill in all fields.', 'error');
    return;
  }

  // Save user input using localStorage
  saveUserData(username, email, password);

  // Display success message
  showMessage('Sign up successful!', 'success');

  // Clear form fields
  signupForm.reset();
});

function saveUserData(username, email, password) {
  // Construct an object with user data
  const userData = {
    username: username,
    email: email,
    password: password
  };

  // Convert the object to a JSON string
  const userDataJSON = JSON.stringify(userData);

  // Save the JSON string to localStorage
  localStorage.setItem('userData', userDataJSON);
}

function showMessage(message, type) {
  messageDiv.textContent = message;
  messageDiv.className = type; // 'error' or 'success' for styling
}
