movePlayer(100, "left")
  .then(() => movePlayer(400, "left"))
  .then(() => movePlayer(10, "right"))
  .then(() => movePlayer(300, "left"));

async function playerStart() {
  const firstMove = await movePlayer(100, "left");
  await movePlayer(400, "left");
  await movePlayer(10, "right");
  await movePlayer(300, "left");
}
