const surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
for (let i = 0; i < surfaceN; i++) {
  var inputs = readline().split(" ");
  const landX = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
  const landY = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}

// game loop
while (true) {
  var inputs = readline().split(" ");
  const vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
  console.log(vSpeed < -39 ? "0 4" : "0 0");
}
