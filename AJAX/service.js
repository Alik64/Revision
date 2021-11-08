function getImages(pageNumber) {
  const promise = $.ajax(
    `https://repetitora.net/api/js/Images?page=${pageNumber}&count=1`
  );

  return promise;
}

function getImagesAxios(pageNumber) {
  const promise = $.ajax(
    `https://repetitora.net/api/js/Images?page=${pageNumber}&count=1`
  );

  return promise;
}
