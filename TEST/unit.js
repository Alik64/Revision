const square = number => {
    if (number === 1) {
        return 1
    }
    console.log("square of ", number, "is ", Math.pow(number, 2))
}

square(4)

const validateValue = value => {
    if (value < 0 || value > 100) {
        console.log(value, "false")
        return
    }
    console.log(value, "true")
    return
}
// Test
validateValue(50) // centre de carré
validateValue(0) // frontière de carré
validateValue(100) // frontière de carré
validateValue(-50) // au dela de carré
validateValue(150) // au dela de carré

