body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #090511;
  font-family: Arial, sans-serif;
  color: white;
}

.app {
  width: 330px;
  padding: 25px;
  border-radius: 20px;
  background: #160b25;
  box-shadow: 0 0 30px #7b2cff;
}

h1 {
  text-align: center;
  margin: 0;
  color: #b66cff;
}

.version {
  text-align: center;
  color: #888;
  font-size: 12px;
  margin-bottom: 25px;
}

.feature {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  padding: 13px;
  border-radius: 12px;
  background: #241238;
}

button {
  border: none;
  border-radius: 8px;
  padding: 8px 15px;
  background: #3a2455;
  color: white;
  font-weight: bold;
}

button.active {
  background: #8b35ff;
}

.launch {
  width: 100%;
  margin-top: 20px;
  padding: 13px;
  background: #8b35ff;
}

#status {
  text-align: center;
  margin-top: 20px;
  color: #b66cff;
}

small {
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #777;
}

/* Mira visual de la demo */
.crosshair {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  display: none;
  pointer-events: none;
  z-index: 9999;
}

.crosshair.active {
  display: block;
}

.crosshair-line {
  position: absolute;
  background: white;
  box-shadow: 0 0 6px #b66cff;
}

.horizontal {
  width: 50px;
  height: 2px;
  left: 0;
  top: 24px;
}

.vertical {
  width: 2px;
  height: 50px;
  left: 24px;
  top: 0;
}

.crosshair-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
  left: 22px;
  top: 22px;
  box-shadow: 0 0 8px #b66cff;
}
