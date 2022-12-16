import { glipWalletSDK } from 'glip-wallet-sdk/wallet';
let initializedGlipWallet:any = false;

const getGlipWallet = async () => {
    if(initializedGlipWallet) {
        return initializedGlipWallet;
    }
    await glipWalletSDK.init({
        chainId: 137,
        authNetwork: 'cyan',
        clientIdentifier: '63020e1ef81e3742a278846a'
    });
    initializedGlipWallet = glipWalletSDK;
    return glipWalletSDK;
};

export default getGlipWallet;
