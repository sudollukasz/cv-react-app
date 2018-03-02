import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

import * as actions from '../../Actions/setDataActions';

import EditPersonal from '../../Components/Modify/EditPersonal';
import AddWork from '../../Components/Modify/AddWork';
import AddSchool from '../../Components/Modify/AddSchool';
import AddCert from '../../Components/Modify/AddCert';
import AddLang from '../../Components/Modify/AddLang';
import AddInterest from '../../Components/Modify/AddInterest';

import Transaction from '../../Components/Modify/Transaction';
import CVContract from '../../Components/Utils/CV.json';

class Layout extends Component {
  componentWillMount() {
    if (!this.props.contract.owner) {
      this.getData();
    }
  }

  getData() {
    //set smart contract web3 instance and find contract owner
    const CV = window.web3.eth.contract(CVContract.abi);
    this.props.contract.CVInstance = CV.at(CVContract.networks[3].address);
    this.props.getOwner(this.props.contract.CVInstance);
  }

  handleChange = event => {
    this.props[event.target.name].new = {
      ...this.props[event.target.name].new,
      [event.target.id]: event.target.value
    };
  };

  handleSubmit = event => {
    switch (event.target.name) {
      case 'personal': {
        this.props.setPersonal(this.props.contract.CVInstance, this.props[event.target.name].new);
        break;
      }
      case 'work': {
        this.props.setWork(this.props.contract.CVInstance, this.props[event.target.name].new);
        break;
      }
      case 'education': {
        this.props.setEducation(this.props.contract.CVInstance, this.props[event.target.name].new);
        break;
      }
      case 'certificates': {
        this.props.setCertificate(this.props.contract.CVInstance, this.props[event.target.name].new);
        break;
      }
      case 'languages': {
        this.props.setLanguage(this.props.contract.CVInstance, this.props[event.target.name].new);
        break;
      }
      case 'interests': {
        this.props.setInterest(this.props.contract.CVInstance, this.props[event.target.name].new);
        break;
      }
      default:
        console.log(event.target.name);
    }
  };

  renderButtons() {
    if (this.props.contract.owner) {
      return (
        <List>
          <List.Item>
            <List.Content>
              <EditPersonal change={this.handleChange} submit={this.handleSubmit} />
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content>
              <AddWork change={this.handleChange} submit={this.handleSubmit} />
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content>
              <AddSchool change={this.handleChange} submit={this.handleSubmit} />
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content>
              <AddCert change={this.handleChange} submit={this.handleSubmit} />
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content>
              <AddLang change={this.handleChange} submit={this.handleSubmit} />
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content>
              <AddInterest change={this.handleChange} submit={this.handleSubmit} />
            </List.Content>
          </List.Item>
        </List>
      );
    } else {
      return (
        <h2>
          <center>Only owner can modify smart contract</center>
        </h2>
      );
    }
  }

  renderTx() {
    return (
      <div>
        {this.props.personal.Tx ? <Transaction tx={this.props.personal.Tx} /> : ''}
        {this.props.work.Tx ? <Transaction tx={this.props.work.Tx} /> : ''}
        {this.props.education.Tx ? <Transaction tx={this.props.education.Tx} /> : ''}
        {this.props.certificates.Tx ? <Transaction tx={this.props.certificates.Tx} /> : ''}
        {this.props.languages.Tx ? <Transaction tx={this.props.languages.Tx} /> : ''}
        {this.props.interests.Tx ? <Transaction tx={this.props.interests.Tx} /> : ''}
      </div>
    );
  }

  render() {
    return (
    <div>
      {this.renderButtons()}
      {this.renderTx()}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contract: state.contract,
    personal: state.personal,
    work: state.work,
    education: state.education,
    certificates: state.certificates,
    languages: state.languages,
    interests: state.interests
  };
}

export default connect(mapStateToProps, actions)(Layout);
