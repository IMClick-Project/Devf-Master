// Evaluador de Notas con Mensajes Personalizados

let nota = 98;

if (nota >= 0 && nota <= 100) {
    console.log("El alumno obtuvo una nota de: " + nota);

    if (nota >= 90) {
        console.log("El estudiante aprueba con Excelente.");
    } else if (nota >= 75 && nota <= 89) {
        console.log("El estudiante aprueba con Bien.");
    } else if (nota >= 60 && nota <= 74) {
        console.log("El estudiante aprueba con Suficiente.");
    } else if (nota < 60) {
        console.log("El estudiante no aprueba.");
    }
} else {
    console.log("La nota debe ser entre 0 y 100.");
}