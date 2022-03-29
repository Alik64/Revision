const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
type Query {
    name:[String]
}
`
const resolvers = {
    Query: {
        name: () => { return ['Albert react dev', 'nice', 'good'] }
    }
}
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log('Server is deployed at ' + url)
})