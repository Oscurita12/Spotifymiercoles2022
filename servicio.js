//Pasos para consumir un API con JS puro

//1. Declaro la URI (Pa onde voy)
const URI="https://api.spotify.com/v1/artists/4qaGGZulMdVRK7uDgGAaNq/top-tracks?market=US"

//2. DEclaro los parametros de la petición (Qué voy hacer?)

const TOKEN="Bearer BQDS9HUZG8AhOvZaLusBogP9fSdANd1eg5PrIPI6yIfYWKrH8hUEKSD0nMYDbgxd7CsoDnb5tXaSJRJ1kU2fdo329uB5BpbLgxsX0DP-9bQRjMpk8P_LhBsculhodp_VL49F_k1FxbGtXHwcfyLYXUBA8I7AL2M"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//Rutina para consumir API con método POST 
//1. URI (Para dónde voy?)

const URIPOST="https://accounts.spotify.com/api/token"

//2. Almaceno los datos que voy a enviar 

let dato1='client_id=28e516b95be149c4b1fa2d898c9b9f52'
let dato2='client_secret=2a7f950fee974ef784a6de59a17f8074'
let dato3='grant_type=client_credentials'

//Configuro la petición 
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4. Voy al servidor a consumir el servicio
fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token=respuesta.token_type+' '+respuesta.access_token
    console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)
})

//3. Declaro el fetch (Voy al servidor ome)
/*fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta) //respuesta es un objeto
    console.log(respuesta.tracks)  //arreglo de 10 canciones
    pintarCanciones(respuesta.tracks)*/

    /*respuesta.tracks.forEach(function(tracks){
        console.log(tracks.preview_url)
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})

//Función para recorre un arreglop

function pintarCanciones(canciones){

    let fila=document.getElementById("fila")

    canciones.forEach(function(cancion){
        //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //Rutina para llenado 

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card", "h-100", "shadow")

        let imagen=document.createElement("img")
        imagen.classList.add("w-100","img-fluid")
        imagen.src=cancion.album.images[0].url

        let nombre=document.createElement("h5")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        //padres e hijos
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}*/