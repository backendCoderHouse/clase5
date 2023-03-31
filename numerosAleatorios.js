// Generar 10000 números aleatorios en un rango de 1 a 20
const min = 1;
const max = 20;
const count = 10000;
const randomNumbers = [];

for (let i = 0; i < count; i++) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  randomNumbers.push(randomNumber);
}

// Contar la cantidad de veces que cada número salió
const counts = {};

randomNumbers.forEach((number) => {
  if (!counts[number]) {
    counts[number] = 1;
  } else {
    counts[number]++;
  }
});

// Mostrar los resultados por consola
console.log(counts);
