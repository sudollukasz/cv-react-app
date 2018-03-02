export const getOwner = CVInstance => {
  return {
    type: 'FETCH_OWNER',
    payload: new Promise((resolve, reject) => {
      let owner = CVInstance.owner((error, res) => {
        if (!error) {
          if (res !== window.web3.eth.accounts[0]) {
            owner = false;
          } else {
            owner = true;
          }
          resolve(owner);
        } else return error;
      });
    })
  };
};

export const setPersonal = (CVInstance, personal) => {
  return {
    type: 'SET_PERSONAL',
    payload: new Promise((resolve, reject) => {
      CVInstance.setPersonalInfo(
        personal.name,
        personal.birth,
        personal.city,
        personal.phone,
        personal.email,
        personal.photo,
        { from: window.web3.eth.accounts[0], gas: 2900000 },
        (error, res) => {
          if (!error) {
            resolve(res);
          } else return error;
        }
      );
    })
  };
}

export const setWork = (CVInstance, work) => {
  return {
    type: 'SET_WORK',
    payload: new Promise((resolve, reject) => {
      CVInstance.setJob(
        work.name,
        work.begin,
        work.end,
        work.duties,
        { from: window.web3.eth.accounts[0], gas: 2900000 },
        (error, res) => {
          if (!error) {
            resolve(res);
          } else return error;
        }
      );
    })
  };
}

export const setEducation = (CVInstance, education) => {
  return {
    type: 'SET_EDUCATION',
    payload: new Promise((resolve, reject) => {
      CVInstance.setJob(
        education.name,
        education.begin,
        education.end,
        education.info,
        { from: window.web3.eth.accounts[0], gas: 2900000 },
        (error, res) => {
          if (!error) {
            resolve(res);
          } else return error;
        }
      );
    })
  };
}

export const setCertificate = (CVInstance, certificate) => {
  return {
    type: 'SET_CERTIFICATE',
    paload: new Promise((resolve, reject) => {
      CVInstance.setCert(
        certificate.name,
        { from: window.web3.eth.accounts[0], gas: 2900000 },
        (error, res) => {
          if (!error) {
            resolve(res);
          } else return error;
        }
      );
    })
  };
}

export const setLanguage = (CVInstance, language) => {
  return {
    type: 'SET_LANGUAGE',
    payload: new Promise((resolve, reject) => {
      CVInstance.setLanguage(
        language.name,
        { from: window.web3.eth.accounts[0], gas: 2900000 },
        (error, res) => {
          if (!error) {
            resolve(res);
          } else return error;
        }
      );
    })
  };
}

export const setInterest = (CVInstance, interest) => {
  return {
    type: 'SET_INTEREST',
    payload: new Promise((resolve, reject) => {
      CVInstance.setInterests(
        interest.name,
        { from: window.web3.eth.accounts[0], gas: 2900000 },
        (error, res) => {
          if (!error) {
            resolve(res);
          } else return error;
        }
      );
    })
  };
}
