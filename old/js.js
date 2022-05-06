/*
const c = document.getElementById('wrap')
c.addEventListener('click', function(event){
    event.target.style.backgroundColor = '#333'
})

const b = document.getElementById('container')
b.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'red'
})

const a = document.getElementById('container')
a.addEventListener('click', function(event){
    (event.target.classList.contains('cube')) ? event.target.style.backgroundColor = 'green' : 
    console.log(event.target)
})

const wrap = document.querySelector('.wrapp')
let leftC = 0

wrap.addEventListener('click', function(event){
if(event.target.classList.contains('arrow-right')){
    if(leftC != -1200){
        document.querySelector('.images-wrap').style.left = (leftC - 400) + 'px'
        leftC += - 400
    }
}
if(event.target.classList.contains('arrow-left')){
    if(leftC != 0){
        document.querySelector('.images-wrap').style.left = (leftC + 400) + 'px'
        leftC += + 400
    }
}
})
*/

let i = 0
const colors = ['green', 'blue', 'red', 'black']
const a = document.getElementById('container')
a.addEventListener('click', function(event){
    if(event.target.classList.contains('cube')){
        event.target.style.backgroundColor = colors[i];
        i < 3 ? i++ : i = 0
    }
})

