const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#clickMe");

clickMeButton.addEventListener("click", makeRequest);

function makeRequest() {
  resultBlock.innerHTML = "hello world";
}

var a = 5;

$.ajax("https://repetitora.net/api/js/Images", {
  success: (data) => {
    data.forEach((el) => {
      const img = document.createElement("img");
      img.src = el.thumbnail;
      document.body.appendChild(img);
    });
  },
});

a = 6;
console.log(a);
