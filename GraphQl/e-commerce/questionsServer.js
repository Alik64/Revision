import { ApolloServer, gql } from 'apollo-server'
import { questions } from './questions.js'



const typeDefs = gql`
type Query {
    questions: [Question]
    question(id: ID!): Question

}
type Question{
    id: ID!
    question: String!
    code: [Code]
    answers:[Answer]
}
type Code {
    line: Int!
    text: String!
}
type Answer {
    id: Int!
    text: String!
    right: Boolean
}

`
const resolvers = {
    Query: {
        questions: () => { return questions },
        question: (parent, args, context) => {
            const questionId = args.id
            const question = questions.find(quest => quest.id === questionId)
            if (!question) return null

            return question
        }
    }
}


const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log('server deployed on' + url)
})