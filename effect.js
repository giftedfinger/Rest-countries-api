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




const Search = (searchInput)=>{

const SearchApis = (async () => {
   
    try {
        const res = await fetch(`https://restcountries.com/v2/name/${searchInput}`);
        const data = await res.json();
       console.log(data)
        return data

    }
    catch (error) {
       console.log(error)
    }


})();

SearchApis.then(res=>{
    console.log(res)
})

}

// Search('pe')






// Not done yet
    // let Search_country =Ctrl.searchCountry
    // Search_country(country)

// function for search
// let searchCountry = (countrys)=>{
    // country = countrys.filter((cntry) => cntry.name.common === searchInput.value)
    // let country_flag = countrys.map(cntry=> cntry.flags.svg);
    // let country_name = countrys.map(cntry => cntry.name.common);
    // let country_color = countrys.map(cntry => cntry);



// <img class='flag' src =${country.flags.svg} alt=${country.name.common} flag />
//     if (country.length === 0) {
//         // error comtianer
//      let Error_container= document.createElement('div')
//      Error_container.classList='Error_container'

//     //  Error div text
//         let Error__text_div = document.createElement('div');
//         Error__text_div.classList ='Error__text_div'

// // error image
//         let Error_Img_container = document.createElement('div')

//         const img = document.createElement('img')
//         // img.src = './img/error_Img.png'

       

//         // print(countrys)
//         img.src = '../img/error_img.png'
//         img.classList = 'img_Error'
//         Error_Img_container.append(img)
//         Error_Img_container.src = 'img_Error'

//        let p_img = document.createElement('p')
//        p_img.textContent = 'check the spelling and try again'
//         Error_Img_container.append(p_img)

// // error image and text display

//         setInterval(() => {
//             let randNum = Math.floor(Math.random() * country_flag.length)
//             img.src = country_flag[randNum]
//             p_img.textContent = country_name[randNum]

//         }, 2000);

//         Error_Img_container.append(p_img)
//         // error Text
       
//         const p = document.createElement('p')
//         p.classList = 'error_Text'
//         p.textContent=`OOPS! COUNTRY  NOT FOUND`
//         let btn = document.createElement('button')
//         btn.classList ='error_btn btn'

//         btn.innerText = 'Back '

//         // appendingtext to Error_text_div
//         Error__text_div.append(p)
//         Error__text_div.append(btn)

//         btn.addEventListener('click', ()=>{
//             dom.topSection.style.visibility = 'visible'
//             Error_container.remove()
//             AllCountries()
//         } )

        
//         Error_container.append(Error_Img_container)
//        Error_container.append(Error__text_div);
//         document.body.append(Error_container)
        
//     }
//     let Continent = country.map(countryDiv)
//     List_of_country.innerHTML = Continent;

//   dom.topSection.style.visibility='hidden'
//     print(searchInput.value)
    
// }