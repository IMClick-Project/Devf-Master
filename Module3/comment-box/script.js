// Proyecto: Intro al DOM en JavaScript
// Problema: Caja de Comentarios

const formulario = document.getElementById("formularioComentario");
const campoComentario = document.getElementById("comentario");
const listaComentarios = document.getElementById("listaComentarios");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const textoComentario = campoComentario.value;

    if (textoComentario.trim() === "") {
        alert("Por favor escribe un comentario.");
        return;
    }

    const fecha = new Date();

    const comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");

    const texto = document.createElement("p");
    texto.textContent = textoComentario;

    const fechaComentario = document.createElement("p");
    fechaComentario.classList.add("fecha");
    fechaComentario.textContent = "Publicado el: " + fecha.toLocaleString();

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("boton-eliminar");

    botonEliminar.addEventListener("click", function () {
        comentarioDiv.remove();
    });

    comentarioDiv.appendChild(texto);
    comentarioDiv.appendChild(fechaComentario);
    comentarioDiv.appendChild(botonEliminar);

    listaComentarios.appendChild(comentarioDiv);

    campoComentario.value = "";
});