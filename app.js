let appid = '49c4efe66de135752774b08713d441fb';
let api = 'http://api.openweathermap.org/data/2.5/weather?';
let forecast = 'http://http://api.openweathermap.org/data/2.5/forecast?';
let temperature;
let humidity;
let loc;
let icon;
let description;
let search= document.getElementById('search');
let city_input;



window.onload = function(){
    temperature = document.getElementById('temperature');
    humidity = document.getElementById('humidity');
    loc = document.getElementById('loc');
    icon = document.getElementById('icon');
    description = document.getElementById('description');

    let temperature1 = document.getElementById('temperature1');
    let humidity1 = document.getElementById('humidity1');
    let loc1 = document.getElementById('loc1');
    let icon1 = document.getElementById('icon1');
    let description1 = document.getElementById('description1');

    let temperature2 = document.getElementById('temperature2');
    let humidity2 = document.getElementById('humidity2');
    let loc2 = document.getElementById('loc2');
    let icon2 = document.getElementById('icon2');
    let description2 = document.getElementById('description2');

    let temperature3 = document.getElementById('temperature3');
    let humidity3 = document.getElementById('humidity3');
    let loc3 = document.getElementById('loc3');
    let icon3 = document.getElementById('icon3');
    let description3 = document.getElementById('description3');

    let temperature4 = document.getElementById('temperature4');
    let humidity4 = document.getElementById('humidity4');
    let loc4 = document.getElementById('loc4');
    let icon4 = document.getElementById('icon4');
    let description4 = document.getElementById('description4');

    let temperature5 = document.getElementById('temperature5');
    let humidity5 = document.getElementById('humidity5');
    let loc5 = document.getElementById('loc5');
    let icon5 = document.getElementById('icon5');
    let description5 = document.getElementById('description5');


    

    
    cityweather('Vancouver');
    cityweather1('Vancouver');
    cityweather2('Vancouver');
    cityweather3('Vancouver');
    cityweather4('Vancouver');
    cityweather5('Vancouver');



}

function display(weather){
    temperature.innerHTML= weather.temperature;
    humidity.innerHTML = weather.humidity;
    loc.innerHTML = weather.loc;
    description.innerHTML = weather.description;
    icon.src = "http://openweathermap.org/img/w/"+weather.icon+".png";

    

    
    
}

function cityweather(city){
    let url =api+"q="+city+"&appid="+appid+"&units=metric";
    
    sendRequest(url);
}

function sendRequest(url){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let data = JSON.parse(xmlhttp.responseText);
            
            let weather={};
            weather.temperature=data.main.temp;
            weather.humidity= data.main.humidity;
            weather.loc=data.name;
            weather.description=data.weather[0].description;
            weather.icon=data.weather[0].icon;
            display(weather);
        }
        
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

    
    

    

    function update_city(){
        city_input = document.getElementById('city');
        let x= city_input.value;
        cityweather(x);
        cityweather1(x);
        cityweather2(x);
        cityweather3(x);
        cityweather4(x);
        cityweather5(x);

    }


function cityweather1(city){
    let url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=49c4efe66de135752774b08713d441fb"+"&units=metric" ;
    
    sendRequest1(url);
}
function cityweather2(city){
    let url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=49c4efe66de135752774b08713d441fb"+"&units=metric" ;
    
    sendRequest2(url);
}
function cityweather3(city){
    let url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=49c4efe66de135752774b08713d441fb"+"&units=metric" ;
    
    sendRequest3(url);
}
function cityweather4(city){
    let url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=49c4efe66de135752774b08713d441fb"+"&units=metric" ;
    
    sendRequest4(url);
}
function cityweather5(city){
    let url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=49c4efe66de135752774b08713d441fb"+"&units=metric" ;
    
    sendRequest5(url);
}

function sendRequest1(url){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let data = JSON.parse(xmlhttp.responseText);
            
            let weather={};
            weather.temperature=data.list[0].main.temp;
            weather.humidity= data.list[0].main.humidity;
            weather.description=data.list[0].weather[0].description;
            weather.icon=data.list[0].weather[0].icon;
            weather.date=data.list[0].dt_txt;
            display1(weather);
        }
        
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function display1(weather){
    temperature1.innerHTML= weather.temperature;
    humidity1.innerHTML = weather.humidity;
    date1.innerHTML=weather.date;
    description1.innerHTML = weather.description;
    icon1.src = "http://openweathermap.org/img/w/"+weather.icon+".png";

    

    
    
}

function sendRequest2(url){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let data = JSON.parse(xmlhttp.responseText);
            
            let weather={};
            weather.temperature=data.list[8].main.temp;
            weather.humidity= data.list[8].main.humidity;
            weather.description=data.list[8].weather[0].description;
            weather.icon=data.list[8].weather[0].icon;
            weather.date=data.list[8].dt_txt;
            display2(weather);
        }
        
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function display2(weather){
    temperature2.innerHTML= weather.temperature;
    humidity2.innerHTML = weather.humidity;
    date2.innerHTML=weather.date;
    description2.innerHTML = weather.description;
    icon2.src = "http://openweathermap.org/img/w/"+weather.icon+".png";

    

    
    
}

function sendRequest3(url){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let data = JSON.parse(xmlhttp.responseText);
            
            let weather={};
            weather.temperature=data.list[16].main.temp;
            weather.humidity= data.list[16].main.humidity;
            weather.description=data.list[16].weather[0].description;
            weather.icon=data.list[16].weather[0].icon;
            weather.date=data.list[16].dt_txt;
            display3(weather);
        }
        
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function display3(weather){
    temperature3.innerHTML= weather.temperature;
    humidity3.innerHTML = weather.humidity;
    date3.innerHTML=weather.date;
    description3.innerHTML = weather.description;
    icon3.src = "http://openweathermap.org/img/w/"+weather.icon+".png";

    

    
    
}

function sendRequest4(url){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let data = JSON.parse(xmlhttp.responseText);
            
            let weather={};
            weather.temperature=data.list[24].main.temp;
            weather.humidity= data.list[24].main.humidity;
            weather.description=data.list[24].weather[0].description;
            weather.icon=data.list[24].weather[0].icon;
            weather.date=data.list[24].dt_txt;
            display4(weather);
        }
        
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function display4(weather){
    temperature4.innerHTML= weather.temperature;
    humidity4.innerHTML = weather.humidity;
    date4.innerHTML=weather.date;
    description4.innerHTML = weather.description;
    icon4.src = "http://openweathermap.org/img/w/"+weather.icon+".png";

    

    
    
}

function sendRequest5(url){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let data = JSON.parse(xmlhttp.responseText);
            
            let weather={};
            weather.temperature=data.list[32].main.temp;
            weather.humidity= data.list[32].main.humidity;
            weather.description=data.list[32].weather[0].description;
            weather.icon=data.list[32].weather[0].icon;
            weather.date=data.list[32].dt_txt;
            display5(weather);
        }
        
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function display5(weather){
    temperature5.innerHTML= weather.temperature;
    humidity5.innerHTML = weather.humidity;
    date5.innerHTML=weather.date;
    description5.innerHTML = weather.description;
    icon5.src = "http://openweathermap.org/img/w/"+weather.icon+".png";

    

    
    
}
