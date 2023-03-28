/* Código con callback hell */
import { doTask1, doTask2, doTask3 } from './tasks';

function runCode() {
    const strings = [];
    return doTask1()
        .then(rta1 => {
            strings.push(rta1);
            return doTask2(rta1);
        })
        .then(rta2 => {
            strings.push(rta2);
            return doTask3(rta2);
        })
        .then(rta3 => {
            strings.push(rta3);
            resolve(strings)
        })
}

runCode().then(response => console.log(response));