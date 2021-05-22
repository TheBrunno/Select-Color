
// I take the navigation & square elements and put them in an array, the colorChange function reads that array and applies the color chosen in the box to the array elements

const changeColor = [document.getElementById('navigation'), document.getElementById('square')]
const btn = document.getElementById('btn')

function colorChange(color, elements){
    for(i in elements){
        elements[i].style.backgroundColor = color
    }
}

btn.onclick = function(){
    let color = document.getElementById('color').value
    colorChange(color, changeColor)
}