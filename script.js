let audioContext = null;

function playKeySound() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(900, audioContext.currentTime);

  gain.gain.setValueAtTime(0.08, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.08
  );

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.08);
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
