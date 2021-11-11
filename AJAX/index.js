// Ajouter l'image

const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#clickMe");
const pageNumberOne = document.querySelector("#pageNumber-one");

function onImagesReceived(data) {
  data.forEach((el) => {
    const img = document.createElement("img");
    img.src = el.thumbnail;
    resultBlock.appendChild(img);
  });
}

clickMeButton.addEventListener("click", () => {
  const promise = getImages(pageNumberOne.value);
  promise.then(onImagesReceived);
});

// Ajouter des tasks
// 2

const getTaskBtn = document.querySelector("#get-tasks");
const result = document.querySelector("#task-result");
const inputTask = document.querySelector("#inputTask");

createTask("learn how to put HTML");
deleteTask("fa9f6dd8-ebcf-495b-9956-26cd93ea6856");
function onTasksReceived(tasks) {
  result.innerHTML = "";
  tasks.forEach((el) => {
    const li = document.createElement("li");
    li.innerHTML = el.title;
    li.dataset.id = el.id;
    result.appendChild(li);
  });
}

getTaskBtn.addEventListener("click", () => {
  const promise = getTasks();
  promise.then(onTasksReceived);
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
