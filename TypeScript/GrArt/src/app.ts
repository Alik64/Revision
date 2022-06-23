/* Syntaxe de Base  */
/* 
const a: string = "Hello world!";
const n: number = 13;
const b: boolean = true;
const d: null = null;
const arr: string[] = ["ts", "is", "fun"];
const arrAny: any[] = ["ts", 4, "fun", null, undefined, true];
const user: { firstname: string; lastname: string } = {
  firstname: "John",
  lastname: "Doe",
};
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

const increment = (e: Event) => {
  e.preventDefault();
  i++;
  const span = compteur?.querySelector("span");
  if (span) {
    span.innerText = i.toString();
  }
};
if (compteur) {
  compteur.addEventListener("click", increment);
}
