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

class AddSchool extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalSchoolOpen: false,
            confirmSchoolOpen: false,
        }
    }

    handleOpen = () => this.setState({ modalSchoolOpen: true })

    handleCancel = () => this.setState({ modalSchoolOpen: false })

    handleSubmit = (event) => {
        if (!this.validateSchool()) {
            this.setState({ confirmSchoolOpen: true })
        } else {
            this.setState({ modalSchoolOpen: false })
            this.props.submit(event)
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        this.props.change(event)
    }

    validateSchool = () => {
        if (this.state.name && this.state.begin && this.state.end && this.state.info) { return true }
        return false;
    }

    ConfirmCancel = () => this.setState({ confirmSchoolOpen: false, modalSchoolOpen: false })
    ConfirmConfirm = () => this.setState({ confirmSchoolOpen: false })

    render() {
        return (
            <div>
                <Modal trigger={<Button fluid basic color='teal' onClick={this.handleOpen}>Add School Info</Button>}
                    basic
                    size='small'
                    dimmer='blurring'
                    open={this.state.modalSchoolOpen}
                    onClose={this.handleClose}>
                    <Header content='Add School Info' />
                    <Modal.Content>
                        <Form>
                            <Form.Field required>
                                <Label color='grey' size='large'>Name</Label>
                                <Input placeholder='Name' name='education' id='name' onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field required>
                                <Label color='grey' size='large'>Begin Date</Label>
                                <Input placeholder='Begin Date' name='education' id='begin' onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field required>
                                <Label color='grey' size='large'>End Date</Label>
                                <Input placeholder='End Date' name='education' id='end' onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field required>
                                <Label color='grey' size='large'>Info</Label>
                                <Input placeholder='Info' name='education' id='info' onChange={this.handleChange} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>

                    <Modal.Actions>
                        <Button basic color='red' onClick={this.handleCancel} inverted>
                            <Icon name='remove' /> Cancel
                    </Button>
                        <Button color='green' name='education' onClick={this.handleSubmit} inverted>
                            <Icon name='checkmark' /> Apply
                        </Button>
                    </Modal.Actions>

                </Modal>

                <Confirm
                    open={this.state.confirmSchoolOpen}
                    content='You must fill in all of the fields.'
                    onCancel={this.ConfirmCancel}
                    onConfirm={this.ConfirmConfirm}
                />
            </div>
        )
    }
}

export default AddSchool