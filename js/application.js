// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  try {
    // Prefer an initial size set by index.html (window.initialGridSize)
    var initialSize = window.initialGridSize || 4;

    // if we have an explicit mode selection, wipe any previous game state
    // **before** constructing the manager so setup() doesn't reload it.
    if (window.initialGridSize && window.initialGridSize !== 4) {
      // use a temporary storage manager to clear without needing a gm
      var tmpStor = new LocalStorageManager();
      tmpStor.clearGameState();
    }

    var gameManager = new GameManager(initialSize, KeyboardInputManager, HTMLActuator, LocalStorageManager);

    // Ensure the game is visible by forcing an actuate update
    gameManager.actuate();
  } catch (err) {
    console.error('Failure initializing game:', err);
  }
});
