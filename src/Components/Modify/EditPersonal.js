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

  render() {
    return (
      <div>
        <Modal
          trigger={
            <Button fluid basic color="teal" onClick={this.handleOpen}>
              Edit Personal Info
            </Button>
          }
          basic
          size="small"
          dimmer="blurring"
          open={this.state.modalPersonalOpen}
          onClose={this.handleClose}
        >
          <Header content="Edit Personal Info" />
          <Modal.Content>
            <Form>
              <Form.Field required>
                <Label color="grey" size="large">
                  Name
                </Label>
                <Input
                  placeholder="Name"
                  name="personal"
                  id="name"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field required>
                <Label color="grey" size="large">
                  Birth
                </Label>
                <Input
                  placeholder="Birth"
                  name="personal"
                  id="birth"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field required>
                <Label color="grey" size="large">
                  City
                </Label>
                <Input
                  placeholder="City"
                  name="personal"
                  id="city"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field required>
                <Label color="grey" size="large">
                  Phone
                </Label>
                <Input
                  placeholder="Phone"
                  name="personal"
                  id="phone"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field required>
                <Label color="grey" size="large">
                  Email
                </Label>
                <Input
                  placeholder="Email"
                  name="personal"
                  id="email"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field required>
                <Label color="grey" size="large">
                  Photo link
                </Label>
                <Input
                  placeholder="Photo link"
                  name="personal"
                  id="photo"
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
          </Modal.Content>

          <Modal.Actions>
            <Button basic color="red" onClick={this.handleCancel} inverted>
              <Icon name="remove" /> Cancel
            </Button>
            <Button
              color="green"
              name="personal"
              onClick={this.handleSubmit}
              inverted
            >
              <Icon name="checkmark" /> Apply
            </Button>
          </Modal.Actions>
        </Modal>

        <Confirm
          open={this.state.confirmPersonalOpen}
          content="You must fill in all of the fields."
          onCancel={this.ConfirmCancel}
          onConfirm={this.ConfirmConfirm}
        />
      </div>
    );
  }
}

export default EditPersonal;
