// import Modules from './modules'

// import { text } from "@fortawesome/fontawesome-svg-core";\

// 'use strict'

const print = console.log.bind()

// FETCHING API MODULE


   const Apis = ( async ()=> {
        // code goes here
        try {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
print(data)
            return data
        
        } catch (error) {
            // print(error)
        }

      
    })();

//  


const DOMController =( ()=>{
    let header = document.querySelector('header')
    let modes = document.querySelector('.mode');

    let continents = document.querySelector('.continents');
    let filte_Label = document.querySelector('.filte_Label');
    let search = document.querySelector('.searchDiv');
    let modeIcon = document.querySelector('.modeIcon');
    let search_icon = document.querySelector('.search_icon');
    let search_input= document.querySelector('.search');
    let Modal = document.querySelector('.modal');
    let modalbtn = document.querySelector('.modalbtn');
    let topSection = document.querySelector('.topSection')
    const List_of_country = document.querySelector('.List_of_country')


    return {
       continent:continents,
       filter:filte_Label,
       search:search,
       modes:modes,
       header:header,
        modeIcon: modeIcon,
        search_icon: search_icon,
        input: search_input,
        Modal:Modal,
        modalbtn: modalbtn,
        List_of_country: List_of_country,
        topSection:topSection

        }

    }
)()



// CONTROLLER MODULE


const controller = ((dom) => {
let searchInput =dom.input


let backgroundMode=()=>{
    dom.modes.addEventListener('click', () => {
       

        if (dom.modes.textContent == 'Light Mode') {
            dom.modes.textContent = '&#9790'
            dom.modeIcon.innerHTML = '&#9790';  
        } 
        
        else {
            dom.modes.textContent = 'Light Mode'
            dom.modeIcon.textContent = '&#9790;'  
        }
   
     
    
        let domElements = [dom.header, dom.filter, dom.continent, dom.search]
     
        domElements.forEach(dom=>dom.classList.toggle('elementBgChange'))

        document.body.classList.toggle('modeChange');
        dom.Modal.classList.toggle('modeChange')
       

        document.querySelectorAll('.bottom__item').forEach(el =>{
             el.classList.toggle('elementBgChange');
            el.style.boxShadow ='4px 10px 9px hsl(var(--VeryDarkBlueLightModeText),.2);'
        })

      
        dom.search.classList.toggle('searchBorderMode');
        dom.search.classList.toggle('searchMode');

    })
};



return{

    BngMode: backgroundMode(),

        countryDom: (country) => {
        
            if (searchInput.value ===''){
    
            html = `<a class="countries" id = '${country.name.common}' >

            <img class='flag' src =${country.flags.svg} alt=${country.name.common} flag />

            <div class= 'country_details' >
                <h2 class='countryName'>${country.name.common} </h2>

                <ul class='country_detailsList'>
                    <li><span> Population:  </Span> ${country.population} </li>
                   <li><span >Region:  </Span> ${country.region} </li>
                    <li><span> Capital:  </span> ${country.capital} </li>
                </ul>

            </div>
        </>`

            return html
            } 

            html = `<a class="countries" id = '${country.name}' >

            <img class='flag' src =${country.flags.svg} alt=${country.name} flag />

            <div class= 'country_details' >
                <h2 class='countryName'>${country.name} </h2>

                <ul class='country_detailsList'>
                    <li><span> Population:  </Span> ${country.population} </li>
                   <li><span >Region:  </Span> ${country.region} </li>
                    <li><span> Capital:  </span> ${country.capital} </li>
                </ul>

            </div>
        </>`
            return html
         


    },

 
    
    }

})(DOMController)


// APIS CONSUMMING MODULE/////////////////////////////////////////////////////////////

const ApiConsumption = ((ApisData,dom,Ctrl)=>{
    let countries, continentDom, data, countryDiv, searchIcon, searchInput

    const List_of_country = dom.List_of_country

data = ApisData;
continentDom = dom.continent
countryDiv = Ctrl.countryDom

searchIcon = dom.search_icon;
searchInput = dom.input

//    DISPLAY ALL COUNTRIES 

    const modal_dom = (country) => {

        // <li><span>Currency: </Span>${country.currencies[0].name} <span>symbol:${cntry.currencies[0].symbol}</span></li>
        // <li class='bottom__item'>${country.children[1].children[0].outerText}</li>
       
        // print(country)
        html = `<div>
              
<button class='modalbtn close'>go back</button>
            <div  class="countries ">
               <div class='imgContainer'>
            <img class='flag' src =${country[0].flags.svg} />
            </div>

            <div>
                <h2>${country[0].name.common}</h2>

            <div class="countryFull--detail" >
                <ul>
                <li><span>Native Name: </Span>${country[0].name.common}</li>
                    <li><span>Population: </Span>${country[0].population}</li>
                   <li><span>Region: </Span>${country[0].region}</li>
                    <li><span>Capital: </span>${country[0].capital}</li>
                    <li><span>Subregion: </span>${country[0].subregion}</li>
                </ul>

                  <ul>
                <li><span>region : </Span>${country[0].region}</li>
                    
                   <li><span>Language: </Span>${country[0].language}</li>
                    
                </ul>
            </div>

               <ul class='bottomDetails'>
                <li>Border Countries :</li>
                            <ul class='bottomDetails--List'>
                         
                                <li class='bottom__item'>${country[0].population}</li>
                            <li class='bottom__item'>${country[0].region}</li>
                                </ul>           
                </ul>
        </div>
            </div>
        </div>`

        dom.Modal.innerHTML = html;
        dom.Modal.style.visibility = 'visible'

        document.querySelector('.modalbtn').addEventListener('click', () => {
            print('closed')
            dom.Modal.style.visibility = 'hidden'
        })

    }


function AllCountries(){
data.then(
    data=>{
        const country = data.map(countryDiv)
  
    List_of_country.innerHTML = country;

return country;
})

.then(el=>{

    const modes = document.querySelector('.mode');
   countries = document.querySelectorAll('.countries');


    modes.addEventListener('click', () => {
        countries.forEach(countries => {
            countries.classList.toggle('elementBgChange')
        })

    })
    return countries, el

})




// /////////////////////////  MODAL    ////////////////////////////////////////////////........................
.then(el=>{

  countries.forEach(element=>{

           element.addEventListener('click', e=>{
               let targeted_cntry = e.target.closest('.countries')

            //    guard clause
               if (!targeted_cntry) return;
                    
               let countryname = targeted_cntry.children[1].children[0].textContent


    const country =( async() => {

        const res = await fetch(`https://restcountries.com/v3.1/name/${countryname}`)
        const data = await res.json();
return data
    })()

    country.then(el=>{
        print(el)
        modal_dom(el)
    })

           })
        })
})
}
// .then(el=>{
 
//         countries.forEach(element=>{

//            element.addEventListener('click', e=>{
//                let country = e.target.closest('.countries')

//             //    guard clause
//             if(!country) return;
                    
//                let countryname = country.children[1].children[0].textContent


//                data.then(

        
//                 data=>{ data.filter((cntry,i,arr)=>{    
                    
//                 let cnt = cntry.name.common === countryname
                
              

//                    })

//                    })  
                             
//            })
//         })
       

// }).

// catch(err=>{
// print(err)
// }).finally(print('Loading...'))




// Search for any Country 
    // let countries = document.querySelectorAll('.countries');

const search_Country=(search_Input)=>{

     

        if(search_Input !==''){
const SearchApis = (async () => {

            try {
                const res = await fetch(`https://restcountries.com/v2/name/${search_Input}`);
                const data = await res.json();
               
                return data

            }
            catch (error) {
                print(error + 'country not found')
            }

            SearchApis.then(cntry=>{
                modal_dom(cntry);
            })

        })();

            SearchApis.then(country_Response => {
                print(country_Response)
                let Continent = country_Response.map(countryDiv)
                List_of_country.innerHTML = Continent;
            })
        }



    }

     searchIcon.addEventListener('click',()=>{
      
         if (searchInput.value !== '') {
             search_Country(searchInput.value)
         }
}
 )

// Key presss
    document.addEventListener('keypress', ()=> {
        if (event.keyCode === 13 || event.which === 13) {
          
            if (searchInput.value !== '') {
          search_Country(searchInput.value)
               
            }
           
        }
    }
    )

 

    // modal close
    // document.querySelector('.Error__text_div').addEventListener('click',()=>{
        
    // })

    // print(dom.modalbtn)
  





    // FILLTERING THE COUNTRIES BY REGION


    let continent = () => {

        continentDom.addEventListener('click', e => {

            let continentName = e.target.textContent

            data.then(

                countries => {

                    continent = countries.filter(el => el.region == continentName)
                     print(continent)
                    let Continent = continent.map(countryDiv)
                    List_of_country.innerHTML = Continent;
                 
                })

                .then(Error => {
                    print(Error)
                })

        })


    }

    

    // countryModal()
   
// continent
continent()
// print(datas)
    search_Country(searchInput.value)
    // Modules()
    AllCountries()
    

})(Apis, DOMController, controller)







   
