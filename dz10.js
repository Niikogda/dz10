//* Завдання 1
// Дано масив чисел. Потрібно визначити, чи є у ньому хоча б одне від'ємне число. Якщо є, то повернути масив, в якому кожен елемент масиву буде додатнім числом.

// Вхідні дані: масив чисел.

// Вихідні дані: масив додатніх чисел або повідомлення "No negative numbers found".

// Приклад вхідних даних:
// let arr = [3, -2, 5, 6, -8, 2];

function makeAllPositive(arr) {
  const hasNegative = arr.some((number) => number < 0);

  if (hasNegative) {
    return arr.map((number) => Math.abs(number));
  } else {
    return "No negative numbers found";
  }
}

let arr = [3, -2, 5, 6, -8, 2];
console.log(makeAllPositive(arr));

//* Завдання 2
// Дано масив чисел. Потрібно знайти суму всіх додатних чисел у масиві, які є кратними числу 3.

// Вхідні дані: масив чисел

// Вихідні дані: сума всіх додатних чисел у масиві, які є кратними числу 3.

// Приклад вхідних даних: [3, 5, -9, 7, 2, 8, 10, -6]

// Приклад вихідних даних: 9
function sumOfPositivesDivisibleByThree(arr) {
  const filteredArr = arr.filter((number) => number > 0 && number % 3 === 0);
  const sum = filteredArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}
let arr1 = [3, 5, -9, 7, 12, 8, 10, -6];
console.log(sumOfPositivesDivisibleByThree(arr1));
