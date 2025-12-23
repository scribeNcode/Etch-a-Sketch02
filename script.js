// Create a webpage with a 16x16 grid of square divs
let totalSquares = 16 * 16
// get container div
const container = document.getElementById("container")
// get numOfSquares button
const numOfSquares = document.getElementById("numOfSquares")

// create a loop to generate 16x16 grid of square
for(let i = 0; i < totalSquares; i++){
    let square = document.createElement('div');
    // add class attribute to style each square
    square.classList.add('square');
    // add each square created to container div
    container.appendChild(square)
    
}

// Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

// add event listener to numOfSquares button
