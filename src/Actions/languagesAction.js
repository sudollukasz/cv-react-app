export function getLanguages(CVInstance) {
  return {
    type: "FETCH_LANGUAGES",
    payload: new Promise((resolve, reject) => {
      const countLanguages = CVInstance.countLanguages.call().toNumber();

      const languages = getData(countLanguages, CVInstance.getLanguage.call);

      function getData(dataCounter, functionName) {
        let temp = [];
        for (let i = 0; i < dataCounter; i++) {
          temp.push(functionName(i));
        }
        return temp;
      }

      resolve(languages);
    })
  };
}

export function setLanguage(CVInstance, language) {
  return {
    type: "SET_LANGUAGE",
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
