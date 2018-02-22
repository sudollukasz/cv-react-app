export function getEducation(CVInstance) {
  return {
    type: "FETCH_EDUCATION",
    payload: new Promise((resolve, reject) => {
      const countSchool = CVInstance.countSchool.call().toNumber();

      const schools = getData(countSchool, CVInstance.getSchool.call);

      function getData(dataCounter, functionName) {
        let temp = [];
        for (let i = 0; i < dataCounter; i++) {
          temp.push(functionName(i));
        }
        const output = temp.reverse();
        return output;
      }

      resolve(schools);
    })
  };
}

export function setEducation(CVInstance, education) {
  return {
    type: "SET_EDUCATION",
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
