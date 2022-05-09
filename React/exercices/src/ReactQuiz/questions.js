export const questions = [
    {
        id: 1,
        question: "If you want to import just the Component from the React library, what syntax do you use?",
        answer: [
            { id: 1, text: "import React.Component from 'react' " },
            { id: 2, text: "import [ Component ] from 'react' " },
            { id: 3, text: "import Component from 'react'" },
            { id: 4, text: "import { Component } from 'react'", right: true }
        ]
    },
    {
        id: 2,
        question: "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
        answer: [
            { id: 1, text: "Wrap it in the React.memo higher-order component.", right: true },
            { id: 2, text: "Implement the useReducer Hook." },
            { id: 3, text: "Implement the useMemo Hook." },
            { id: 4, text: "Implement the shouldComponentUpdate lifecycle method." }
        ]
    }
]