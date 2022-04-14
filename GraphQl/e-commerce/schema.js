import { gql } from 'apollo-server'


export const typeDefs = gql`
# add ! to not allow 'null'
type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories:[Category!]!
    category(id: ID!): Category

}
type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    category: Category
    reviews:[Review!]!
    }

type Category {
    id:ID!
    name: String!
    products:[Product!]!
    }

type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    }
`