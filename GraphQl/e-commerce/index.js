import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema.js'
import { Query } from './resolvers/Querry.js'
import { Product } from './resolvers/Product.js'
import { Category } from './resolvers/Category.js'
import { categories, products, reviews } from './db.cjs'

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product
    },
    context: {
        categories,
        products,
        reviews
    }
});

server.listen().then(({ url }) => {
    console.log('Server is ready at ' + url)
})

