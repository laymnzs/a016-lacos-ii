/*Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

**Utilize o for...in para resolver**

Exemplo com entrada **`7`**:*/

let user = 7;
const tabuada = [1,2,3,4,5,6,7,8,9,10];
console.log(`A tabuada escolhida foi ${user}`)

for (base in tabuada) {
    base = +base;
    console.log(`${user} x ${tabuada[base]} = ${user*tabuada[base]}`);
}
