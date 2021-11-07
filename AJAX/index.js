const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#clickMe");
const pageNum = document.querySelector("#page-number");

clickMeButton.addEventListener("click", makeRequest);

function makeRequest() {
  $.ajax(`https://repetitora.net/api/js/Images?page=${pageNum.value}&count=1`, {
    success: (data) => {
      data.forEach((el) => {
        const img = document.createElement("img");
        img.src = el.thumbnail;
        resultBlock.appendChild(img);
      });
    },
  });
}
