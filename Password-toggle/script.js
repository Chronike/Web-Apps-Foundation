function togglePassword() {
  let passwordInput = document.getElementById("passwordInput");
  let toggleButton = document.getElementById("toggleButton");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Show Password";
  }
}
