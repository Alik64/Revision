// function getImages(pageNumber) {
//   const promise = $.ajax(
//     `https://repetitora.net/api/js/Images?page=${pageNumber}&count=1`
//   );

//   return promise;
// }

// GET
function getImages(pageNumber) {
  const promise = axios.get(
    `https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`
  );

  return promise.then((response) => {
    return response.data;
  });
}

function getTasks(taskName) {
  const promise = axios.get(
    `https://repetitora.net/api/JS/Tasks?widgetId=090909&count=30`
  );
  return promise.then((response) => {
    return response.data;
  });
}
// POST

function createTask(title) {
  const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
    widgetId: 090909,
    title: title,
  });
  return promise.then((response) => {
    return response.data;
  });
}

// PUT
function updateTask(title) {
  const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
    widgetId: 090909,
    title: title,
  });
  return promise.then((response) => {
    return response.data;
  });
}

// DELETE
function deleteTask(id) {
  const promise = axios.delete(
    `https://repetitora.net/api/JS/Tasks?widgetId=090909&taskId=${id}`
  );
  return promise.then((response) => {
    return response.data;
  });
}
