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

class AddLang extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalLangOpen: false,
            confirmLangOpen: false,
        }
    }

    handleOpen = () => this.setState({ modalLangOpen: true })

    handleCancel = () => this.setState({ modalLangOpen: false })

    handleSubmit = (event) => {
        if (!this.state.name) {
            this.setState({ confirmLangOpen: true })
        } else {
            this.setState({ modalLangOpen: false })
            this.props.submit(event)
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        this.props.change(event)
    }

    ConfirmCancel = () => this.setState({ confirmLangOpen: false, modalLangOpen: false })
    ConfirmConfirm = () => this.setState({ confirmLangOpen: false })

    render() {
        return (
            <div>
                <Modal trigger={<Button fluid basic color='teal' onClick={this.handleOpen}>Add Language Info</Button>}
                    basic
                    size='small'
                    dimmer='blurring'
                    open={this.state.modalLangOpen}
                    onClose={this.handleClose}>
                    <Header content='Add Language Info' />
                    <Modal.Content>
                        <Form>
                            <Form.Field required>
                                <Label color='grey' size='large'>Name</Label>
                                <Input placeholder='Name' name='languages' id='name' onChange={this.handleChange} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>

                    <Modal.Actions>
                        <Button basic color='red' onClick={this.handleCancel} inverted>
                            <Icon name='remove' /> Cancel
                    </Button>
                        <Button color='green' name='languages' onClick={this.handleSubmit} inverted>
                            <Icon name='checkmark' /> Apply
                        </Button>
                    </Modal.Actions>

                </Modal>

                <Confirm
                    open={this.state.confirmLangOpen}
                    content='You must fill in all of the fields.'
                    onCancel={this.ConfirmCancel}
                    onConfirm={this.ConfirmConfirm}
                />
            </div>
        )
    }
}

export default AddLang