import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Parent'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'Parent'
            })
        }, 2000)
    }
    render() {
        console.log('Parent Comp Render')
        return (
            <>
                <div>Parent Component</div>

                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </>
        )
    }
}

export default ParentComp