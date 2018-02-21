export function getExperience(CVInstance) {
    return {
        type: "FETCH_WORK",
        payload: new Promise((resolve, reject) => {
            const countJob = CVInstance.countJob.call().toNumber()

            const jobs = getData(countJob, CVInstance.getJob.call)
            
            function getData(dataCounter, functionName) {
                let temp = [];
                for (let i = 0; i < dataCounter; i++) {
                    temp.push(functionName(i))
                }
                const output = temp.reverse()
                return output;
            }

            resolve(jobs)
        })
    }
}

export function setWork(CVInstance, work) {
    return {
        type: "SET_WORK",
        payload: new Promise((resolve, reject) => {
            CVInstance.setJob(work.name, work.begin, work.end, work.duties,
                { from: window.web3.eth.accounts[0], gas: 2900000 },
                (error, res) => {
                    if (!error) {
                        resolve(res)
                    } else return error
                })
        })
    }
}