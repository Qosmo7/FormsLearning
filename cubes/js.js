let i = 0
const colors = ['green', 'blue', 'purple', 'yellow']
const wrap = document.getElementById('container')

wrap.addEventListener('click', function(event){
    if(event.target.classList.contains('cube')){
        event.target.dataset.counter ? event.target.dataset.counter = parseInt(event.target.dataset.counter) + 1 : event.target.dataset.counter = 0
        event.target.style.backgroundColor = colors[i % colors.length]
        i++
    }
})

// const colorsWrap = document.querySelector('.colors-wrap')
// const colorItems = document.querySelectorAll('.color-item')
// const boxWrap = document.querySelector('.box-wrap')
// let selectedColor = ''

// colorsWrap.addEventListener('click', function(event){
//     if(event.target.classList.contains('color-item')){
//         selectedColor = event.target.dataset.color
//         for(let colorI of colorItems){
//             colorI.classList.remove('color-item_active')
//         }
//         event.target.classList.add('color-item_active')
//     }
// })

// boxWrap.addEventListener('click', function(event){
//     if((event.target.classList.contains('box-item')) && (selectedColor !== '')){
//         event.target.style.backgroundColor = '#' + selectedColor
//         event.target.classList.add('box-item_active')
//     }
// })

const container = document.querySelector('.container')
const colorItems = document.querySelectorAll('.color-item')
let selectedColor = ''

container.addEventListener('click', function(event){
    if(event.target.classList.contains('color-item')){
        selectedColor = event.target.dataset.color
        document.querySelector('.color-item_active') ? document.querySelector('.color-item_active').classList.remove('color-item_active') : null
        event.target.classList.add('color-item_active')
    } 
    else if(event.target.classList.contains('box-item') && selectedColor !== ''){
        event.target.style.backgroundColor = '#' + selectedColor
        event.target.classList.add('box-item_active')
    }
})