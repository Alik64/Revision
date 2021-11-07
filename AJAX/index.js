const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#clickMe");
const pageNumber = document.querySelector("#page-number");

function successCallback(data) {
  data.forEach((el) => {
    const img = document.createElement("img");
    img.src = el.thumbnail;
    resultBlock.appendChild(img);
  });
}

clickMeButton.addEventListener("click", () => {
  getImages(pageNumber.value, successCallback);
});
