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
  { placeholder: 'Name', id: 'name' },
  { placeholder: 'Begin date', id: 'begin' },
  { placeholder: 'End date', id: 'end' },
  { placeholder: 'Info', id: 'info' }
];

class AddSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalSchoolOpen: false,
      confirmSchoolOpen: false
    };
  }

  handleOpen = () => this.setState({ modalSchoolOpen: true });

  handleCancel = () => this.setState({ modalSchoolOpen: false });

  handleSubmit = event => {
    if (!this.validateSchool()) {
      this.setState({ confirmSchoolOpen: true });
    } else {
      this.setState({ modalSchoolOpen: false });
      this.props.submit(event);
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    this.props.change(event);
  };

  validateSchool = () => {
    if (this.state.name && this.state.begin && this.state.end && this.state.info) {
      return true;
    }
    return false;
  };

  ConfirmCancel = () => this.setState({ confirmSchoolOpen: false, modalSchoolOpen: false });
  ConfirmConfirm = () => this.setState({ confirmSchoolOpen: false });

  renderInputs() {
    return INPUTS.map(input => {
      return (
        <Form.Field required key={input.id}>
          <Label color="grey" size="large">
            {input.placeholder}
          </Label>
          <Input
            placeholder={input.placeholder}
            name="education"
            id={input.id}
            onChange={this.handleChange}
          />
        </Form.Field>
      );
    });
  }

  render() {
    return (
      <div>
        <Modal
          trigger={
            <Button fluid basic color="teal" onClick={this.handleOpen}>
              Add School Info
            </Button>
          }
          basic
          size="small"
          dimmer="blurring"
          open={this.state.modalSchoolOpen}
          onClose={this.handleClose}
        >
          <Header content="Add School Info" />
          <Modal.Content>
            <Form>
             {this.renderInputs()}
            </Form>
          </Modal.Content>

          <Modal.Actions>
            <Button basic color="red" onClick={this.handleCancel} inverted>
              <Icon name="remove" /> Cancel
            </Button>
            <Button color="green" name="education" onClick={this.handleSubmit} inverted>
              <Icon name="checkmark" /> Apply
            </Button>
          </Modal.Actions>
        </Modal>

        <Confirm
          open={this.state.confirmSchoolOpen}
          content="You must fill in all of the fields."
          onCancel={this.ConfirmCancel}
          onConfirm={this.ConfirmConfirm}
        />
      </div>
    );
  }
}

export default AddSchool;
