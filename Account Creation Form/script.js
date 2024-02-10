document.getElementById('form').onsubmit = function (e) {
  e.preventDefault();
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  console.log("Username: " + username.value + '\n' + "Email: " + email.value + '\n' + "Password: " + password.value);
};

