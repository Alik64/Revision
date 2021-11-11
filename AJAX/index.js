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
const addTaskBtn = document.querySelector("#add-tasks");

addTaskBtn.addEventListener("click", () => {
  createTask(inputTask.value);
});

//updateTask("Learn React", "aa560ab3-c139-4be8-a634-069a6fa9d7be");
//deleteTask("1221d661-17a7-47d7-9ec1-00f21906c338");

function onTasksReceived(tasks) {
  result.innerHTML = "";
  tasks.forEach((el) => {
    const li = document.createElement("li");
    li.innerHTML = el.title;
    li.dataset.id = el.id;

    result.appendChild(li);
  });
}

// getTaskBtn.addEventListener("click", () => {
//   const promise = getTasks();
//   promise.then(onTasksReceived);
// });

function taskRender() {
  const promise = getTasks();
  promise.then(onTasksReceived);
}
taskRender();
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
