// import Modules from './modules'

const print = console.log.bind()

// const List_of_country = document.querySelector('.List_of_country')


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
    let modalbtn = document.querySelector('.close');


// <i class="fa-sharp fa-solid fa-moon"></i>

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
        modalbtn:modalbtn

        }

    }



)()



const controller = ((dom) => {
// background color changer

let backgroundMode=()=>{
    dom.modes.addEventListener('click', () => {
       
        // print(mod.textContent)
        if (dom.modes.textContent == 'Light Mode') {
            dom.modes.textContent = '&#9790'
            dom.modeIcon.innerHTML = '&#9790';
           
            
        } else {
            dom.modes.textContent = 'Light Mode'
            dom.modeIcon.textContent = '&#9790;'  
        }
   
    
        let domElements = [dom.header, dom.filter, dom.continent, dom.search]
        // dom.filter.style.bacgroumd ='red'
        domElements.forEach(dom=>dom.classList.toggle('elementBgChange'))

        document.body.classList.toggle('modeChange');
        dom.Modal.classList.toggle('modeChange')
        // document.querySelector('.modalbtn').classList.toggle('elementBgChange')

        document.querySelectorAll('.bottom__item').forEach(el =>{
             el.classList.toggle('elementBgChange');
            el.style.boxShadow ='4px 10px 9px hsl(var(--VeryDarkBlueLightModeText),.2);'
        })

        // Ui.filter.style.border.classList.toggle('elementBgChange');
        dom.search.classList.toggle('searchBorderMode');
        dom.search.classList.toggle('searchMode');

    })
};



return{
    BngMode: backgroundMode(),
        countryDom: (country) => {
            html = `<a class="countries">

            <img class='flag' src =${country.flags.svg} alt=${country.name.common} flag />

            <div class= 'country_details' >
                <h2 class='countryName'>${country.name.common} </h2>

                <ul class='country_detailsList'>
                    <li><span> Population:  </Span> ${country.population} </li>
                   <li><span >Region:  </Span> ${country.region} </li>
                    <li><span> Capital:  </span> ${country.name.common} </li>
                </ul>

            </div>
        </>`

            return html
        },


    }

})(DOMController)




const ApiConsumption = ((ApisData,dom,Ctrl)=>{
    let countries,continentDom,data


    const List_of_country = document.querySelector('.List_of_country')
 data = ApisData;
 continentDom = dom.continent
    let countryDiv = Ctrl.countryDom

//    Display All the Countries

function AllCountries(){
data.then(
    data=>{
        const country = data.map(countryDiv )
  
    List_of_country.innerHTML = country;

return {country};
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

}).then(el=>{
//Modal........................
 

   

        countries.forEach(element=>{

           element.addEventListener('click', e=>{
               let country = e.target.closest('.countries')

            //    guard clause
            if(!country) return;
             

               data.then(
                data=>{ data.map(cntry=>{   
                    print(cntry)    
        //   print(cntry)
               html = `<div>
              
<button class='modalbtn close'>go back</button>
            <div  class="countries ">
               <div class='imgContainer'>
            <img class='flag' src =${country.children[0].currentSrc} />
            </div>


            <div>

                <h2>${country.children[1].children[0].outerText}</h2>

            <div class="countryFull--detail" >
                <ul>
                <li><span>Native Name: </Span>${country.children[1].children[0].outerText}</li>
                    <li><span>Population: </Span>${cntry.population}</li>
                   <li><span>Region: </Span>${cntry.region}</li>
                    <li><span>Capital: </span>${country.children[1].children[0].outerText}</li>
                    <li><span>Subregion: </span>${cntry.subregion}</li>
                </ul>

                  <ul>
                <li><span>Top Level Domain: </Span>${country.children[1].children[0].outerText}</li>
                    <li><span>Currency: </Span>${cntry.population}</li>
                   <li><span>Language: </Span>${cntry.region}</li>
                    
                </ul>
            </div>

               <ul class='bottomDetails'>
                <li>Border Countries :</li>
                            <ul class='bottomDetails--List'>
                            <li class='bottom__item'>${country.children[1].children[0].outerText}</li>
                                <li class='bottom__item'>${cntry.population}</li>
                            <li class='bottom__item'>${cntry.region}</li>
                                </ul>
                                
                </ul>
        </div>
            </div>
        </div>`
               
        // print(html)
               dom.Modal.innerHTML = html;
              dom.Modal.style.visibility='visible'
                   })

                       print(document.querySelector('.modalbtn'))
                        // close modal

                     
           document.querySelector('.modalbtn').addEventListener('click',()=> console.log('yes'))


                   })
               

           })
        })
       



        // Get the button that opens the modal
        // var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        // var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        //     countries.forEach(country=>{
        //         country.addEventListener('click', e=>{
        //         modal.style.display = "block";

        //     })
        // }) 

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

   

}).

catch(err=>{
print(err)
}).finally(print('Loading...'))
}



// filtering the continent

let continent=(dom)=>{

    continentDom.addEventListener('click',e=>{

let continentName = e.target.textContent
 
data.then(
 
    countries => { 
        
        continent = countries.filter(el=> el.region ==continentName) 
//  print(continent)
let Continent =continent.map(countryDiv)
    List_of_country.innerHTML =Continent;

})
.then(Error=>{
    print(Error)
})

    })

    
}

// Search for any Country 
    // let countries = document.querySelectorAll('.countries');

const searchCountry=(country)=>{
   let searchIcon = dom.search_icon;
let searchInput = dom.input;
   

     searchIcon.addEventListener('click',()=>{

         if (searchInput.value !=='') {

             
data.then(
  
        Country =>{ 
            try {
                
                        
          country = Country.filter((cntry,i) => cntry.name.common === searchInput.value)
          if(country === 'undefined'){
          print('not found')
          }
                let Continent = country.map(countryDiv)
                List_of_country.innerHTML = Continent;
      
      
          print(searchInput.value)
     

        } catch (error) {
            print(error)

        }
    }
        )
    }
}
 )

// Key presss
    document.addEventListener('keypress', ()=> {
        if (event.keyCode === 13 || event.which === 13) {
          
            if (searchInput.value !== '') {


                data.then(

                    Country => {
                        try {


                            country = Country.filter((cntry, i) => cntry.name.common === searchInput.value)
                            if (country === 'undefined') {
                                print('not found')
                            }
                            let Continent = country.map(countryDiv)
                            List_of_country.innerHTML = Continent;


                            print(searchInput.value)


                        } catch (error) {
                            print(error)

                        }
                    }
                )
            }
         
        }
    }
    )
  
}




    

    // countryModal()
// continent
continent()
// print(datas)
    searchCountry()
    // Modules()
    AllCountries()
    

})(Apis, DOMController, controller)







   
