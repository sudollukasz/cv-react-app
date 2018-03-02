import React, { Component } from 'react';
import { connect } from 'react-redux';

import Personal from '../../Components/About/Personal';
import Experience from '../../Components/About/Experience';
import Certifications from '../../Components/About/Certifications';
import Information from '../../Components/About/Information';
import * as actions from '../../Actions/getDataActions';

import Web3 from 'web3';
import CVContract from '../../Components/Utils/CV.json';
import Infura from '../../Components/Utils/Infura.json';

class Layout extends Component {
  componentDidMount() {
    if (!this.props.personal.personalInfo) {this.getData();}
  }

  getData() {
    //set smart contract web3 instance
    const provider = new Web3.providers.HttpProvider(Infura.link);
    const web3 = new Web3(provider);
    const CV = web3.eth.contract(CVContract.abi);
    const CVInstance = CV.at(CVContract.networks[3].address);

    //call actions and save data from blockchain to store
    this.props.getPersonal(CVInstance);
    this.props.getExperience(CVInstance);
    this.props.getEducation(CVInstance);
    this.props.getCertificates(CVInstance);
    this.props.getLanguages(CVInstance);
    this.props.getInterests(CVInstance);
  }

  render() {
    return (
      <div>
        {this.props.personal.fetched_personal ? (
          <Personal personal={this.props.personal.personalInfo} />
          ) : (<h2>Loading</h2>)}
        {this.props.work.fetched_work ? (
          <Experience exp={this.props.work.workExperience} title={'Work'} />
          ) : (<h2>Loading</h2>)}
        {this.props.education.fetched_education ? (
          <Experience exp={this.props.education.education} title={'Education'} />
          ) : (<h2>Loading</h2>)}
        {this.props.certificates.fetched_certificates ? (
          <Certifications cert={this.props.certificates.certificates} />
        ) : (<h2>Loading</h2>)}
        {this.props.languages.fetched_languages ? (
          <Information info={this.props.languages.languages} title={'Languages'} />
        ) : (<h2>Loading</h2>)}
        {this.props.interests.fetched_interests ? (
          <Information info={this.props.interests.interests} title={'Interests'} />
        ) : (<h2>Loading</h2>)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    personal: state.personal,
    work: state.work,
    education: state.education,
    certificates: state.certificates,
    languages: state.languages,
    interests: state.interests
  };
}

export default connect(mapStateToProps, actions)(Layout);
