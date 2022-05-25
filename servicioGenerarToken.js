//1. URI (Para dónde voy?)

const URI="https://accounts.spotify.com/api/token"

//2. Almaceno los datos que voy a enviar 

let dato1='client_id=28e516b95be149c4b1fa2d898c9b9f52'
let dato2='client_secret=2a7f950fee974ef784a6de59a17f8074'
let dato3='grant_type=client_credentials'

//3. Configuro la petición 
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4. Consumir el servicio
export async function generarToken(){
    
    let respuesta= await fetch(URI,PETICION)
    return(respuesta.json())
}