var marius = {
    nombre: "Marius",
    apellido: "Fedz",
    edad: 5.000
  };
  var bella = {
    nombre: "Bella",
    apellido: "Naomik",
    edad: 18
  };


  function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var {nombre} = persona
        console.log(nombre.toUpperCase());

  }

  function imprimirNombreYEdad(persona){
      var { nombre, edad} = persona
      
      console.log (`Hola soy ${nombre} tengo ${edad} siglos de edad`)
    }
    
    
   
 

  imprimirNombreEnMayusculas(marius)
  imprimirNombreEnMayusculas(bella)
  //imprimirNombreEnMayusculas({nombre: 'Perencejito'})
 
  imprimirNombreYEdad(marius)


