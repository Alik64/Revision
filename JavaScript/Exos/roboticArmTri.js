function solve(width, height, length, mass) {
  if (
    (width * height * length > 1000000 ||
      width >= 150 ||
      height >= 150 ||
      length >= 150) &&
    mass >= 20
  ) {
    return "REJECTED";
  } else if (
    width * height * length > 1000000 ||
    width >= 150 ||
    height >= 150 ||
    length >= 150 ||
    mass >= 20
  ) {
    return "SPECIAL";
  } else {
    return "STANDARD";
  }
}
