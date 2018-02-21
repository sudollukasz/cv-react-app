export function getPersonal(CVInstance) {
    return {
        type: "FETCH_PERSONAL",
        payload: new Promise((resolve, reject) => {

            const personalInfo = CVInstance.getPersonalInfo.call()
            personalInfo[3] = personalInfo[3].toNumber()
            resolve(personalInfo)
        })
    }
}
 
export function setPersonal(CVInstance, personal) {
    return {
        type: "SET_PERSONAL",
        payload: new Promise((resolve, reject) => {
            CVInstance.setPersonalInfo(personal.name, personal.birth, personal.city, personal.phone, personal.email, personal.photo, 
                { from: window.web3.eth.accounts[0], gas: 2900000},
                (error, res) => {
                    if (!error) {
                        resolve(res)
                    } else return error
                }) 
        })
    }
}