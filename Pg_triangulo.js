/* En este desafío, debes dibujar un triángulo isósceles usando bucles.
Recibirás dos parámetros: size y character, que definen el tamaño y el carácter con el que se debe construir
el triángulo, respectivamente. Además, el triángulo debe estar alineado a la derecha, lo que significa que la
columna más derecha del triángulo debe estar en el borde derecho de la consola.
Recuerda que para hacer el salto de línea debes usar "\n", no olvides removerla de la última parte. */

// Working with functions
function printTriangle(size, character) {
  // Tu código aquí 👈
  let array = [];
  let rta = "";
  let iz = 1;
  for (let i = 0; i <= size; i++) {
    let d = i;
    let spaces = " ".repeat(size - d);
    let characters = character.repeat(i);
    let figure = `${spaces}${characters}`;
    array.push(figure);
  }
  rta = array.join("\n");
  return rta;
}

printTriangle(5, "p");
// Example output
console.log("    *\n    **\n   ***\n  ****\n *****");
// Working without functions
function printTriangle(size, character) {
  let triangle = "";
  let characterNumber = 1;
  while (characterNumber <= size) {
    for (let j = 0; j < size - characterNumber; j++) {
      triangle += " ";
    }
    for (let j = 0; j < characterNumber; j++) {
      triangle += character;
    }
    if (characterNumber < size) {
      triangle += `\n`;
    }
    characterNumber++;
  }

  return triangle;
}
printTriangle(5, "8");
