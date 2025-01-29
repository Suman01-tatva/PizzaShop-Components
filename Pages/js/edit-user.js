const togglePassword = (input, icon) => {
  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "";
    icon.src = "./Assets/eye-open.png";
  } else {
    input.type = "password";
    icon.textContent = "";
    icon.src = "./Assets/eye-close.png";
  }
};
