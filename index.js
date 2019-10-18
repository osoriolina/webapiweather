function httpGet(theUrl, callback) {

  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl);

  xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest")
  
  xmlHttp.send();
}


function temperaturaDias(ciudad) {
  let arrTemperaturaDias = ciudad["consolidated_weather"]

  for (let i = 0; i < arrTemperaturaDias.length; i++) {
    let objTemperaturaDia = arrTemperaturaDias[i]
    console.log(objTemperaturaDia["the_temp"])
  }
}

// function para determinar el color del tema (CSS) tema dependiendo de si llueve, hace sol, etc - index: weather_state_name

function tiempo(attr) {
let estilo = "";

  switch (attr) {
      case "Light Cloud": //crear una clase para cada uno 
        estilo = "lightCloud"
        break;

      case "Heavy Cloud":
        estilo = "heavyCloud"  
        break;

      case "Light Rain":
        estilo = "lightRain";
        break;

      case "Showers":
        estilo = "showers";
        break;

      case "Heavy Rain":
        estilo = "heavyRain";
        break;  

      case "Snow":
        estilo = "snow";
        break;

      case "Sleet":
        estilo = "sleet";
        break;

      case "Hail":
        estilo = "hail";
        break;

      case "Thunderstorm":
        estilo = "thunderstorm";
        break;

      case "Clear":
        estilo = "clear";
        break;

      default:
        estilo = "default";

  }

  return estilo; 
}



/* 
function temperaturaActual(ciudad) {
  let objTemperaturaDia = ciudad["consolidated_weather"][0]
  console.log("HOY " + objTemperaturaDia["the_temp"])
} */

function temperaturaActual(ciudad) {
    let objTemperaturaDia = ciudad["consolidated_weather"][0]
  
  // imprime el numero de la temperatura GRANDE
    let imprimeTemperatura = document.querySelector("#result .temperatura")
    imprimeTemperatura.innerHTML = Math.round(objTemperaturaDia["the_temp"])

  // muestra el date del dia actual
    let imprimeDiaActual = document.querySelector("#result .date")
    imprimeDiaActual.innerHTML = objTemperaturaDia["applicable_date"]

  let claseNueva = tiempo( objTemperaturaDia["weather_state_name"])

  let classTiempoDia = document.querySelector(".bg__color") //tal vez tenga que usar query selector all
  classTiempoDia.className += " " + claseNueva;


  // selecciona la imagen para poner en la CARD dependiendo de la temperatura

    let imagen = "assets/default.png"

    //TODO hacer ifs para definir la imagen

    if (objTemperaturaDia["the_temp"] >= 22 && objTemperaturaDia["the_temp"]<= 30) {
      imagen = "assets/sun.png"
    } else if (objTemperaturaDia["the_temp"] > 0 && objTemperaturaDia["the_temp"]<= 21) {
      imagen = "assets/cold.png"
    }

    let imgTemperatura = document.querySelector("#result img")
    imgTemperatura.src = imagen

    //imprimir el nombre de la ciudad 

    let imprimeNombreCiudad = document.querySelector(".nombre__ciudad")
    imprimeNombreCiudad.innerHTML = ciudad["title"]

   


}

 // despues de saber la estructura de la ubicacione de mis objetos lo debo poner de nuevo al lado de barcelona = JSON.parse(texto);

function imprimir(texto){ //callback
  let ciudad = JSON.parse(texto);

  temperaturaActual(ciudad)
  //temperaturaDias(ciudad)

}


httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/753692/", imprimir)


/*barcelona["title"]
"Barcelona"
barcelona["consolidated_weather"][0]["the_temp"]
23.025
barcelona["consolidated_weather"][0]["applicable_date"]
"2019-10-17" 
ciudad["consolidated_weather"][0]["weather_state_name"]*/