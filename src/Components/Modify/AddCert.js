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

class AddCertificate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalCertificateOpen: false,
            confirmCertificateOpen: false,
        }
    }

    handleOpen = () => this.setState({ modalCertificateOpen: true })

    handleCancel = () => this.setState({ modalCertificateOpen: false })

    handleSubmit = (event) => {
        if (!this.state.name) {
            this.setState({ confirmCertificateOpen: true })
        } else {
            this.setState({ modalCertificateOpen: false })
            this.props.submit(event)
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        this.props.change(event)
    }

    ConfirmCancel = () => this.setState({ confirmCertificateOpen: false, modalCertificateOpen: false })
    ConfirmConfirm = () => this.setState({ confirmCertificateOpen: false })

    render() {
        return (
            <div>
                <Modal trigger={<Button fluid basic color='teal' onClick={this.handleOpen}>Add Certificate Info</Button>}
                    basic
                    size='small'
                    dimmer='blurring'
                    open={this.state.modalCertificateOpen}
                    onClose={this.handleClose}>
                    <Header content='Add Certificate Info' />
                    <Modal.Content>
                        <Form>
                            <Form.Field required>
                                <Label color='grey' size='large'>Name</Label>
                                <Input placeholder='Name' name='certificates' id='name' onChange={this.handleChange} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>

                    <Modal.Actions>
                        <Button basic color='red' onClick={this.handleCancel} inverted>
                            <Icon name='remove' /> Cancel
                    </Button>
                        <Button color='green' name='certificates' onClick={this.handleSubmit} inverted>
                            <Icon name='checkmark' /> Apply
                        </Button>
                    </Modal.Actions>

                </Modal>

                <Confirm
                    open={this.state.confirmCertificateOpen}
                    content='You must fill in all of the fields.'
                    onCancel={this.ConfirmCancel}
                    onConfirm={this.ConfirmConfirm}
                />
            </div>
        )
    }
}

export default AddCertificate