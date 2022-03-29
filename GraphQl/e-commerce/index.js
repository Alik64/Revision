const { ApolloServer, gql } = require('apollo-server')


// type => String, Int, Float, Boolean / ID!

const typeDefs = gql`
# add ! to not allow 'null'
type Query {
    name: String # or null => String! => not allow 'null'
    numberOfAnimals: Int
    price: Float
    real: Boolean
    
}
`
const resolvers = {
    Query: {
        name: () => { return ' Albert' },
        numberOfAnimals: () => { return 55 },
        price: () => { return 234.456 },
        real: () => { return true }
    },


}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log('Server is ready at ' + url)
})

// server.listen().then(response => {
//     console.log(response)
// })