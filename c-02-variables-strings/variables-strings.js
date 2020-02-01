const nombre = 'Mario', apellido = 'Fernandez' 

var nombreEnMayuscula = nombre.toUpperCase()
var apellidoEnMinuscula = apellido.toLowerCase()

var primerCaracterDelNombre = nombre.charAt(0) 

var cantidadDeLetrasDelNombre = nombre.length

// var nombreCompleto = nombre +' '+ apellido


//Interpolación de texto
const nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

// var str = nombres.charAt(1) + nombres.charAt(2)

var str = nombre.substr(1, 2)

var str = nombre.substr(-1)