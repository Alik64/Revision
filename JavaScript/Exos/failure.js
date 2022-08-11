// let experience = 0;
// function neverGiveUp(failure) {
//   if (failure) {
//     console.log("failure");
//     experience += 1;
//     return "Try again";
//   } else {
//     console.log("You did it BMF! 👊🏻");
//     experience += 1;
//     return experience;
//   }
// }
// neverGiveUp(true);
// console.log("experience : ", experience);

const neverGiveUp = (failure) => {
  let experience = 0;

  for (let i = 0; i < failure.length; i++) {
    experience += 1;
    console.log("TRY again");
  }
  console.log("You did it BMF 👊🏻 !");
  return experience;
};

neverGiveUp([1, 1, 1, 1, 1, 1, 1, 1, 1]);
