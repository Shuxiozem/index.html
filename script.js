function toggle(button) {
  button.classList.toggle("active");

  if (button.classList.contains("active")) {
    button.textContent = "ON";
  } else {
    button.textContent = "OFF";
  }
}

function launchDemo() {
  document.getElementById("status").textContent =
    "STATUS: DEMO RUNNING";
}
