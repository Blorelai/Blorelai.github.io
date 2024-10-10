$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(300, 650, 50, 100)
createPlatform(100, 513, 60, 10)
createPlatform(100, 0, 10, 513)
createPlatform(100, 380, 50, 10)
createPlatform(350, 300, 300, 10)
createPlatform(675, 350, 275, 10)
createPlatform(350, 300, 10, 500)
createPlatform(650, 300, 10, 25)
createPlatform(650, 325, 25, 10)
createPlatform(675, 325, 10, 25)
createPlatform(950, 350, 10, 75)
createPlatform(950, 495, 10, 60)
createPlatform(1050, 420, 10, 70)
createPlatform(1050, 560, 10, 90)
createPlatform(450, 640, 600, 10)
createPlatform(1050, 0, 10, 350)
createPlatform(350, 510, 100, 10)
createPlatform(1050, 490, 10, 70)
createPlatform(1050, 350, 10, 70)
createPlatform(950, 420, 10, 80)
createPlatform(1050, 620, 70, 10)
createPlatform(1050, 490, 60, 10)
createPlatform(1340, 420, 70, 10)
createPlatform(1350, 290, 60, 10)
createPlatform(1060, 200, 60, 10)

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("steve", 380, 309, 1, 1)
    createCollectable("steve", 1100, 40, 0, 1)
    createCollectable("steve", 150, 90, 0, 1)
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("top", 460, 1500)
    createCannon("right", 200, 2000)
    createCannon("top", 1275, 1300)
    createCannon("top", 900, 1000)

    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
