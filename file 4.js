const container =  document.querySelector('.container');
const search =  document.querySelector('.search-box button');
const weatherBox =  document.querySelector('.weather-box');
const weatherDetails =  document.querySelector('.weather-details');

search.addEventListener('click', () => { 

    const APIKey ='40d01644c1cd85953799360cf29d260d';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
    return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'https://st4.depositphotos.com/1005844/30671/i/450/depositphotos_306719508-stock-photo-blue-sky-sun-background.jpg';  
                break;

             case 'Rain':
                image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBCVB9aM5mxVNbJBQhbmUmdcT7kK0KG_qXw&s';
                break;

             case 'Snow':
                image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBCVB9aM5mxVNbJBQhbmUmdcT7kK0KG_qXw&s';
                break;  
                  
            case 'Clouds':
                image.src = 'https://www.treehugger.com/thmb/z9XWueIDAUQI6QvXfCR6JyuFzl8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__08__CollectionOfCloudsAgainstABlueSky-8cae9f3109d14dcf98d9facc5775222f.jpg';
                break;

            case 'Mist':
                image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDY2xKrn_lNdmkkeRPxdtx1gZ6nmaGx6R-pw&s';
                break;

            case 'Haze':
                image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDY2xKrn_lNdmkkeRPxdtx1gZ6nmaGx6R-pw&s';
                break;
        
            default:
               image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLojkcoNjwnj0atFGRJqIqdMtnz4HAM5Mrkb9t1mbmFn24bc0Ms8itbXsHCDp-badwyo&usqp=CAU';
               break;
        }
          temperature.innerHTML = `${parseInt(json.main.temp)}<span>°c</span>`;
          description.innerHTML = `${json.weather[0].description}`;
          humidity.innerHTML = `${(json.main.humidity)}%`;
          wind.innerHTML = `${parseInt(json.wind.speed)}Km/hr`;


    });
});