import { React, useEffect, useState } from "react";
import Services from './services/services'
import { MetamaskConnection } from "../../redux/connectWallet/action";

const Dashboard = () => {

    useEffect(() => {
        window.onload = () => {
            isConnected();
        };

        async function isConnected() {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length) {
                console.log(`You're connected to: ${accounts[0]}`);
                dispatch(MetamaskConnection())
            }
        }
    }, [])
    return (
        <div>
            <h4>Dashboard</h4>
            <Services />
        </div>
    )
}

export default Dashboard