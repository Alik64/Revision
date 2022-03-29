const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
type Query {
    name: String,
    height: Int,
}
`
const resolvers = {
    Query: {
        name: () => { return ' Albert' },
        height: () => { return 190 }
    },


}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log('Server is ready at ' + url)
})

// server.listen().then(response => {
//     console.log(response)
// })