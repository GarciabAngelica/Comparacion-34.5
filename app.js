//1 Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));
let num3 = Number(prompt("Ingrese el tercer número:"));

//2 Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.

//4 Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
let mayor = 0;
let centro = 0;
let menor = 0;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3) {
        centro = num2;
        menor = num3;
    } else if (num3 >= num2) {
        centro = num3;
        menor = num2;
    } else if (num1 === num2 || num1 === num3) {
        console.log(`Los números ${num1} y ${num2} son iguales y el número ${num3} es diferente.` || `Los números ${num1} y ${num3} son iguales y el número ${num2} es diferente.`);
    }
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    if (num1 >= num3) {
        centro = num1;
        menor = num3;
    } else if (num3 >= num1) {
        centro = num3;
        menor = num1;
    } else if (num2 === num1 || num2 === num3) {
        console.log(`Los números ${num2} y ${num1} son iguales y el número ${num3} es diferente.` || `Los números ${num2} y ${num3} son iguales y el número ${num1} es diferente.`);
    }
} else {
    mayor = num3;
    if (num1 >= num2) {
        centro = num1;
        menor = num2;
    } else if (num2 >= num1) {
        centro = num2;
        menor = num1;
    } else if (num3 === num1 || num3 === num2) {
        console.log(`Los números ${num3} y ${num1} son iguales y el número ${num2} es diferente.` || `Los números ${num3} y ${num2} son iguales y el número ${num1} es diferente.`);
    }
}
//3 Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
console.log(`Ordenados de mayor a menor son: ${mayor}, ${centro}, ${menor}`);
console.log(`Ordenados de menor a mayor son: ${menor}, ${centro}, ${mayor}`);
