document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Get stored user data
  const storedUser = JSON.parse(localStorage.getItem("userData"));

  if (!storedUser) {
    alert("No user found. Please register first.");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("Login successful!");
    window.location.href = "index.html"; // Redirect after login
  } else {
    alert("Invalid email or password.");
  }
});
