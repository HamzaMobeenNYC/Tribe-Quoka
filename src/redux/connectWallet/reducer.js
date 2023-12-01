import {
    SUCCESS_CONNECTION, FAILING_CONNECTION, IS_NOT_INSTALLED,
    CONTRACT_INSTANCE,
    IS_INSTALLED, ACCOUNTS_CHANGE,
} from '../actionType';

const initialState = {
    walletAddress: '',
    errorConnection: "",
    isInstalled: false,
    accounts: {},
    contractInstance: "",
    signerWallet: "",
    nftData: [],
    loaderRedux: false,
    ownerAddress: '',
}

const WalletReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_CONNECTION:
            return {
                ...state,
                walletAddress: action.payload,
                success: true
            }
        case FAILING_CONNECTION:
            return {
                ...state,
                errorConnection: action.payload
            }
        case IS_INSTALLED:
            return {
                ...state,
                isInstalled: action.payload
            }
        case IS_NOT_INSTALLED:
            return {
                ...state,
                isInstalled: action.payload
            }
        case ACCOUNTS_CHANGE:
            return {
                ...state,
                accounts: action.payload,
                flagAccount: true
            }
        case CONTRACT_INSTANCE:
            return {
                ...state,
                contractInstance: action.payload.contractInstance,
                signerWallet: action.payload.signerWallet,
                ownerAddress: action.payload.ownerAddress,

            }
        case WALLET_NFTS:
            return {
                ...state,
                nftData: action.payload
            }
        // case LOADER_STATE_FALSE: {
        //     return {
        //         ...state,
        //         loaderRedux: false
        //     }
        // }
        // case LOADER_STATE_TRUE: {
        //     return {
        //         ...state,
        //         loaderRedux: true
        //     }
        // }
        default:
            return state;
    }
}

export default WalletReducer