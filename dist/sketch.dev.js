"use strict";

/** sketch.js
 *  Description: Simple rendition of The Game of Life using p5.js
 */

/** Inital variables */
var res = 15;
var cols; // Number of columns in pixArray & npixArr

var rows; // Number of rows in pixArray & npixArr

var npixArr; // The new pixel array for the next generation

/** setup()
 *  Description: Initializes framerate, canvas, and pixel arrays
 */

function setup() {
  frameRate(5); // Set low frame rate

  createCanvas(600, 600); // Create canvas

  cols = floor(width / res); // Initialize column size

  rows = floor(height / res); // Initialize row size

  pixArr = gen2DArr(cols, rows); // Generate pixel array based on col and row

  npixArr = gen2DArr(cols, rows);
  initArr();
}
/** draw() 
 *  Description: Handles rendering the pixel array
*/


function draw() {
  background(255); //Set white background

  genArr(); // Generate new pixel arr based on current pixel array and swap
  // Renders pixel array

  for (var _i = 0; _i < cols; _i++) {
    for (var j = 0; j < rows; j++) {
      if (pixArr[_i][j] == 1) fill(0);else fill(200);
      stroke(0);
      rect(_i * res, j * res, res - 1, res - 1);
    }
  }
}
/** mousePressed()
 *  Description: Handles mouse presses
 */


function mousePressed() {
  initArr(); // Reinitialize array when mouse pressed
}
/** initArr() 
 *  Description: Populate inital state of pix arrays 
 */


function initArr() {
  for (var _i2 = 0; _i2 < cols; _i2++) {
    for (var j = 0; j < rows; j++) {
      if (_i2 == 0 || j == 0 || _i2 == cols - 1 || j == rows - 1) pixArr[_i2][j] = 0; // Filling the rest randomly
      else pixArr[_i2][j] = floor(random(2));
      npixArr[_i2][j] = 0;
    }
  }
}
/** genArr()
 *  Description: Generate new pixel array based on current pixel array then swap
 */


function genArr() {
  // Loop through every spot in our 2D array and check spots neighbors
  for (var x = 1; x < cols - 1; x++) {
    for (var y = 1; y < rows - 1; y++) {
      // Add up all the states in a 3x3 surrounding grid
      var neighbors = calcNeighbors(pixArr, x, y); // Rules of Life

      if (pixArr[x][y] == 1 && (neighbors < 2 || neighbors > 3)) npixArr[x][y] = 0; // Loneliness
      else if (pixArr[x][y] == 0 && neighbors == 3) npixArr[x][y] = 1; // Reproduction
        else npixArr[x][y] = pixArr[x][y]; // Stasis
    }
  } // Swap new and old pixel arrays (for next generation)


  var temp = pixArr;
  pixArr = npixArr;
  npixArr = temp;
}
/** calcNeighbors(arr, x, y)
 *  Description: Calculate the number of alive neighbors around the point x, y in arr
 *  Parameters: arr - input array to find neighbors from
 *              x - x-coordinate of point to find neighbors around
 *              y - y-coordiante of point to find neighbors around
 *  Return: returns 2D array with cols and rows
 */


function calcNeighbors(arr, x, y) {
  var neighbors = 0;

  for (var _i3 = -1; _i3 <= 1; _i3++) {
    for (var j = -1; j <= 1; j++) {
      neighbors += arr[x + _i3][y + j];
    }
  }

  neighbors -= arr[x][y];
  return neighbors;
}
/** gen2DArr(cols, rows)
 *  Description: Create a 2D array using parameter 'cols' and 'rows'
 *  Parameters: cols - Desired number of cols in 2D array
 *              rows - Desired number of rows in 2D array
 *  Return: returns 2D array with cols and rows
 */


function gen2DArr(cols, rows) {
  arr = new Array(cols);

  for (i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
  }

  return arr;
}