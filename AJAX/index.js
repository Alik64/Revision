const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#clickMe");
const pageNum = document.querySelector("#page-number");

clickMeButton.addEventListener("click", () => {
  makeRequest();
});
