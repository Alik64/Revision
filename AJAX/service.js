function getImages(pageNumber) {
  $.ajax(`https://repetitora.net/api/js/Images?page=${pageNumber}&count=1`, {
    success: (data) => {
      data.forEach((el) => {
        const img = document.createElement("img");
        img.src = el.thumbnail;
        resultBlock.appendChild(img);
      });
    },
  });
}
