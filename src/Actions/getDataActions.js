export const getPersonal = CVInstance => {
  return {
    type: 'FETCH_PERSONAL',
    payload: new Promise((resolve, reject) => {
      const personalInfo = CVInstance.getPersonalInfo.call();
      personalInfo[3] = personalInfo[3].toNumber();
      resolve(personalInfo);
    })
  };
};

function getData(dataCounter, functionName) {
  let temp = [];
  for (let i = 0; i < dataCounter; i++) {
    temp.push(functionName(i));
  }
  return temp;
}

export const getExperience = CVInstance => {
  return {
    type: 'FETCH_WORK',
    payload: new Promise((resolve, reject) => {
      const countJob = CVInstance.countJob.call().toNumber();
      const jobs = getData(countJob, CVInstance.getJob.call);
      resolve(jobs.reverse());
    })
  };
};

export const getEducation = CVInstance => {
  return {
    type: 'FETCH_EDUCATION',
    payload: new Promise((resolve, reject) => {
      const countSchool = CVInstance.countSchool.call().toNumber();
      const schools = getData(countSchool, CVInstance.getSchool.call);
      resolve(schools.reverse());
    })
  };
};

export const getCertificates = CVInstance => {
  return {
    type: 'FETCH_CERTIFICATES',
    payload: new Promise((resolve, reject) => {
      const countCert = CVInstance.countCerts.call().toNumber();
      const certs = getData(countCert, CVInstance.getCert.call);
      resolve(certs.reverse());
    })
  };
};

export const getLanguages = CVInstance => {
  return {
    type: 'FETCH_LANGUAGES',
    payload: new Promise((resolve, reject) => {
      const countLanguages = CVInstance.countLanguages.call().toNumber();
      const languages = getData(countLanguages, CVInstance.getLanguage.call);
      resolve(languages);
    })
  };
};

export const getInterests = CVInstance => {
  return {
    type: 'FETCH_INTERESTS',
    payload: new Promise((resolve, reject) => {
      const countInterests = CVInstance.countInterests.call().toNumber();
      const interests = getData(countInterests, CVInstance.getInterest.call);
      resolve(interests);
    })
  };
};
