const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#clickMe");
const pageNumber = document.querySelector("#page-number");
// Home work
const ajoutImage = document.querySelector("#ajoutImage");
const divHomeWork = document.querySelector("#homeWork");
const pageNumberHW = document.querySelector("#page-number-left");

function onDataReceived(data) {
  data.forEach((el) => {
    const img = document.createElement("img");
    img.src = el.thumbnail;
    resultBlock.appendChild(img);
  });
}

function ajoutImages(data) {
  data.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.thumbnail;
    divHomeWork.appendChild(img);
  });
}

ajoutImage.addEventListener("click", () => {
  getImages(pageNumberHW.value, ajoutImages);
});

clickMeButton.addEventListener("click", () => {
  getImages(pageNumber.value, onDataReceived);
});
