// get container div
const container = document.getElementById("container")
let totalSquares = 16 ** 2
let squarePerSide = 16
// function to display grid squares
function setGrid(squarePerSide){
    for(let i = 0; i < totalSquares; i++){
        let square = document.createElement('div')
        square.style.outline = "1px solid red"
        square.style.flexBasis = `calc(100% / ${squarePerSide})`
        square.style.height = `calc(100% / ${squarePerSide})`
        container.appendChild(square)

        // add event listener to all box
        square.addEventListener('mouseenter',()=>{
            square.style.backgroundColor = "black"
        })
        // remove event listener when mouse goes out of all divs
        square.addEventListener('mouseout', ()=>{
            square.style.backgroundColor = ""
        })
         container.appendChild(square)
    }
}

setGrid(squarePerSide)