
function isPrime(num) {
    if (num <= 1 || num > 1000) {
        console.log("Данные неверны. Пожалуйста, введите число от 2 до 1000.");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(`${num} не является простым числом.`);
            return;
        }
    }

    console.log(`${num} является простым числом.`);
}
isPrime(6)



// git checkout -b main


git add .
