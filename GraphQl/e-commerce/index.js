import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema.js'
import { Query } from './resolvers/Querry.js'
import { Product } from './resolvers/Product.js'
import { Category } from './resolvers/Category.js'

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product
    }
});

server.listen().then(({ url }) => {
    console.log('Server is ready at ' + url)
})

