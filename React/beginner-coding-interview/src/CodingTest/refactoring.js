// Simplify / Refactorize this function
const calculateDiscount = (amount, type, years) => {
    result = 0
    disc = (years > 5) ? 5 / 100 : years / 100;
    if (type === 1) {
        result = amount
    }
    else if (type === 2) {
        result = (amount - (0.1 * amount)) - disc * (amount - (0.1 * amount));
    }
    else if (type === 3) {
        result = (0.7 * amount) - disc * (0.7 * amount);
    }
    else if (type === 4) {
        result = (amount - (0.5 * amount)) - disc * (amount - (0.5 * amount));
    }
    return result;
}

const assert = (expected, actual) => {
    if (expected !== actual)
        console.warn(`${actual} is not equal to ${expected}`);
}
assert(99, calculateDiscount(100, 1, 1));