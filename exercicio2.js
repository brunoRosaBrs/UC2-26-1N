
const numbers = [11, 15, 18, 67, 30, 56];
let maior = null;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}
console.clear()
console.log(`O maior numero eh ${maior}`);

