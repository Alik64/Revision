/**
 * From a collection of numbers inside an array, returns the closest value to zero.
 */
function closestToZero(numbers) {
  if (!numbers.length) {
    return 0;
  }

  let closest = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (closest === 0) {
      closest = numbers[i];
    } else if (numbers[i] > 0 && numbers[i] <= Math.abs(closest)) {
      closest = numbers[i];
    } else if (numbers[i] < 0 && -numbers[i] < Math.abs(closest)) {
      closest = numbers[i];
    }
  }

  return closest;
}
