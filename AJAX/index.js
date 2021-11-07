const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#clickMe");
const pageNumber = document.querySelector("#page-number");

clickMeButton.addEventListener("click", () => {
  getImages(pageNumber.value);
});
