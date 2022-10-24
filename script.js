const print = console.log.bind()

// const List_of_country = document.querySelector('.List_of_country')


   const Apis = ( async ()=> {
        // code goes here
        try {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();

            return data
        
        } catch (error) {
            // print(error)
        }

      
    })();

//  


const Uicontroller =( ()=>{
    let header = document.querySelector('header')
    let modes = document.querySelector('.mode');

    let continents = document.querySelector('.continents');
    let filte_Label = document.querySelector('.filte_Label');
    let search = document.querySelector('.search');

    return {
       continent:continents,
       filter:filte_Label,
       search:search,
       modes:modes,
       header:header
    }

})()



const controller = ((ui) => {

let Ui = ui



    Ui.modes.addEventListener('click', () => {

        
        document.body.classList.toggle('modeChange');
        // print(mod.textContent)
        if (Ui.modes.textContent == 'Dark Mode') {
           Ui.modes.textContent = 'Light Mode'
        } else {
        Ui.modes.textContent = 'Dark Mode'
        }

        Ui.header.classList.toggle('elementBgChange');
        Ui.filter.classList.toggle('elementBgChange');
        Ui.continent.classList.toggle('elementBgChange');
        Ui.search.classList.toggle('elementBgChange')

        Ui.filter.style.border.classList.toggle('elementBgChange');
        Ui.search.style.outline ='1px solid hsl(var(--VeryDarkBlueDarkModeBackground));'
        VeryDarkBlueDarkModeBackground

    })


})(Uicontroller)




const ApiConsumption = ((ApisData,ctrl)=>{
    const List_of_country = document.querySelector('.List_of_country')
let data = ApisData
data.then(data=>{

        const country = data.map(country => {

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

        })
  
    List_of_country.innerHTML = country;
return country

 
})
// button 

.then(el=>{

    // let header = document.querySelector('header')
    const modes = document.querySelector('.mode');
    let countries = document.querySelectorAll('.countries');


    modes.addEventListener('click', () => {
        // document.body.classList.toggle('modeChange');
        // print(modes.textContent)
        // if (modes.textContent == 'Dark Mode') {
        //     modes.textContent = 'Light Mode'
        // } else {
        //     modes.textContent = 'Dark Mode'
        // }

        // header.classList.toggle('elementBgChange');

        countries.forEach(countries => {
            countries.classList.toggle('elementBgChange')
        })

    })

}).catch(err=>{
print(err)
}).finally(print('Loading...'))
  
// print(datas)

})(Apis)







   
