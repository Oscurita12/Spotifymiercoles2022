//Pasos para consumir un API con JS puro

let cajoncito=document.getElementById("cajoncito")

//1. Declaro la URI (Pa onde voy)
const URI="https://api.spotify.com/v1/artists/4qaGGZulMdVRK7uDgGAaNq/top-tracks?market=US"

//2. DEclaro los parametros de la petición (Qué voy hacer?)

const TOKEN="Bearer BQCGn_XGeT2j0rteMp6KPwPTjYvqGgleeSNcaW6S5BIpPtJ2MYpFIRyoVfPQPQAU7XSFb2nzniudbqtIjsGwvzcRLjdQE0NsMnnEC1k67XVswelgFg7mt0Gyg1VkrZuLgsCD6e76qNh6slK-D5k0NO3Ic-YS3zs"

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

    respuesta.tracks.forEach(function(tracks){
        console.log(tracks.preview_url)
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})

