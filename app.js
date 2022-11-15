const board = document.querySelector('#board')
const colors = ['rgb(246, 255, 113)',  'rgb(201, 90, 90)', 
'rgb(255, 187, 85)', 'rgb(128, 236, 255)', 'rgb(252, 154, 255)',
'rgb(109, 255, 153)', 'rgb(250, 62, 219)', 'rgb(185, 252, 62)']
const SQUARES_NUMBER = 400

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor ='#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`

}

function getRandomColor(){
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}