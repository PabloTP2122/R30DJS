/*En este desafío tendrás que crear una calculadora mediante el uso de closures.

La calculadora debe contar con los siguientes métodos:

add: recibe un número, lo suma al total y devuelve el resultado
subtract: recibe un número, lo resta al total y devuelve el resultado
multiply: recibe un número, lo multiplica al total y devuelve el resultado
divide: recibe un número, lo divide al total y devuelve el resultado
clear: reinicia el total a 0 y devuelve el resultado
getTotal: devuelve el total actual. */

function createCalculator(number = 0) {
    // Tu código aquí 👈
    return {
        add: function(num) {
            number = number + num;
            return number;
        },
        subtract: function(num) {
            number = number - num;
            return number;
        },
        multiply: function(num) {
            number = number * num;
            return number;
        },
        divide: function(num) {
            number = number / num;
            return number;
        },
        clear: function() {
            number = 0;
            return number;
        },
        getTotal: function() {
            return number;
        }
    }
}


const calculator = createCalculator()
calculator.add(15)
calculator.subtract(10)