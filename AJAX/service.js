// function getImages(pageNumber) {
//   const promise = $.ajax(
//     `https://repetitora.net/api/js/Images?page=${pageNumber}&count=1`
//   );

//   return promise;
// }

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
    `https://repetitora.net/api/JS/Tasks?widgetId=090909&page=30`
  );
  return promise.then((response) => {
    return response.data;
  });
}

function createTask(title) {
  const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
    widgetId: 090909,
    title: title,
  });
  return promise.then((response) => {
    return response.data;
  });
}
