//Pasos para consumir un API con JS puro

//1. Declaro la URI (Pa onde voy)
const URI="https://api.spotify.com/v1/artists/4qaGGZulMdVRK7uDgGAaNq/top-tracks?market=US"

//2. DEclaro los parametros de la petición (Qué voy hacer?)

const TOKEN="Bearer BQDAKhKEnsCWoISkM2br7t064o5lbL7BR_EFcqX4pUM0A9UHydc3vhYh4Crg8o_AYCCtMetBwLN_ZCjwZ_fhKTGj30cw1Gb7MGSuEwuTpUPPbUQrsRdf42C-AvV46QlvGWZXz7W0d06k7jiwSlB2EXGdMS97EB0"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//3. Declaro el fetch (Voy al servidor ome)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta) //respuesta es un objeto
    console.log(respuesta.tracks)
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
})
.catch(function(respuesta){
    console.log(respuesta)
})