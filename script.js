function playKeySound() {
  const audio = new Audio(
    "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA="
  );

  audio.play().catch(() => {});
}

function toggle(button) {
  playKeySound();

  button.classList.toggle("active");

  if (button.classList.contains("active")) {
    button.textContent = "ON";
  } else {
    button.textContent = "OFF";
  }
}

function launchDemo() {
  playKeySound();
  document.getElementById("status").textContent =
    "STATUS: DEMO RUNNING";
}
