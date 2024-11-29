function printFizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        const modThree = i % 3 === 0;
        const modFive = i % 5 === 0;

        if (modThree && modFive) {
            console.log("FizzBuzz");
        } else if (modThree) {
            console.log("Fizz")
        } else if (modFive) {
            console.log("Buzz");
        } else {
            console.log(i)
        }

    }
}

printFizzBuzz(50)