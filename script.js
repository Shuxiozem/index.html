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
