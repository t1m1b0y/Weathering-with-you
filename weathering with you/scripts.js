const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b190a4426emsh3860366f955209cp1617cejsn6440c33ff475',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

 const weatherURL = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='
	

const  SearchForCity = async () =>{
    
        const searchBar = document.getElementById('search-bar')
        let searchBarVal = searchBar.value

        const searchBarUpper = searchBarVal.toUpperCase()

        

        try{ 
            
        const response = await fetch(`${weatherURL}${searchBarVal}`, options)
        const data = await response.json()
        console.log(data)

        
        showTempData(data.temp, data.min_temp, data.max_temp, data.humidity)
        }catch(error){
            console.log(error)
        }
            
   


}

const showTempData = (Temp, Min, Max, Humidity) =>{
    const searchBar = document.getElementById('search-bar')
        let searchBarVal = searchBar.value

        const searchBarUpper = searchBarVal.toUpperCase()

    const temp = document.getElementById('Temperature')
    const minTemp = document.getElementById('MinTemp')
    const maxTemp = document.getElementById('MaxTemp')
    const humidityVal = document.getElementById('humidity')

    temp.innerText = `Temperature: ${Temp}°`
    minTemp.innerText = `Min Temp: ${Min}°`
    maxTemp.innerText = `Max Temp: ${Max}°`
    humidityVal.innerText = `Humidity: ${Humidity}` 

    const stateName = document.getElementById('stateName')
       
    stateName.innerText = searchBarUpper;


}

