// function getImages(pageNumber) {
//   const promise = $.ajax(
//     `https://repetitora.net/api/js/Images?page=${pageNumber}&count=1`
//   );

//   return promise;
// }

function getImages(pageNumber) {
  const promise = axios.get(
    `https://repetitora.net/api/js/Images?page=${pageNumber}&count=1`
  );

  return promise.then((response) => {
    return response.data;
  });
}
