function getImages(pageNumber, successCallback) {
  $.ajax(`https://repetitora.net/api/js/Images?page=${pageNumber}&count=1`, {
    success: successCallback,
  });
}
