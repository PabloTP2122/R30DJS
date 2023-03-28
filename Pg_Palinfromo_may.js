/* En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.
Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista,
 la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima,
debes devolver el primer palíndromo encontrado en la lista.
Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás. */

function findLargestPalindrome(words) {
    // Tu código aquí 👈
    // Verificando los palindromos y creando array
    const isAPal = words.map((word) => {
        const clean_word = word.toLowerCase().replace('/[\W_]/g', '');
        const reverse_word = clean_word.split('').reverse().join('');
        const isPal = reverse_word === clean_word;
        let pal = [];
        if (isPal === true) {
            pal.push(clean_word)
        }
        pal = pal.join('');
        return pal;
    });
    // Quita los vacíos
    const noEmptyStrings = isAPal.filter((str) => str !== '');
    // Ninguno es palíndromo devuelve null
    let longest;
    if (noEmptyStrings.length > 0) {
        // Palindromo más grande
        longest = noEmptyStrings.reduce((long, curr) => {
            return curr.length > long.length ? curr : long;
        });
    } else {
        return null;
    }

    return longest;

}

//findLargestPalindrome(["ra", "lo", "world", "hello"]);
findLargestPalindrome(["racecar", "level", "world", "hello"]);