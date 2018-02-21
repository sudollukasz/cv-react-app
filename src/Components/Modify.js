import React from "react";

import NoMetamask from './Modify/NoMetamask'
import WrongProvider from './Modify/WrongProvider'
import Layout from '../Containers/Modify/Layout'

const Modify = () =>{
    if (typeof window.web3 === 'undefined') {
        return <NoMetamask />
    } else if (window.web3.version.network !== '3') {
        return <WrongProvider />
        } else {
            return <Layout />
        }
}

export default Modify