const users = [
    { id: 1, firstname: 'Alexandre', lastname: 'Zegrand' },
    { id: 2, firstname: 'Marie', lastname: 'Rose' },
    { id: 3, firstname: 'India', lastname: 'Loulou' },
]

let usersSort = users.sort((a, b) => a.lastname < b.lastname ? -1 : 1)
console.log(usersSort)



