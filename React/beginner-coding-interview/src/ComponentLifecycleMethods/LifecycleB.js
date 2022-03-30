import { render } from '@testing-library/react'
import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Franc'
        }
        console.log('LifecycleB - constructor')
    }

    static getDerivatedStateFromProps(props, state) {
        console.log('LifecycleB - getDerivatedStateFromProps')

        return null
    }

    componentDidMount() {
        console.log('LifecycleB - Component did mount')

    }
    componentDidMount() {
        console.log('LifecycleB - Component did mount')

    }
    shouldComponentUpdate() {
        console.log('LifecycleB - should Component Update')
        return true
    }
    componentDidUpdate() {
        console.log('LifecycleB - component Did Update')
    }
    render() {
        console.log('LifecycleB - Render')

        return (
            <div>LifecycleB</div>
        )
    }
}

export default LifecycleB

// Console =>
// constructor
// render
// componentDidMount