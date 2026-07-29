const planetas = require("./planetas");

function mostrarPlaneta(planeta, indice) {
  console.log(`\n🪐 Planeta ${indice + 1}`);
  console.log(`Nombre: ${planeta.nombre}`);
  console.log(`Tipo: ${planeta.tipo}`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log("-----------------------------------");
}

function mostrarTodosLosPlanetas() {
  console.log("🚀 EXPLORACIÓN ESPACIAL");
  console.log(`Planetas registrados: ${planetas.length}`);

  planetas.forEach(mostrarPlaneta);
}

function buscarPlaneta(nombre) {
  return planetas.find(
    (planeta) =>
      planeta.nombre.toLowerCase() === nombre.toLowerCase()
  );
}

function mostrarBusqueda(nombre) {
  const planetaEncontrado = buscarPlaneta(nombre);

  console.log("\n🔎 Resultado de búsqueda:");

  if (!planetaEncontrado) {
    console.log(`No se encontró el planeta "${nombre}".`);
    return;
  }

  mostrarPlaneta(planetaEncontrado, planetas.indexOf(planetaEncontrado));
}

mostrarTodosLosPlanetas();

// Funcionalidad adicional
mostrarBusqueda("Marte");