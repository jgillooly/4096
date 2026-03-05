// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  // Prefer an initial size set by index.html (window.initialGridSize)
  var initialSize = window.initialGridSize || 4;
  var gameManager = new GameManager(initialSize, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  // If detection script already set initialGridSize, the correct grid is created.
  // Legacy localStorage handling is performed earlier in index.html, so nothing
  // else is required here.
  
  // Ensure the game is visible by forcing an actuate update
  gameManager.actuate();
});
