const bibliotecaJSON = `{
  "libros": [
    {
      "id": 1,
      "titulo": "Cien años de soledad",
      "autor": "Gabriel García Márquez",
      "genero": "Realismo mágico",
      "disponible": true
    },
    {
      "id": 2,
      "titulo": "1984",
      "autor": "George Orwell",
      "genero": "Distopía",
      "disponible": true
    }
  ]
}`;

let biblioteca = JSON.parse(bibliotecaJSON);

function leerDatos(callback) {
  console.log("Leyendo información de la biblioteca...");

  setTimeout(() => {
    callback(null, biblioteca);
  }, 1000);
}

function guardarDatos(datos, callback) {
  console.log("Guardando cambios...");

  setTimeout(() => {
    biblioteca = datos;
    const contenidoJSON = JSON.stringify(biblioteca, null, 2);

    callback(null, contenidoJSON);
  }, 1000);
}

function mostrarLibros(callback) {
  leerDatos((error, datos) => {
    if (error) {
      console.error("Error al leer los libros:", error);
      return;
    }

    console.log("\nInventario de libros:");

    datos.libros.forEach((libro) => {
      const estado = libro.disponible ? "Disponible" : "Prestado";

      console.log(
        `${libro.id}. ${libro.titulo} - ${libro.autor} - ${libro.genero} - ${estado}`
      );
    });

    if (callback) {
      callback();
    }
  });
}

function agregarLibro(titulo, autor, genero, disponible, callback) {
  leerDatos((error, datos) => {
    if (error) {
      console.error("Error al leer la biblioteca:", error);
      return;
    }

    const nuevoLibro = {
      id: datos.libros.length + 1,
      titulo,
      autor,
      genero,
      disponible
    };

    datos.libros.push(nuevoLibro);

    guardarDatos(datos, (errorGuardado) => {
      if (errorGuardado) {
        console.error("Error al guardar el libro:", errorGuardado);
        return;
      }

      console.log(`\nLibro agregado: "${titulo}"`);

      if (callback) {
        callback();
      }
    });
  });
}

function actualizarDisponibilidad(titulo, nuevoEstado, callback) {
  leerDatos((error, datos) => {
    if (error) {
      console.error("Error al leer la biblioteca:", error);
      return;
    }

    const libroEncontrado = datos.libros.find(
      (libro) => libro.titulo.toLowerCase() === titulo.toLowerCase()
    );

    if (!libroEncontrado) {
      console.log(`\nNo se encontró el libro "${titulo}".`);

      if (callback) {
        callback();
      }

      return;
    }

    libroEncontrado.disponible = nuevoEstado;

    guardarDatos(datos, (errorGuardado) => {
      if (errorGuardado) {
        console.error("Error al actualizar el libro:", errorGuardado);
        return;
      }

      const estado = nuevoEstado ? "disponible" : "prestado";

      console.log(`\n"${libroEncontrado.titulo}" ahora está ${estado}.`);

      if (callback) {
        callback();
      }
    });
  });
}

// Aquí comienza la ejecución del programa.
mostrarLibros(() => {
  agregarLibro(
    "El principito",
    "Antoine de Saint-Exupéry",
    "Fábula",
    true,
    () => {
      actualizarDisponibilidad("1984", false, () => {
        mostrarLibros();
      });
    }
  );
});