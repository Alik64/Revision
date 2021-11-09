// Ajouter l'image

const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#clickMe");
const pageNumberOne = document.querySelector("#pageNumber-one");

function onDataReceived(data) {
  data.forEach((el) => {
    const img = document.createElement("img");
    img.src = el.thumbnail;
    resultBlock.appendChild(img);
  });
}

clickMeButton.addEventListener("click", () => {
  const promise = getImages(pageNumberOne.value);
  promise.then(onDataReceived);
});

// Ajouter l'image
// 2
const getTaskBtn = document.querySelector("#get-tasks");
const divHomeWork = document.querySelector("#homeWork");
const pageNumberTwo = document.querySelector("#pageNumber-two");

getTaskBtn.addEventListener("click", () => {
  const promise = getTasks();
  promise.then(onDataReceived);
});

// Changer de fond de DIV
// 3
const divThree = document.querySelector(".trois");
const changeFond = document.querySelector("#changeFond");
const pageNumberThree = document.querySelector("#pageNumber-three");

function fondChanger(data) {
  data.forEach((photo) => {
    const source = photo.original;
    divThree.style.backgroundImage = `url('${source}')`;
    divThree.style.backgroundSize = "contain";
    divThree.style.backgroundPosition = "center";
    divThree.style.backgroundRepeat = "no-repeat";
  });
}

changeFond.addEventListener("click", () => {
  const promise = getImages(pageNumberThree.value);
  promise.then(fondChanger);
});
