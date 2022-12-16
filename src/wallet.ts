import { glipWalletSDK } from 'glip-wallet-sdk/wallet';
let initializedGlipWallet:any = false;

const getGlipWallet = async () => {
    if(initializedGlipWallet) {
        return initializedGlipWallet;
    }
    await glipWalletSDK.init({
        chainId: 137,
        authNetwork: 'cyan',
        clientIdentifier: '62fd0e1b5f653536e9c657a8'
    });
    initializedGlipWallet = glipWalletSDK;
    return glipWalletSDK;
};

export default getGlipWallet;
