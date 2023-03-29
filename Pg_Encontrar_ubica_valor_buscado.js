export function searchValue(array, value) {

    let r = 0;
    let c = 0;
    // Determinar el tamaño de la matriz
    const cols = array.length;
    const rows = array[0].length;
    // Saber si existe el valor 
    const existValue = array.flatMap(x => x).includes(value);

    if (existValue) {
        for (let i = 0; i < cols; i++) {
            // Booleano para saber en cuál lugar del array se encuentra el valor
            const val = array[i].includes(value);
            // Saber en cuál fila se encuentra el valor buscado
            val ? r = i : console.log(`En la fila ${i} no está`);
            // Saber en cuál columna se encuentra el valor buscado
            val ? c = array[r].findIndex(ind => ind === value) : '';
        }
    } else {
        throw new Error("Valor no encontrado");
    }

    return {
        /*dim: `${rows} x ${cols}`,*/
        row: r,
        column: c
    }
}

const array = [
    [1, 2, 3],
    [4, 1, 4],
    [7, 3, 4],
    [7, 5, 4],
]

const value = 5

searchValue(array, value)