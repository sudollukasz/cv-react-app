export function getOwner(CVInstance) {
    return {
        type: "FETCH_OWNER",
        payload: new Promise((resolve, reject) => {

            let owner = CVInstance.owner((error, res) => {
                if (!error) {
                    if (res !== window.web3.eth.accounts[0]) {
                        owner = false
                    }
                    else {
                        owner = true
                        
                    }
                    resolve(owner)
                } else return error
            })
        })
    }
}