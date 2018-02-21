import React, { Component } from "react"
import { Message } from 'semantic-ui-react'


class Transaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }

    handleDismiss = () => {this.setState({ visible: false })}

    render() {
        if (this.state.visible) {
            return (
                <Message
                    onDismiss={this.handleDismiss}
                    header='Transaction processing!'
                    content={'Your transaction is beeing mined and has ID: ' + this.props.tx}
                />
            )
        }
        else {
            return (
                <div></div>
            )
        }

    }
}

export default Transaction