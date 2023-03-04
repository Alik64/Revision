const urls = [
  "https://swapi.dev/api/people/1",
  "https://swapi.dev/api/people/2",
  "https://swapi.dev/api/people/3",
];

Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
  .then((array) => {
    console.table(array);
  })
  .catch((err) => console.log("error:", err));

// for await of

const getData = async function () {
  const arrOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
