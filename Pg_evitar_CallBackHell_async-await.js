export async function doTask1() {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve('Task 1'), 300);
    })
}

export async function doTask2() {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve('Task 2'), 300);
    })
}

export async function doTask3() {
    return new Promise((resolve) => {
        window.setTimeout(() => resolve('Task 3'), 300);
    })
}

import { doTask1, doTask2, doTask3 } from './tasks';

export async function runCode() {
    const strings = [];
    const rta1 = await doTask1();
    strings.push(rta1);
    const rta2 = await doTask2();
    strings.push(rta2);
    const rta3 = await doTask3();
    strings.push(rta3);
    return strings;

}