export function getCertificates(CVInstance) {
    return {
        type: "FETCH_CERTIFICATES",
        payload: new Promise((resolve, reject) => {
            const countCert = CVInstance.countCerts.call().toNumber()

            const certs = getData(countCert, CVInstance.getCert.call)

            function getData(dataCounter, functionName) {
                let temp = [];
                for (let i = 0; i < dataCounter; i++) {
                    temp.push(functionName(i))
                }
                const output = temp.reverse()
                return output;
            }

            resolve(certs)
        })
    }
}

export function setCertificate(CVInstance, certificate) {
    return {
        type: "SET_CERTIFICATE",
        paload: new Promise((resolve, reject) => {
            CVInstance.setCert(certificate.name,
               { from: window.web3.eth.accounts[0], gas: 2900000 },
                (error, res) => {
                    if (!error) {
                        resolve(res)
                    } else return error
                })
        })
    }
}