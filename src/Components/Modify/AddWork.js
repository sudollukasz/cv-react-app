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

class AddWork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalWorkOpen: false,
            confirmWorkOpen: false,
        }
    }

    handleOpen = () => this.setState({ modalWorkOpen: true })

    handleCancel = () => this.setState({ modalWorkOpen: false })

    handleSubmit = (event) => {
        if (!this.validateWork()) {
            this.setState({ confirmWorkOpen: true })
        } else {
            this.setState({ modalWorkOpen: false })
            this.props.submit(event)
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        this.props.change(event)
    }

    validateWork = () => {
        if (this.state.name && this.state.begin && this.state.end && this.state.duties ) { return true }
        return false;
    }

    ConfirmCancel = () => this.setState({ confirmWorkOpen: false, modalWorkOpen: false })
    ConfirmConfirm = () => this.setState({ confirmWorkOpen: false })

    render() {
        return (
            <div>
                <Modal trigger={<Button fluid basic color='teal' onClick={this.handleOpen}>Add Work Info</Button>}
                    basic
                    size='small'
                    dimmer='blurring'
                    open={this.state.modalWorkOpen}
                    onClose={this.handleClose}>
                    <Header content='Add Work Info' />
                    <Modal.Content>
                        <Form>
                            <Form.Field required>
                                <Label color='grey' size='large'>Name</Label>
                                <Input placeholder='Name' name='work' id='name' onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field required>
                                <Label color='grey' size='large'>Begin Date</Label>
                                <Input placeholder='Begin Date' name='work' id='begin' onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field required>
                                <Label color='grey' size='large'>End Date</Label>
                                <Input placeholder='End Date' name='work' id='end' onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field required>
                                <Label color='grey' size='large'>Duties</Label>
                                <Input placeholder='Duties' name='work' id='duties' onChange={this.handleChange} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>

                    <Modal.Actions>
                        <Button basic color='red' onClick={this.handleCancel} inverted>
                            <Icon name='remove' /> Cancel
                    </Button>
                        <Button color='green' name='work' onClick={this.handleSubmit} inverted>
                            <Icon name='checkmark' /> Apply
                        </Button>
                    </Modal.Actions>

                </Modal>

                <Confirm
                    open={this.state.confirmWorkOpen}
                    content='You must fill in all of the fields.'
                    onCancel={this.ConfirmCancel}
                    onConfirm={this.ConfirmConfirm}
                />
            </div>
        )
    }
}

export default AddWork