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

function listaCompleta(barcelona) { //aca va el for de lo que quiero que haga 
  console.log(barcelona)
}


let barcelona; // despues de saber la estructura de la ubicacione de mis objetos lo debo poner de nuevo al lado de barcelona = JSON.parse(texto);

function imprimir(texto){ //callback
  barcelona = JSON.parse(texto);
  listaCompleta(barcelona)
}


httpGet("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/753692/", imprimir)


/*barcelona["title"]
"Barcelona"
barcelona["consolidated_weather"][0]["the_temp"]
23.025
barcelona["consolidated_weather"][0]["applicable_date"]
"2019-10-17" */