import {obtenerCanciones} from './servicioGenerarCanciones.js'

import {pintarCanciones} from '/pintarCanciones.js'

//llamar a la función generarToken
let canciones=await obtenerCanciones()

//llamar la funcion pintarcanciones
pintarCanciones(canciones.tracks)