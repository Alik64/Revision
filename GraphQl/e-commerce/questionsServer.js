import { ApolloServer, gql } from 'apollo-server'
// import { questions } from './questions.js'
// console.log(questions)
const questions = [
    {
        id: "1",
        question: "If you want to import just the Component from the React library, what syntax do you use?",
        answers: [
            { id: 1, text: "import React.Component from 'react' ", code: true },
            { id: 2, text: "import [ Component ] from 'react' ", code: true },
            { id: 3, text: "import Component from 'react'", code: true },
            { id: 4, text: "import { Component } from 'react'", right: true, code: true }
        ]
    },
    {
        id: 2,
        question: "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
        answers: [
            { id: 1, text: "Wrap it in the React.memo higher-order component.", right: true },
            { id: 2, text: "Implement the useReducer Hook." },
            { id: 3, text: "Implement the useMemo Hook." },
            { id: 4, text: "Implement the shouldComponentUpdate lifecycle method." }
        ]
    },
    {
        id: 3,
        question: "How do you fix the syntax error that results from running this code?",
        code: [
            { line: 1, text: "const person =(firstName, lastName) =>" },
            { line: 2, text: "  {" },
            { line: 3, text: "  first: firstName," },
            { line: 4, text: "     last: lastName" },
            { line: 5, text: "  }" },
            { line: 6, text: "console.log(person('Jill', 'Wilson'))" },

        ],
        answers: [
            { id: 1, text: "Wrap the object in parentheses.", right: true },
            { id: 2, text: "Call the function from another file." },
            { id: 3, text: "Add a return statement before the first curly brace." },
            { id: 4, text: "Replace the object with an array." }]
    }]


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

            return question
        }
    }
}


const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log('server deployed on' + url)
})