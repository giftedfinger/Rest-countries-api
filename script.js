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

        }

    }



)()



const controller = ((dom) => {
// background color changer

let backgroundMode=()=>{
    dom.modes.addEventListener('click', () => {

        document.body.classList.toggle('modeChange');
        // print(mod.textContent)
        if (dom.modes.textContent == 'Light Mode') {
            dom.modes.textContent = '&#9790; Dark Mode'
            dom.modeIcon.innerHTML = '&#9790';
            dom.c
        } else {
            dom.modes.textContent = 'Light Mode'
            dom.modeIcon.textContent = '&#9790;'  
        }

 
        dom.filter.style.bacgroumd ='red'
        dom.header.classList.toggle('elementBgChange');
        dom.filter.classList.toggle('elementBgChange');
        dom.continent.classList.toggle('elementBgChange');
        dom.search.classList.toggle('elementBgChange')

        // Ui.filter.style.border.classList.toggle('elementBgChange');
        dom.search.style.outline ='1px solid hsl(var(--VeryDarkBlueDarkModeBackground))';
       

    })
};



return{
    BngMode: backgroundMode(),
        countryDom: (country) => {
            html = `<div class="countries">
            <img class='flag' src =${country.flags.svg} />
            <div class="country_details" >
                <h2>${country.name.common}</h2>
                <ul>
                    <li><span>Population: </Span>${country.population}</li>
                   <li><span>Region: </Span>${country.region}</li>
                    <li><span>Capital: </span>${country.name.common}</li>
                </ul>
            </div>
        </div>`

            return html
        },


    }



})(DOMController)




const ApiConsumption = ((ApisData,dom,Ctrl)=>{
    const List_of_country = document.querySelector('.List_of_country')
let data = ApisData;
 let continentDom = dom.continent
    let countryDiv = Ctrl.countryDom

//    Display All the Countries

function AllCountries(){
data.then(
    data=>{
        const country = data.map(countryDiv )
  
    List_of_country.innerHTML = country;
return country;
})

.then(el=>{

    const modes = document.querySelector('.mode');
    let countries = document.querySelectorAll('.countries');


    modes.addEventListener('click', () => {
        countries.forEach(countries => {
            countries.classList.toggle('elementBgChange')
        })

    })

}).catch(err=>{
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
  
}
    



AllCountries()

// continent
continent()
// print(datas)
    searchCountry()

})(Apis, DOMController, controller)







   
