export const questions = [
    {
        id: "1",
        question: "If you want to import just the Component from the React library, what syntax do you use?",
        answers: [
            { id: "1", text: "import React.Component from 'react' ", code: true },
            { id: "2", text: "import [ Component ] from 'react' ", code: true },
            { id: "3", text: "import Component from 'react'", code: true },
            { id: "4", text: "import { Component } from 'react'", right: true, code: true }
        ]
    },
    {
        id: "2",
        question: "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
        answers: [
            { id: "1", text: "Wrap it in the React.memo higher-order component.", right: true },
            { id: "2", text: "Implement the useReducer Hook." },
            { id: "3", text: "Implement the useMemo Hook." },
            { id: "4", text: "Implement the shouldComponentUpdate lifecycle method." }
        ]
    },
    {
        id: "3",
        question: "How do you fix the syntax error that results from running this code?",
        code: [
            { line: "1", text: "const person =(firstName, lastName) =>" },
            { line: "2", text: "  {" },
            { line: "3", text: "  first: firstName," },
            { line: "4", text: "     last: lastName" },
            { line: "5", text: "  }" },
            { line: "6", text: "console.log(person('Jill', 'Wilson'))" },

        ],
        answers: [
            { id: "1", text: "Wrap the object in parentheses.", right: true },
            { id: "2", text: "Call the function from another file." },
            { id: "3", text: "Add a return statement before the first curly brace." },
            { id: "4", text: "Replace the object with an array." }]
    },
    {
        id: "4",
        question: " If you see the following import in a file, what is being used for state management in the component?",
        code: [{ line: "1", text: "import React, {useState} from 'react';" }],
        answers: [
            { id: "1", text: "React Hooks", right: true },
            { id: "2", text: "stateful components" },
            { id: "3", text: "math" },
            { id: "4", text: "class components" }]
    },
    {
        id: "5",
        question: "Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?",
        code: [
            { line: "1", text: "const name = 'Rachel';" },
            { line: "2", text: "const age = 31;" },
            { line: "3", text: "const person = { name, age };" },
            { line: "4", text: "console.log(person);" },
        ],
        answers: [
            { id: "1", text: "``", code: true },
            { id: "2", text: "{name: 'Rachel', age: 31}", right: true, code: true },
            { id: "3", text: "{person: 'Rachel', person: 31}}", code: true },
            { id: "4", text: "{person: {name: 'Rachel', age: 31}}", code: true }
        ],

    },
    {
        id: "6",
        question: "What is the testing library most often associated with React?",
        answers: [
            { id: "1", text: "Mocha" },
            { id: "2", text: "Chai" },
            { id: "3", text: "Sinon" },
            { id: "4", text: "Jest", right: true }]
    },
    {
        id: "7",
        question: "To get the first item from the array (“cooking”) using array destructuring, how do you adjust this line?",
        code: [{ line: "1", text: "const topics = ['cooking', 'art', 'history'];" }],
        answers: [
            { id: "1", text: 'const first = ["cooking", "art", "history"]', code: true },
            { id: "2", text: 'const [] = ["cooking", "art", "history"]', code: true },
            { id: "3", text: 'const [, first]["cooking", "art", "history"]', code: true },
            { id: "4", text: 'const [first] = ["cooking", "art", "history"]', right: true, code: true }
        ]
    },
    {
        id: "8",
        question: "How do you handle passing through the component tree without having to pass props down manually at every level?",
        answers: [
            { id: "1", text: "React Send" },
            { id: "2", text: "React Pinpoint" },
            { id: "3", text: "React Router" },
            { id: "4", text: "React Context", right: true }]
    },
    {
        id: 9,
        question: "What should the console read when the following code is run?",
        code: [
            { line: "1", text: "const [, , animal] = ['Horse', 'Mouse', 'Cat'];" },
            { line: "2", text: "console.log(animal);" },
        ],
        answers: [{ id: "1", text: "Horse" }, { id: "2", text: "Cat", right: true }, { id: "3", text: "Mouse" }, { id: "4", text: "undefined" }]
    },
    {
        id: "10",
        question: "What is the name of the tool used to take JSX and turn it into createElement calls?",
        answers: [{ id: "1", text: "JSX Editor" }, { id: "2", text: "ReactDOM" }, { id: "3", text: "Browser Buddy" }, { id: "4", text: "Babel", right: true }]
    },
    {
        id: "11",
        question: "Why might you use useReducer over useState in a React component?",
        answers: [
            { id: "1", text: "When you want to replace Redux" },
            { id: "2", text: "When you need to manage more complex state in an app", right: true },
            { id: "3", text: "When you want to improve performance" },
            { id: "4", text: "When you want to break your production app" }]
    },
    {
        id: "12",
        question: "Which props from the props object is available to the component with the following syntax?",
        code: [
            { line: "1", text: "<Message {...props} />" }
        ],
        answers: [{ id: "1", text: "Any that have not changed" },
        { id: "2", text: "All of them", right: true },
        { id: "3", text: "Child props" },
        { id: "4", text: "Any that have changed" }]
    },
    {
        id: "13",
        question: "Consider the following code from React Router. What do you call :id in the path prop?",
        code: [
            { line: "1", text: "<Route path='/:id' />" }
        ],
        answers: [
            { id: "1", text: "This is a route modal" },
            { id: "2", text: "This is a route parameter", right: true },
            { id: "3", text: "This is a route splitter" },
            { id: "4", text: "This is a route link" }]
    },
    {
        id: "14",
        question: "If you created a component called Dish and rendered it to the DOM, what type of element would be rendered?",
        code: [
            { line: "1", text: "function Dish() {" },
            { line: "2", text: "  return <h1>Mac and Cheese</h1>;" },
            { line: "3", text: "}" },
            { line: "4", text: "\r" },
            { line: "5", text: "ReactDOM.render(<Dish />, document.getElementById('root'));" },
        ],
        answers: [
            { id: "1", text: "div" },
            { id: "2", text: "section" },
            { id: "3", text: "component" },
            { id: "4", text: "h1", right: true }]
    },
    {
        id: "15",
        question: "Given the following code, what does this React element look like?",
        code: [
            { line: "1", text: "React.createElement('h1', null, 'What's happening?');" }],
        answers: [
            { id: "1", text: "<h1 props={null}>What's happening?</h1>", code: true },
            { id: "2", text: "<h1>What's happening?</h1>", code: true, right: true },
            { id: "3", text: "<h1 id='component'>What's happening?</h1>", code: true },
            { id: "4", text: "<h1 id='element'>What's happening?</h1>", code: true }]
    },
    {
        id: "16",
        question: "What property do you need to add to the Suspense component in order to display a spinner or loading state?",
        code: [
            { line: "1", text: "function MyComponent() {" },
            { line: "2", text: "  return (" },
            { line: "3", text: "     <Suspense>" },
            { line: "4", text: "      <div>" },
            { line: "5", text: "        <Message\>" },//eslint-disable-line
            { line: "6", text: "      </div>" },
            { line: "7", text: "     </Suspense>" },
            { line: "8", text: "  );" },
            { line: "9", text: "}" },

        ],
        answers: [
            { id: "1", text: "lazy" },
            { id: "2", text: "loading" },
            { id: "3", text: "fallback", right: true },
            { id: "4", text: "spinner" }]
    },
    {
        id: "17",
        question: "What do you call the message wrapped in curly braces below?",
        code: [
            { line: "1", text: "const message = 'Hi there';" },
            { line: "2", text: "const element = <p>{message}</p>;" }],
        answers: [
            { id: "1", text: "a JS function" },
            { id: "2", text: "a JS element" },
            { id: "3", text: "a JS expression", right: true },
            { id: "4", text: "a JS wrapper" }]
    },
    {
        id: "18",
        question: "What can you use to handle code splitting?",
        answers: [
            { id: "1", text: "React.memo" },
            { id: "2", text: "React.split" },
            { id: "3", text: "React.lazy", right: true },
            { id: "4", text: "React.fallback" }]
    },
    {
        id: "19",
        question: "When do you use useLayoutEffect",
        answers: [
            { id: "1", text: "to optimize for all devices" },
            { id: "2", text: "to complete the update" },
            { id: "3", text: "to change the layout of the screen" },
            { id: "4", text: "when you need the browser to paint before the effect runs", right: true }]
    },
    {
        id: "20",
        question: "When might you use React.PureComponent?",
        answers: [
            { id: "1", text: "when you do not want your component to have props" },
            { id: "2", text: "when you have sibling components that need to be compared" },
            { id: "3", text: "when you want a default implementation of shouldComponentUpdate()", right: true },
            { id: "4", text: "Class" }]
    },
    {
        id: "21",
        question: "How do you destructure the properties that are sent to the Dish component?",
        code: [
            { line: "1", text: "function Dish(props) {" },
            { line: "2", text: "  return (" },
            { line: "3", text: "     <h1>" },
            { line: "4", text: "      {props.name} {props.cookingTime}" },
            { line: "5", text: "     <h1>" },
            { line: "6", text: "  );" },
            { line: "7", text: "}" }],
        answers: [
            { id: "1", text: "function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }", code: true },
            { id: "2", text: "function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }", right: true, code: true },
            { id: "3", text: "function Dish(props) { return <h1>{name} {cookingTime}</h1>; }", code: true },
            { id: "4", text: "function Dish(...props) { return <h1>{name} {cookingTime}</h1>; }", code: true }]
    },
    {
        id: "22",
        question: "Why is it important to avoid copying the values of props into a component's state where possible?",
        answers: [
            { id: "1", text: "because you should never mutate state" },
            { id: "2", text: "because getDerivedStateFromProps() is an unsafe method to use " },
            { id: "3", text: "because you want to allow a component to update in response to changes in the props", right: true },
            { id: "4", text: "because you want to allow data to flow back up to the parent" }]
    },
    {
        id: "23",
        question: "What is the children prop?",
        answers: [
            { id: "1", text: "a property that adds child components to state" },
            { id: "2", text: "a property that lets you pass components as data to other components", right: true },
            { id: "3", text: "a property that lets you set an array as a property" },
            { id: "4", text: "a property that lets you pass data to child elements" }]
    },
    {
        id: "24",
        question: "Which attribute do you use to replace innerHTML in the browser DOM?",
        answers: [
            { id: "1", text: "injectHTML" },
            { id: "2", text: "dangerouslySetInnerHTML", right: true },
            { id: "3", text: "weirdSetInnerHTML" },
            { id: "4", text: "strangeHTML" }]
    },
    {
        id: "25",
        question: "Which of these terms commonly describe React applications?",
        answers: [
            { id: "1", text: "declarative", right: true },
            { id: "2", text: "integrated" },
            { id: "3", text: "closed" },
            { id: "4", text: "imperative" }]
    },
    {
        id: "26",
        question: "When using webpack, why would you need to use a loader?",
        answers: [
            { id: "1", text: "to put together physical file folders" },
            { id: "2", text: " to preprocess files", right: true },
            { id: "3", text: "to load external data" },
            { id: "4", text: "to load the website into everyone's phone " }]
    },
    {
        id: "27",
        question: "A representation of a user interface that is kept in memory and is synced with the 'real' DOM is called ___",
        answers: [
            { id: "1", text: "virtual DOM", right: true },
            { id: "2", text: "DOM" },
            { id: "3", text: "virtual elements" },
            { id: "4", text: "shadow DOM" }]
    },
    {
        id: "28",
        question: "You have written the following code but nothing is rendering. How do you fix this problem?",
        code: [
            { line: "1", text: "const Heading = () => {" },
            { line: "2", text: "  <h1>Hello!</h1>;" },
            { line: "3", text: "};" }
        ],
        answers: [
            { id: "1", text: "Add a render function." },
            { id: "2", text: "Change the curly braces to parentheses or add a return statement before the h1 tag.", right: true },
            { id: "3", text: "Move the h1 to another component." },
            { id: "4", text: "Surround the h1 in a div." }]
    },
    {
        id: "29",
        question: "To create a constant in JavaScript, which keyword do you use?",
        answers: [
            { id: "1", text: "let" },
            { id: "2", text: "var" },
            { id: "3", text: "constant" },
            { id: "4", text: "const", right: true }]
    },
    {
        id: "30",
        question: "What do you call a React component that catches JavaScript errors anywhere in the child component tree?",
        answers: [
            { id: "1", text: "error bosses" },
            { id: "2", text: "error catchers" },
            { id: "3", text: "error helpers" },
            { id: "4", text: "error boundaries", right: true }]
    },
    {
        id: "31",
        question: "React components are composed to create a user interface. How are components composed?",
        answers: [
            { id: "1", text: "by putting them in the same file" },
            { id: "2", text: "by nesting components", right: true },
            { id: "3", text: "with webpack" },
            { id: "4", text: "with code splitting" }]
    },
    {
        id: "32",
        question: " In which lifecycle method do you make requests for data in a class component?",
        answers: [
            { id: "1", text: "constructor" },
            { id: "2", text: "componentDidMount", right: true },
            { id: "3", text: "componentWillReceiveProps" },
            { id: "4", text: "componentWillMount" }]
    },
    {
        id: "33",
        question: "All React components must act like _ with respect to their props.",
        answers: [
            { id: "1", text: "monads" },
            { id: "2", text: "pure functions", right: true },
            { id: "3", text: "recursive functions" },
            { id: "4", text: "higher-order functions" }]
    },
    {
        id: "34",
        question: "Why might you use a ref?",
        answers: [
            { id: "1", text: "to directly access the DOM node", right: true },
            { id: "2", text: "to refer to another JS file" },
            { id: "3", text: "to call a function" },
            { id: "4", text: "to bind the function" }]
    },
    {
        id: "35",
        question: "What is [e.target.id] called in the following code snippet?",
        code: [
            { line: "1", text: "handleChange(e) {" },
            { line: "2", text: "  this.setState({ [e.target.id]: e.target.value })" },
            { line: "3", text: "};" }
        ],
        answers: [
            { id: "1", text: "a computed property name" },
            { id: "2", text: "a set value" },
            { id: "3", text: "a dynamic key ", right: true },
            { id: "4", text: "a JSX code string" }]
    },
    {
        id: "36",
        question: "What is the name of this component?",
        code: [
            { line: "1", text: "class Clock extends React.Component {" },
            { line: "2", text: "  render() {" },
            { line: "3", text: "    return <h1>Look at the time: {time}</h1>;" },
            { line: "4", text: "  };" },
            { line: "5", text: "};" }
        ],
        answers: [
            { id: "1", text: "Clock", right: true },
            { id: "2", text: "It does not have a name prop." },
            { id: "3", text: "React.Component" },
            { id: "4", text: "Component" }]
    },
    {
        id: "37",
        question: "What is sent to an Array.map() function?",
        answers: [
            { id: "1", text: "a callback function that is called once for each element in the array", right: true },
            { id: "2", text: "the name of another array to iterate over" },
            { id: "3", text: "the number of times you want to call the function" },
            { id: "4", text: "a string describing what the function should do" }]
    },
    {
        id: "38",
        question: "Why is it a good idea to pass a function to setState instead of an object?",
        answers: [
            { id: "1", text: "It provides better encapsulation." },
            { id: "2", text: "It makes sure that the object is not mutated." },
            { id: "3", text: " It automatically updates a component." },
            { id: "4", text: "setState is asynchronous and might result in out of sync values.", right: true }]
    },
    {
        id: "39",
        question: "What package contains the render() function that renders a React element tree to the DOM?",
        answers: [
            { id: "1", text: "React" },
            { id: "2", text: "ReactDOM", right: true },
            { id: "3", text: "Render" },
            { id: "4", text: "DOM" }]
    },
    {
        id: "40",
        question: "How do you set a default value for an uncontrolled form field?",
        answers: [
            { id: "1", text: " Use the value property." },
            { id: "2", text: "Use the defaultValue property.", right: true },
            { id: "3", text: "Use the default property." },
            { id: "4", text: "It assigns one automatically." }]
    },
    {
        id: "41",
        question: "What do you need to change about this code to get it to run?",
        code: [
            { line: "1", text: "class clock extends React.Component {" },
            { line: "2", text: "  render() {" },
            { line: "3", text: "    return <h1>Look at the time: {time}</h1>;" },
            { line: "4", text: "  };" },
            { line: "5", text: "};" }
        ],
        answers: [
            { id: "1", text: "Add quotes around the return value" },
            { id: "2", text: "Remove this" },
            { id: "3", text: "Remove the render method" },
            { id: "4", text: "Capitalize clock", right: true }]
    },
    {
        id: "42",
        question: "Which Hook could be used to update the document's title?",
        answers: [
            { id: "1", text: "useEffect(function updateTitle() { document.title = name + ' ' + lastname; });", right: true, code: true },
            { id: "2", text: "useEffect(() => { title = name + ' ' + lastname; });", code: true },
            { id: "3", text: "useEffect(function updateTitle() { name + ' ' + lastname; });", code: true },
            { id: "4", text: "useEffect(function updateTitle() { title = name + ' ' + lastname; });", code: true }]
    },
    {
        id: "43",
        question: "What can you use to wrap Component imports in order to load them lazily?",
        answers: [
            { id: "1", text: "React.fallback" },
            { id: "2", text: "React.split" },
            { id: "3", text: "React.lazy", right: true },
            { id: "4", text: "React.memo" }]
    },
    {
        id: "44",
        question: "Which of the following click event handlers will allow you to pass the name of the person to be hugged? ",
        code: [
            { line: "1", text: "class Huggable extends React.Component {" },
            { line: "2", text: "  hug(id) {" },
            { line: "3", text: "    console.log('hugging' + id);" },
            { line: "4", text: "  }" },
            { line: "5", text: "  render() {" },
            { line: "6", text: "    let name = 'kitteh';" },
            { line: "7", text: "    let button = // Missing Code" },
            { line: "8", text: "    return button;" },
            { line: "9", text: "  }" },
            { line: "10", text: "};" }
        ],
        answers: [
            { id: "1", text: "<button onClick={(name) => this.hug(name)}>Hug Button</button>", code: true },
            { id: "2", text: "<button onClick={this.hug(e, name)}>Hug Button</button>", code: true },
            { id: "3", text: "<button onClick={(e) => hug(e, name)}>Hug Button</button>", code: true },
            { id: "4", text: "<button onClick={(e) => this.hug(name,e)}>Hug Button</button>", code: true, right: true }]
    },
    {
        id: "45",
        question: "How do you invoke setDone only when component mounts, using hooks?",
        code: [
            { line: "1", text: "function MyComponent(props) {" },
            { line: "2", text: "  const [done, setDone] = useState(false);" },
            { line: "3", text: "  return <h1>Done: {done}</h1>;" },
            { line: "4", text: "}" }],
        answers: [
            { id: "1", text: "useEffect(() => { setDone(true); });", code: true },
            { id: "2", text: "useEffect(() => { setDone(true); }, []);", code: true, right: true },
            { id: "3", text: "useEffect(() => { setDone(true); }, [setDone]);", code: true },
            { id: "4", text: "useEffect(() => { setDone(true); }, [done, setDone])", code: true }]
    },
    {
        id: "46",
        question: "Currently, handleClick is being called instead of passed as a reference. How do you fix this?",
        code: [
            { line: "1", text: "<button onClick={this.handleClick()}>Click this</button>" }
        ],
        answers: [
            { id: "1", text: "<button onClick={handleClick.bind()}>Click this</button>", code: true },
            { id: "2", text: "<button onClick={handleClick()}>Click this</button>", code: true },
            { id: "3", text: "<button onClick={this.handleClick}>Click this</button>", code: true, right: true },
            { id: "4", text: "<button onclick={this.handleClick}>Click this</button>", code: true }]
    },
    {
        id: "47",
        question: "Which answer best describes a function component?",
        answers: [
            { id: "1", text: "A function component is the same as a class component." },
            { id: "2", text: "A function component accepts a single props object and returns a React element.", right: true },
            { id: "3", text: "A function component is the only way to create a component." },
            { id: "4", text: "A function component is required to create a React component." }]
    },
    {
        id: "48",
        question: "Which library does the fetch() function come from?",
        answers: [
            { id: "1", text: " FetchJS" },
            { id: "2", text: "ReactDOM" },
            { id: "3", text: "No library. fetch() is supported by most browsers.", right: true },
            { id: "4", text: "React" }]
    },
    {
        id: "49",
        question: "What will happen when this useEffect Hook is executed, assuming name is not already equal to John?",
        code: [
            { line: "1", text: "useEffect(() => {" },
            { line: "2", text: "  setName('John');" },
            { line: "3", text: "}, [name]);" }],

        answers:
            [{ id: "1", text: "It will cause an error immediately." },
            { id: "2", text: "It will execute the code inside the function, but only after waiting to ensure that no other component is accessing the name variable." },
            { id: "3", text: "It will update the value of name once and not run again until name is changed from the outside.", right: true },
            { id: "4", text: "It will cause an infinite loop." }]
    },
    {
        id: "50",
        question: "Which choice will not cause a React component to rerender?",
        answers: [
            { id: "1", text: "if the component calls this.setState(...)" },
            { id: "2", text: "the value of one of the component's props changes" },
            { id: "3", text: "if the component calls this.forceUpdate()" },
            { id: "4", text: "one of the component's siblings rerenders", right: true }]
    },
    {
        id: "51",
        question: "You have created a new method in a class component called handleClick, but it is not working. Which code is missing?",
        code: [
            { line: "1", text: "class Button extends React.Component{" },
            { line: "2", text: "  constructor(props) {" },
            { line: "3", text: "    super(props);" },
            { line: "4", text: "    // Missing line" },
            { line: "5", text: "  }" },
            { line: "6", text: "  handleClick() {...}" },
            { line: "7", text: "}" }],
        answers: [
            { id: "1", text: "this.handleClick.bind(this);", code: true, },
            { id: "2", text: "props.bind(handleClick); ", code: true, },
            { id: "3", text: "this.handleClick.bind();", code: true, },
            { id: "4", text: "this.handleClick = this.handleClick.bind(this);", code: true, right: true }]
    },
    {
        id: "52",
        question: "What is the shorthand for <React.Fragment>?",
        answers: [
            { id: "1", text: "<...> your code </...>", code: true },
            { id: "2", text: "<**> your code <**>", code: true },
            { id: "3", text: "<Frag> your code </Frag>", code: true },
            { id: "4", text: "<> your code </>", code: true, right: true }]
    },
    {
        id: "53",
        question: "If you wanted to display the count state value in the component, what do you need to add to the curly braces in the h1?",
        code: [
            { line: "1", text: "class Ticker extends React.component {" },
            { line: "2", text: "  constructor(props) {" },
            { line: "3", text: "    super(props);            " },
            { line: "4", text: "    this.state = { count: 0 };            " },
            { line: "5", text: "  }" },
            { line: "6", text: "  render() {" },
            { line: "7", text: "    return <h1>{}</h1>;" },
            { line: "8", text: "  }" },
            { line: "9", text: "}" },
        ],
        answers: [
            { id: "1", text: "this.state.count", right: true },
            { id: "2", text: "count" },
            { id: "3", text: "state" },
            { id: "4", text: "state.count" }]
    },
    {
        id: "54",
        question: "Per the following code, when is the Hello component displayed? ",
        code: [
            { line: "1", text: "const greeting = isLoggedIn ? <Hello /> : null;" }
        ],
        answers: [
            { id: "1", text: "never" },
            { id: "2", text: "when isLoggedIn is true", right: true },
            { id: "3", text: "when a user logs in            " },
            { id: "4", text: "when the Hello function is called            " }]
    },
    {
        id: "55",
        question: "In the following code block, what type is orderNumber?        ",
        code: [
            { line: "1", text: "ReactDOM.render(<Message orderNumber='16' />, document.getElementById('root'));" }
        ],
        answers: [
            { id: "1", text: "string", right: true },
            { id: "2", text: "boolean" },
            { id: "3", text: "object" },
            { id: "4", text: "component" }]
    },
    {
        id: "56",
        question: "You have added a style property to the h1 but there is an unexpected token error when it runs. How do you fix this?",
        code: [
            { line: "1", text: "const element = <h1 style={ backgroundColor: 'blue' }>Hi</h1>;" }
        ],
        answers: [
            { id: "1", text: "const element = <h1 style='backgroundColor: 'blue''}>Hi</h1>;", code: true },
            { id: "2", text: "const element = <h1 style={{backgroundColor: 'blue'}}>Hi</h1>;", code: true, right: true },
            { id: "3", text: "const element = <h1 style={blue}>Hi</h1>;", code: true },
            { id: "4", text: "const element = <h1 style='blue'>Hi</h1>;", code: true }]
    },
    {
        id: "57",
        question: "Which function is used to update state variables in a React class component?",
        answers: [
            { id: "1", text: "replaceState" },
            { id: "2", text: "refreshState" },
            { id: "3", text: "updateState " },
            { id: "4", text: "setState", right: true }]
    },
    {
        id: "58",
        question: "Consider the following component. What is the default color for the star?",
        code: [
            { line: "1", text: "const Star = ({ selected = false }) => <Icon color={selected ? 'red' : 'grey'} />;" }
        ],
        answers: [
            { id: "1", text: "grey", right: true },
            { id: "2", text: "red" },
            { id: "3", text: "black" },
            { id: "4", text: "transparent" }]
    },
    {
        id: "59",
        question: "What is the difference between the click behaviors of these two buttons(assuming that this.handleClick is bound correctly)",
        code: [
            { line: "1", text: "<button onClick=this.handleClick>Click Me</button>" },
            { line: "2", text: "<button onClick={event => this.handleClick(event)}>Click Me</button>" }],
        answers: [
            { id: "1", text: "Button B will not have access to the event object on click of the button" },
            { id: "2", text: "Button A will not fire the handler this.handleClick successfully", right: true },
            { id: "3", text: "There is no difference" },
            { id: "4", text: "Button B will not fire the handler this.handleClick successfully " }]
    },
    {
        id: "60",
        question: "Give the code below, what does the second argument that is sent to the render function describe?",
        code: [
            { line: "1", text: "ReactDOM.render(                " },
            { line: "2", text: "  <h1>Hi</h1>" },
            { line: "3", text: "    document.getElementById('root')" },
            { line: "4", text: ")" },
        ],
        answers: [
            { id: "1", text: "where to call the function" },
            { id: "2", text: " where the root component is" },
            { id: "3", text: "where the React element should be added to the DOM", right: true },
            { id: "4", text: "where to create a new JavaScript file" }]
    },
    {
        id: "61",
        question: "Why should you use React Router's Link component instead of a basic <a> tag in React?",
        answers: [
            { id: "1", text: "The link component allows the user to use the browser's Back button." },
            { id: "2", text: "There is no difference--the Link component is just another name for the <a> tag.            " },
            { id: "3", text: " The <a> tag will cause an error when used in React.            " },
            { id: "4", text: "The <a> tag triggers a full page reload, while the Link component does not.", right: true }]
    },
    {
        id: "62",
        question: "What is the first argument, x, that is sent to the createElement function?",
        code: [
            { line: "1", text: "React.createElement(x, y, z);" }
        ],
        answers: [
            { id: "1", text: "the element that should be created", right: true },
            { id: "2", text: " the order in which this element should be placed on the page" },
            { id: "3", text: "the properties of the element            " },
            { id: "4", text: "data that should be displayed in the element" }]
    },
    {
        id: "63",
        question: "Which class-based lifecycle method would be called at the same time as this effect Hook?        ",
        code: [
            { line: "1", text: "useEffect(() => {                " },
            { line: "2", text: "  // do things" },
            { line: "3", text: "},[])" },
        ],
        answers: [
            { id: "1", text: "componentWillUnmount" },
            { id: "2", text: "componentDidMount", right: true },
            { id: "3", text: "render" },
            { id: "4", text: "componentDidUpdate" }]
    },
    {
        id: "64",
        question: "When using a portal, what is the first argument?",
        code: [
            { line: "1", text: "ReactDOM.createPortal(x, y); " }],
        answers: [
            { id: "1", text: "the current state" },
            { id: "2", text: " the element to render", right: true },
            { id: "3", text: "the App component            " },
            { id: "4", text: "the page            " }]
    },
    {
        id: "65",
        question: "What is setCount?",
        code: [
            { line: "1", text: "const [count, setCount] = useState(0);" }],
        answers: [
            { id: "1", text: "the initial state value" },
            { id: "2", text: "a variable" },
            { id: "3", text: "a state object" },
            { id: "4", text: "a function to update the state", right: true }]
    },
    {
        id: "66",
        question: "What is the use of map function below?",
        code: [
            { line: "1", text: "const database = [user1:{},user2:{},user3:{}];            " },
            { line: "2", text: "database.map((user)=><h1>user.data</h1>);" }],
        answers: [
            { id: "1", text: " gives a map of all the entries in database" },
            { id: "2", text: "returns a heading tag for every entry in the database containing it's data ", right: true },
            { id: "3", text: "returns one heading tag for all the entries in database            " },
            { id: "4", text: "checks which entry in the database is suitable for heading tag            " }]
    },
    {
        id: "67",
        question: "Describe what is happening in this code?",
        code: [
            { line: "1", text: "const { name: firstName } = person;" }
        ],
        answers: [
            { id: "1", text: "It is creating a new object that contains the same name property as the person object." },
            { id: "2", text: "It is assigning the value of the person object's firstName property to a constant called name.            " },
            { id: "3", text: "It is retrieving the value of person.name.firstName." },
            { id: "4", text: " It is assigning the value of the person object's name property to a constant called firstName.", right: true }]
    },
    {
        id: "68",
        question: "What is wrong with this code?",
        code: [
            { line: "1", text: "const MyComponent = ({ names }) => ( " },
            { line: "2", text: "  <h1>Hello</h1>" },
            { line: "3", text: "  <p>Hello again</p>" },
            { line: "4", text: ")" },
        ],
        answers: [
            { id: "1", text: "React components cannot be defined using functions." },
            { id: "2", text: "React does not allow components to return more than one element. ", right: true },
            { id: "3", text: "The component needs to use the return keyword." },
            { id: "4", text: "String literals must be surrounded by quotes." }]
    },
    {
        id: "69",
        question: "When using a portal, what is the second argument?  ",
        code: [
            { line: "1", text: "ReactDOM.createPortal(x, y); " }],
        answers: [
            { id: "1", text: " the App component" },
            { id: "2", text: " the page" },
            { id: "3", text: "the current state" },
            { id: "4", text: "the DOM element that exists outside of the parent component", right: true }]
    },
    {
        id: "70",
        question: "Given this code, what will be printed in the <h1> tag?",
        code: [
            { line: "1", text: "const MyComponent = ({ children }) => (" },
            { line: "2", text: "  <h1>{children.length}</h1>" },
            { line: "3", text: ")" },
            { line: "4", text: "..." },
            { line: "5", text: "<MyComponent>" },
            { line: "6", text: "  <p>Hello</p>" },
            { line: "7", text: "  <p>Hello again</p>" },
            { line: "8", text: "</MyComponent>" },
        ],
        answers: [
            { id: "1", text: "It will produce an error saying 'cannot read property 'length' of undefined.'" },
            { id: "2", text: "1" },
            { id: "3", text: "2", right: true },
            { id: "4", text: "undefined" }]
    },
    {
        id: "71",
        question: "What is this pattern called?",
        code: [{ line: "1", text: "const [count, setCount] = useState(0);" }],
        answers: [
            { id: "1", text: "object destructuring" },
            { id: "2", text: "array destructuring", right: true },
            { id: "3", text: "spread operating            " },
            { id: "4", text: "code pushing            " }]
    },
    {
        id: "72",
        question: " What is the first file loaded by the browser in a basic React project?        ",
        answers: [
            { id: "1", text: "src/App.js" },
            { id: "2", text: "src/index.js            " },
            { id: "3", text: "public/manifest.json" },
            { id: "4", text: "public/index.html            ", right: true }]
    },
    {
        id: "73",
        question: "The code below is rendering nothing, and there is an error that says 'ReactDOM is not defined.' How do you fix this issue?",
        code: [
            { line: "1", text: "import React from 'react';" },
            { line: "2", text: "import { render } from 'react-dom';" },
            { line: "3", text: "const element = <h1>Hi</h1>;" },
            { line: "4", text: "ReactDOM.render(element, document.getElementById('root')); " }],
        answers: [
            { id: "1", text: "render(element, document.getElementById('root'));", right: true },
            { id: "2", text: "ReactDOM(element, document.getElementById('root'));" },
            { id: "3", text: "renderDOM(element, document.getElementById('root'));            " },
            { id: "4", text: "DOM(element, document.getElementById('root'));            " }]
    },
    {
        id: "74",
        question: "In this component, how do you display whether the user was logged in or not?",
        code: [
            { line: "1", text: "render() {" },
            { line: "2", text: "  const isLoggedIn = this.state.isLoggedIn;" },
            { line: "3", text: "  return (" },
            { line: "4", text: "    <div>" },
            { line: "5", text: "      The user is" },
            { line: "6", text: "    </div>" },
            { line: "7", text: "  );" },
            { line: "8", text: "}" },
        ],
        answers: [
            { id: "1", text: "The user is loggedIn ? logged in : not logged in." },
            { id: "2", text: "Write a function to check the login status.            " },
            { id: "3", text: "The user is {isLoggedIn = 'no'}." },
            {
                id: "4", text: "The user is {isLoggedIn ? 'logged in.' : 'not logged in'}.", right: true
            }]
    },
    {
        id: "75",
        question: "You are rendering a list with React when this warning appears in the console: 'Warning: Each child in a list should have a unique 'key' prop.' How do you fix this issue?",
        answers: [
            { id: "1", text: "Pass the name of each item as its key." },
            { id: "2", text: "Add a key prop with the same value to each item the list.            " },
            { id: "3", text: "Clear the console warnings" },
            { id: "4", text: "When iterating over the list items, add a unique property to each list item", right: true }]
    },
    {
        id: "76",
        question: "How would you generate the boilerplate code for a new app that you are building to collect underpants?        ",
        answers: [
            { id: "1", text: "npm create-react-app collect-underpants" },
            { id: "2", text: "npx start-app collect-underpants            " },
            { id: "3", text: " react new collect-underpants" },
            { id: "4", text: "npx create-react-app collect-underpants", right: true }]
    },
    {
        id: "77",
        question: "Add the code that will fire the photon torpedoes when the button is clicked.",
        code: [
            { line: "1", text: "class StarTrekkin extends React.Component {" },
            { line: "2", text: "  firePhotonTorpedoes(e) {                " },
            { line: "3", text: "    console.log('pew pew');   " },
            { line: "4", text: "  }" },
            { line: "5", text: "  render() {                " },
            { line: "6", text: "    return; // Missing code   " },
            { line: "7", text: "  };" },
            { line: "8", text: "}" },
        ],
        answers: [
            { id: "1", text: "<button onClick={firePhotonTorpedoes()}>Pew Pew</button>" },
            { id: "2", text: "<button onClick={firePhotonTorpedoes}>Pew Pew</button>" },
            { id: "3", text: "<button onClick={this.firePhotonTorpedoes()}>Pew Pew</button>" },
            { id: "4", text: "<button onClick={this.firePhotonTorpedoes}>Pew Pew</button>", right: true }]
    },
    {
        id: "78",
        question: "What is the process of deciding whether an update is necessary?        ",
        answers: [
            { id: "1", text: "shadow DOM" },
            { id: "2", text: "fiber" },
            { id: "3", text: "reconciliation            ", right: true },
            { id: "4", text: "setting state" }]
    },
    {
        id: "79",
        question: "React is an open-source project but is maintained by which company?        ",
        answers: [
            { id: "1", text: "Facebook", right: true },
            { id: "2", text: "Google" },
            { id: "3", text: "Apple" },
            { id: "4", text: "Heineken" }]
    },
    {
        id: "80",
        question: "What command can you use to generate a React project?",
        answers: [
            { id: "1", text: "react-starter" },
            { id: "2", text: "create-react-app", right: true },
            { id: "3", text: "react-gen" },
            { id: "4", text: "react-start  " }]
    },
    {
        id: "81",
        question: "What is the browser extension called that React developers use to debug applications?",
        answers: [
            { id: "1", text: "React Codewatch" },
            { id: "2", text: "React Tooling Add-on" },
            { id: "3", text: "React Debug" },
            { id: "4", text: "React Developer Tools", right: true }]
    },
    {
        id: "82",
        question: "Which tool is not part of Create React App?        ",
        answers: [
            { id: "1", text: "React" },
            { id: "2", text: "jQuerry", right: true },
            { id: "3", text: "webpack" },
            { id: "4", text: "ReactDOM" }]
    },
    {
        id: "83",
        question: "What is the JavaScript syntax extension that is commonly used to create React elements?        ",
        answers: [
            { id: "1", text: "HTML" },
            { id: "2", text: "JSX", right: true },
            { id: "3", text: "JavaXML" },
            { id: "4", text: "ReactX" }]
    },
    {
        id: "84",
        question: "How might you check property types without using Flow or TypeScript?        ",
        answers: [
            { id: "1", text: "Check Manually." },
            { id: "2", text: "Use prop-helper." },
            { id: "3", text: "use prop-types.", right: true },
            { id: "4", text: "user checker-types" }]
    },
    {
        id: "85",
        question: "How do you add an id of heading to the following h1 element?",
        code: [
            { line: "1", text: "let dish = <h1>Mac and Cheese</h1>;" }
        ],
        answers: [
            { id: "1", text: "let dish = <h1 id={heading}>Mac and Cheese</h1>;", code: true },
            { id: "2", text: "let dish = <h1 id='heading'>Mac and Cheese</h1>;", code: true, right: true },
            { id: "3", text: "let dish = <h1 id:'heading'>Mac and Cheese</h1>;", code: true },
            { id: "4", text: "let dish = <h1 class='heading'>Mac and Cheese</h1>;", code: true }]
    }
]