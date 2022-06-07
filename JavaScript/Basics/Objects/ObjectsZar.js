// ------------------- KEY - VALUE -------------------
const player1 = {
  name: "Scorpion",
  hp: 100,
  name_name: true,
  nameName: true,
  100: true,
  $: true,
  _: true,
  attack: function () {
    console.log(" Take this 👊🏻");
  },
  "this is a string": true,
  //1name : false
  //name#fhf : false
};

//console.log("player1.name:", player1.name); // Scorpion
//console.log('player1["hp"]', player1["hp"]); // 100

const count = 100;
//console.log("player1[count] ", player1[count]); // true

player1.weapon = "Knife";
//console.log("player1 ", player1); // Knife

player1.hp = player1.hp - 20;
//console.log("player1.hp ", player1.hp); // 80

delete player1.$;
delete player1["100"];
delete player1._;
delete player1.name_name;
delete player1.nameName;
delete player1["this is a string"];

//console.log("player1 ", player1); //{ name: 'Scorpion', hp: 80, weapon: 'Knife' }
player1.attack();
