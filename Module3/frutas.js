// Proyecto: Clasificación de Frutas

let frutas = [
    "manzana",
    "platano",
    "naranja",
    "manzana",
    "uva",
    "platano",
    "manzana",
    "naranja",
    "fresa",
    "uva"
];

let contadorFrutas = {};

// Solución usando ciclo for
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++;
    } else {
        contadorFrutas[fruta] = 1;
    }
}

console.log("Cantidad de frutas por tipo:");

for (let fruta in contadorFrutas) {
    console.log(fruta + ": " + contadorFrutas[fruta]);
}