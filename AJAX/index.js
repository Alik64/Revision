const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#clickMe");
const pageNumberOne = document.querySelector("#page-number-one");

function onDataReceived(data) {
  data.forEach((el) => {
    const img = document.createElement("img");
    img.src = el.thumbnail;
    resultBlock.appendChild(img);
  });
}

clickMeButton.addEventListener("click", () => {
  getImages(pageNumberTwo.value, onDataReceived);
});

// Home work
// 2
const ajoutImage = document.querySelector("#ajoutImage");
const divHomeWork = document.querySelector("#homeWork");
const pageNumberTwo = document.querySelector("#page-number-two");

function ajoutImages(data) {
  data.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.thumbnail;
    divHomeWork.appendChild(img);
  });
}

ajoutImage.addEventListener("click", () => {
  getImages(pageNumberOne.value, ajoutImages);
});

// Home work
// 3
const divThree = document.querySelector(".trois");
const changeFond = document.querySelector("#changeFond");
const pageNumberThree = document.querySelector("#page-number-three");

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
  getImages(pageNumberThree.value, fondChanger);
});
