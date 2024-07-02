let cityName=document.getElementById("input")
let searchbtn = document.getElementById("search")
let inpLocation=document.getElementById("location")
let tempurature=document.getElementById("tempurature")
let description=document.getElementById("description")
let main = document.getElementById("main")
let image = document.getElementById("icon")
let error = document.getElementById("error")
let info = document.getElementById("weather-info")

searchbtn.addEventListener("click",()=>{
    let location=cityName.value;
    if(location.length == 0){
        inpLocation.innerHTML = `<h5>Please Enter City Name</h5>`
    }

    else{
        let key = "1cd56d369623ac746f6d8f7726611115"
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`
        fetch(url)
        .then ((res) =>(res.json()))
        .then((data) => {
            inpLocation.innerHTML = data.name
            tempurature.innerHTML = data.main.temp + "°C"
            main.innerHTML = data.weather[0].main
            image.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`
            description.innerHTML = data.weather[0].description
            tempurature.style.display = 'block'
        })

        .catch(()=>{
            info.innerHTML = "City is NOT found"
        })

    }

    


});


    

 

