export function getInterests(CVInstance) {
    return {
        type: "FETCH_INTERESTS",
        payload: new Promise((resolve, reject) => {
            const countInterests = CVInstance.countInterests.call().toNumber()

            const interests = getData(countInterests, CVInstance.getInterest.call)
            
            function getData(dataCounter, functionName) {
                let temp = [];
                for (let i = 0; i < dataCounter; i++) {
                    temp.push(functionName(i))
                }
                return temp;
            }

            resolve(interests)
        })
    }
}

export function setInterest(CVInstance, interest) {
    return {
        type: "SET_INTEREST",
        payload: new Promise((resolve, reject) => {
            CVInstance.setInterests(interest.name,
                { from: window.web3.eth.accounts[0], gas: 2900000 },
                (error, res) => {
                    if (!error) {
                        resolve(res)
                    } else return error
                })
        })
    }
}