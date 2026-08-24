let audioContext;

function playKeySound() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "square";
  oscillator.frequency.value = 700;

  gain.gain.setValueAtTime(0.04, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.06
  );

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.06);
}

function toggle(button) {
  playKeySound();

  button.classList.toggle("active");

  button.textContent =
    button.classList.contains("active") ? "ON" : "OFF";
}

function launchDemo() {
  playKeySound();

  document.getElementById("status").textContent =
    "STATUS: DEMO RUNNING";
}
