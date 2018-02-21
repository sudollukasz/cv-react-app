import React, { Component } from "react"
import { 
    Button, 
    Modal, 
    Form, 
    Input, 
    Icon, 
    Header, 
    Label, 
    Confirm 
} from 'semantic-ui-react'

class AddInterest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalInterestOpen: false,
            confirmInterestOpen: false,
        }
    }

    handleOpen = () => this.setState({ modalInterestOpen: true })

    handleCancel = () => this.setState({ modalInterestOpen: false })

    handleSubmit = (event) => {
        if (!this.state.name) {
            this.setState({ confirmInterestOpen: true })
        } else {
            this.setState({ modalInterestOpen: false })
            this.props.submit(event)
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        this.props.change(event)
    }

    ConfirmCancel = () => this.setState({ confirmInterestOpen: false, modalInterestOpen: false })
    ConfirmConfirm = () => this.setState({ confirmInterestOpen: false })

    render() {
        return (
            <div>
                <Modal trigger={<Button fluid basic color='teal' onClick={this.handleOpen}>Add Interest Info</Button>}
                    basic
                    size='small'
                    dimmer='blurring'
                    open={this.state.modalInterestOpen}
                    onClose={this.handleClose}>
                    <Header content='Add Interest Info' />
                    <Modal.Content>
                        <Form>
                            <Form.Field required>
                                <Label color='grey' size='large'>Name</Label>
                                <Input placeholder='Name' name='interests' id='name' onChange={this.handleChange} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>

                    <Modal.Actions>
                        <Button basic color='red' onClick={this.handleCancel} inverted>
                            <Icon name='remove' /> Cancel
                    </Button>
                        <Button color='green' name='interests' onClick={this.handleSubmit} inverted>
                            <Icon name='checkmark' /> Apply
                        </Button>
                    </Modal.Actions>

                </Modal>

                <Confirm
                    open={this.state.confirmInterestOpen}
                    content='You must fill in all of the fields.'
                    onCancel={this.ConfirmCancel}
                    onConfirm={this.ConfirmConfirm}
                />
            </div>
        )
    }
}

export default AddInterest