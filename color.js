const container = document.querySelector('.container');
const controls = document.querySelector('.controls');
const draw = document.querySelector('.draw');
const drawS = document.querySelector('.draw').style;
const erase = document.querySelector('#erase');
const colour = document.querySelector('#colour');
const reset = document.querySelector('#reset');
const size = document.querySelector('#size');
let size1 = 2;
let nColor = 'black';
let oColor = 'white';

alert('select size and colour in order to start');

size.addEventListener('click', () => {
    while (draw.firstChild) {
        draw.removeChild(draw.lastChild);
    }
    let size2 = prompt("enter your size");
    console.log(size2);
    draw.setAttribute(`style`, `grid-template-columns: repeat( ${size2},1fr); background-color: white`);

    function create(size1) {
            for (let i = 0; i < size1; i++) {
                for (let j = 0; j < size1; j++) {
                    let div1 = document.createElement('div');
                    // div1.textContent = 'paet';
                    div1.classList.toggle('co');
                    draw.appendChild(div1);
                }
            }
        }

    create(size2);
    const divS = document.querySelectorAll('.co');

    colour.addEventListener('click', () => {
    erase.removeAttribute('style');
    colour.setAttribute('style','background-color: black; color: white');
        divS.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', `background-color: ${nColor}`);
            })
        });
    })
    
    erase.addEventListener('click', () => {
    colour.removeAttribute('style');
    erase.setAttribute('style','background-color: black; color: white');
        divS.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', `background-color: ${oColor}`);
            })
        });
    })
    
    reset.addEventListener('click', () => {
        divS.forEach((div) => {
            div.setAttribute('style', `background-color: ${oColor}`);
        });
    })
})
