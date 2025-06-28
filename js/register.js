document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Store data in localStorage
  const user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("userData", JSON.stringify(user));

  alert("Registration successful! Now you can login.");
  window.location.href = "login.html";
});
