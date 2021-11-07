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
