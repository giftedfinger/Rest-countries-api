'use strict'

console.log('effect')
let header = document.querySelector('header')
let modes = document.querySelector('.mode');

let continents = document.querySelector('.continents');
let filte_Label = document.querySelector('.filte_Label');
let search = document.querySelector('.searchDiv');
let modeIcon = document.querySelector('.modeIcon');
let search_icon = document.querySelector('.search_icon');
let search_input = document.querySelector('.search');
let Modal = document.querySelector('.modal');
let modalbtn = document.querySelector('.close');
let filterBtn = document.querySelector('.filterBtn');



const effect=()=>{
continents.addEventListener('moseover', e=>{
    let continent = e.target;
    let siblings = continent.closest('.continents').querySelectorAll('li')

    siblings.forEach(el => {
        if(el !== continent){
            el.style.opacity = .5
        }
    });
})
}

effect()


filterBtn.addEventListener('click', ()=>{
    continents.classList.toggle('continentsOpen')
})




