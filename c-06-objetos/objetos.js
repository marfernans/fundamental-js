var marius = {
  nombre: "Marius",
  apellido: "Fedz",
  edad: 15
};
var bella = {
  nombre: "Bella",
  apellido: "Naomik",
  edad: 18
};

function imprimirNombreEnMayuscula({ nombre }) {
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayuscula(marius);
imprimirNombreEnMayuscula(bella);
imprimirNombreEnMayuscula({ nombre: "Fulanito" });
