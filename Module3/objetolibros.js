// Proyecto: Objetos en JavaScript
// Problema: Crear objeto a partir de un Libro

let libro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    estado: "disponible",
    capitulos: ["Capítulo 1", "Capítulo 2", "Capítulo 3"],

    describirLibro: function () {
        console.log(
            "Libro titulado " + this.titulo +
            ", escrito por " + this.autor +
            " en el año " + this.anio +
            ", el estado es: " + this.estado + "."
        );
    },

    agregarCapitulo: function (capitulo) {
        this.capitulos.push(capitulo);
        console.log("Capítulo agregado: " + capitulo);
    },

    eliminarCapitulo: function (capitulo) {
        let posicion = this.capitulos.indexOf(capitulo);

        if (posicion !== -1) {
            this.capitulos.splice(posicion, 1);
            console.log("Capítulo eliminado: " + capitulo);
        } else {
            console.log("El capítulo no existe en la lista.");
        }
    },

    mostrarCapitulos: function () {
        console.log("Capítulos del libro:");

        for (let i = 0; i < this.capitulos.length; i++) {
            console.log((i + 1) + ". " + this.capitulos[i]);
        }
    }
};

// Ejemplos de uso
libro.describirLibro();

libro.mostrarCapitulos();

libro.agregarCapitulo("Capítulo 4");
libro.mostrarCapitulos();

libro.eliminarCapitulo("Capítulo 2");
libro.mostrarCapitulos();

libro.eliminarCapitulo("Capítulo 5");
libro.mostrarCapitulos();