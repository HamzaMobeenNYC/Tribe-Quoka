import { ethers } from 'ethers'
import axios from "axios";

import {
    SUCCESS_CONNECTION, FAILING_CONNECTION, IS_INSTALLED,
    IS_NOT_INSTALLED, ACCOUNTS_CHANGE, CONTRACT_INSTANCE,
} from '../actionType';
import { config } from '../../config/config';
import { toast } from "react-toastify";
// import MetaMaskOnboarding from "@metamask/onboarding";
import contractAbi from '../../utils/contractAbi/contractAbi.json'

export const MetamaskConnection = () => async (dispatch) => {
    console.log("CAME HERE")
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const network = await provider.getNetwork();

        if (provider) {
            if (network.chainId == process.env.REACT_APP_CHAIN_ID_ETHEREUM) {
                try {
                    // dispatch({
                    //     type: LOADER_STATE_TRUE
                    // })
                    await provider.send("eth_requestAccounts", []);
                    let signer = provider.getSigner();
                    let address = await signer.getAddress();
                    let contractInstance = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, contractAbi, signer);
                    if (contractInstance) {
                        const ownerAddress = await contractInstance.owner();
                        /**
                         *  response get from backend
                         */
                        dispatch({
                            type: WALLET_NFTS,
                            payload: response.data
                        })

                        let data = {
                            contractInstance: contractInstance,
                            signerWallet: address,
                            ownerAddress: ownerAddress

                        }
                        dispatch({
                            type: CONTRACT_INSTANCE,
                            payload: data
                        })
                    }
                    // dispatch({
                    //     type: LOADER_STATE_FALSE
                    // })

                } catch (error) {
                    dispatch({
                        type: FAILING_CONNECTION,
                        payload: error
                    })
                    // dispatch({
                    //     type: LOADER_STATE_FALSE
                    // })
                    if (error.code === 4001) {
                        toast.error('Error while connecting')
                    } else if (error.code === -32002) {
                        toast.error(error.message);
                    } else {
                        toast.error(error.message);
                    }
                }
            }
            else {
                toast.error('Please Connect to Ethereum first')
            }
        }
    } else {
        alert('Metamask not installed')
    }
}

export const CheckMetaMaskInstalled = () => async (dispatch) => {

    window.addEventListener('load', () => {
        try {
            if (typeof window.ethereum !== 'undefined') {
                dispatch({
                    type: IS_INSTALLED,
                    payload: true
                })
            }
            else {
                dispatch({
                    type: IS_NOT_INSTALLED,
                    payload: false
                })
            }
        } catch (error) {
            toast.error('error in metamask connection')
        }
    })
}

export const accountsCheck = () => async (dispatch) => {
    window.addEventListener('load', () => {
        try {
            // if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            window.ethereum.on('accountsChanged', (accounts) => {
                let data = {}
                if (accounts.length > 0) {
                    data.account = accounts;
                    data.length = accounts.length;
                    dispatch({
                        type: ACCOUNTS_CHANGE,
                        payload: data
                    })
                }

            }
            );
            // }
        }
        catch (error) {
            toast.error('error in accounts changing in metamask')
        }
    })
}


// const checkBalance = async (address, provider) => {
//     try {
//         if (typeof window.ethereum !== 'undefined') {
//             let tokenInstance = new ethers.Contract(process.env.REACT_APP_WRAPPED_ETHER, tokenAbi, provider);
//             let balance = await tokenInstance.balanceOf(address);
//             balance = Number(balance / 10 ** 18)
//             return balance;
//         }
//     } catch (error) {
//         toast.error('error in Wrapped Ether Token')
//     }
// }


