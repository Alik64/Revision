import { render } from '@testing-library/react'
import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Franc'
        }

        console.log('LifecycleA - constructor')
    }

    static getDerivatedStateFromProps(props, state) {
        console.log('LifecycleA - getDerivatedStateFromProps')

        return null
    }

    componentDidMount() {
        console.log('LifecycleA - Component did mount')

    }
    shouldComponentUpdate() {
        console.log('LifecycleA - should Component Update')
        return true
    }
    componentDidUpdate() {
        console.log('LifecycleA - component Did Update')
    }
    changeState = () => {
        this.setState({
            name: 'Mickael'
        })
    }

    render() {
        console.log('LifecycleA - Render')

        return (
            <>

                <div>LifecycleA djdjdj</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
                <h1>{this.state.name}</h1>

            </>
        )
    }
}

export default LifecycleA

// Console =>
// constructor
// render
// componentDidMount

// LifecycleA - constructor
// LifecycleA - Render
// LifecycleB - constructor
// LifecycleB - Render
// LifecycleB - Component did mount
// LifecycleA - Component did mount