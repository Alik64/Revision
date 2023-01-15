fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then(console.log);

async function fetchUsers() {
  let users = await fetch("https://jsonplaceholder.typicode.com/users");
  let result = await users.json();
  console.log(result);
}
fetchUsers();
