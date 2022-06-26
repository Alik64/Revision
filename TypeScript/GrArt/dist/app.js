"use strict";
const a = "Hello world!";
const n = 13;
const b = true;
const d = null;
const arr = ["ts", "is", "fun"];
const arrAny = ["ts", 4, "fun", null, undefined, true];
const user = {
    firstname: "John",
    lastname: "Doe",
};
/*
const user2: { firstname: string; lastname?: string } = {
  firstname: "John",
};
const user3: { firstname: string; [key: string]: string } = {
  firstname: "John",
  lastname: "Doe",
  city: "Miami",
};
const date: Date = new Date();
const cb: Function = (e: MouseEvent): void => {};
const cb2: (e: MouseEvent) => void = (e: MouseEvent): void => {};
const cb3: (e: MouseEvent) => void = (e: MouseEvent): number => {
  return 3;
};
function printId(id: number): void {
  console.log(id.toString());
}

const compteur = document.querySelector("#compteur") as HTMLButtonElement;
const compteur2 = <HTMLButtonElement>document.querySelector("#compteur");

function printId2(id: number | string): void {
  console.log(id.toString());
}

*/
const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
if (compteur) {
    compteur.addEventListener("click", increment);
}
// Type Narrowing
function printId(id) {
    if (typeof id === "number") {
        console.log((id * 3).toString()); // id => number
    }
    else {
        console.log(id.toUpperCase());
    }
}
