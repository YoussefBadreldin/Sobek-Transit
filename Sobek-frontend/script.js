const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if username and password are correct
  if (username === "soliman" && password === "soliman") {
    // Redirect to index.html
    window.location.href = "homepage.html";
  } else {
    alert("Incorrect username or password.");
  }
});
