import React from "react";

export const Uno = () => {
  // PRACTICA DE SPRET OPERATOR
  //   const arreglo = [1,2,3,4]
  // // Usar push no es recomendado porque modifica el objeto
  // // Se recomienda hacer un nuevo objeto que traiga la info del primero y a ese agregarle lo que se desea
  //   const arreglo2 = [...arreglo, 5]

  //   console.log(arreglo)
  //   console.log(arreglo2)

  // =====================================================
  // PRACTICA DE FXS
  //  function getUsuarioActivo (nombre) {
  //    return {
  //     // es buena practica poner coma despues de cada valor
  //      uid: "ABC123",
  //      username: nombre
  //    }
  //  }
  // tarea transf esta fx a fx de flecha y retornar un objeto implicito (es decir que no salga el return)

  // const usuarioActivo = (nombre) =>
  //   // Poner entre parentesis el objeto hace un return implicito
  //   ({
  //     uid: "ABC123",
  //     username: nombre,
  //   });

  // console.log(usuarioActivo("Mario"));
  // =====================================================
  // DESESTRUCTURACION
  // const persona = {
  //   nombre: "Tony",
  //   edad: 45,
  //   clave: "Iroman",

  //   // rango: "subteniente"
  // };

  // // esta funcion se llama antes retornar persona. Es una fx que retorna un objeto
  // const useContexto = ({ nombre, edad, clave, rango = "capitan" }) => {
  //   // algo que tiene interesante aquí es que podemos poner valores por defecto
  //   // a pesar de que el objeto no tenga la propiedad rango
  //   // si el objeto tiene un valor asignado usa el asignado y no el por defecto que pasamos por parametro
  //   console.log(nombre, edad, clave, rango);

  //   return {
  //     nombreClave: clave,
  //     anios: edad,
  //     latlong: {
  //       lat: 123,
  //       long: 456,
  //     },
  //   };
  // };

  // const avenger = useContexto(persona);
  // console.log(avenger);

  // // para obtener los valores del avenger por medio de la destructuracion podemos hacer lo siguiente:
  // // supongamos que necesitamos acceder a los valores de latlong, se haría de la siguiente forma
  // const {
  //   nombreClave,
  //   anios,
  //   latlong: { lat, long },
  // } = useContexto(persona);

  // console.log(nombreClave, anios, lat, long);
  // =====================================================

  return (
    <>
      <h1>Hola practica JS</h1>
    </>
  );
};
