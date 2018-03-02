import React, { Component } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Icon,
  Header,
  Label,
  Confirm
} from "semantic-ui-react";

const INPUTS = [
  {placeholder: "Name", id: "name"},
  {placeholder: "Birth", id: "birth"},
  {placeholder: "City", id: "city"},
  {placeholder: "Phone", id: "phone"},
  {placeholder: "Email", id: "email"},
  {placeholder: "Photo link", id: "photo"},
]

class EditPersonal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalPersonalOpen: false,
      confirmPersonalOpen: false
    };
  }

  handleOpen = () => this.setState({ modalPersonalOpen: true });

  handleCancel = () => this.setState({ modalPersonalOpen: false });

  handleSubmit = event => {
    if (!this.validatePersonal()) {
      this.setState({ confirmPersonalOpen: true });
    } else {
      this.setState({ modalPersonalOpen: false });
      this.props.submit(event);
    }
  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    this.props.change(event);
  };

  validatePersonal = () => {
    if (
      this.state.name &&
      this.state.birth &&
      this.state.city &&
      this.state.phone &&
      this.state.email &&
      this.state.photo
    ) {
      return true;
    }
    return false;
  };

  ConfirmCancel = () =>
    this.setState({ confirmPersonalOpen: false, modalPersonalOpen: false });
  ConfirmConfirm = () => this.setState({ confirmPersonalOpen: false });
  
  renderInputs() {
    return (
      INPUTS.map(input => {
        return (
          <Form.Field required key={input.id}>
            <Label color="grey" size="large">
              {input.placeholder}
            </Label>
            <Input placeholder={input.placeholder} name="personal" id={input.id} onChange={this.handleChange} />
          </Form.Field>
        )
      })
    )
  }

  render() {
    return <div>
        <Modal trigger={<Button fluid basic color="teal" onClick={this.handleOpen}>
              Edit Personal Info
            </Button>} basic size="small" dimmer="blurring" open={this.state.modalPersonalOpen} onClose={this.handleClose}>
          <Header content="Edit Personal Info" />
          <Modal.Content>
            <Form>
              {this.renderInputs()}
            </Form>
          </Modal.Content>

          <Modal.Actions>
            <Button basic color="red" onClick={this.handleCancel} inverted>
              <Icon name="remove" /> Cancel
            </Button>
            <Button color="green" name="personal" onClick={this.handleSubmit} inverted>
              <Icon name="checkmark" /> Apply
            </Button>
          </Modal.Actions>
        </Modal>

        <Confirm open={this.state.confirmPersonalOpen} content="You must fill in all of the fields." onCancel={this.ConfirmCancel} onConfirm={this.ConfirmConfirm} />
      </div>;
  }
}

export default EditPersonal;
