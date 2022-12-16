import {useEffect, useState} from 'react';
import { ethers } from "ethers";
import { abiERC20 } from '@metamask/metamask-eth-abis';
import getGlipWallet from '../../wallet';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '@mui/material/Button';

const codeString = `
    
    import { ethers } from "ethers";
    import { abiERC20 } from '@metamask/metamask-eth-abis';
     
    const transferNFT = async () => {
        let toAddress = "0xb2959e5493758F55e9c481d02C3C6D57BBB43B57";
        let glipWallet = await getGlipWallet();
        let myAddress = (await glipWallet.getUserInfo()).publicAddress;
        console.log('myAddress', myAddress);
        const quantity = 1;
        const contractAddress = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
        const erc20_rw = new ethers.Contract(address, abiERC20);
        const tx = await erc20_rw.populateTransaction['transfer'](
            myAddress,
            toAddress,
            quantity
        );
        let signer = await glipWallet.getSigner();
        let signedTransaction;
        try{
            signedTransaction = await signer.sendTransaction(tx);
        }
        catch(e){
            console.log('error', e);
        }
        return signedTransaction;
    }

`;

const ShowCodeComponent = () => {
    return (
        <SyntaxHighlighter language="javascript" customStyle={{
            textAlign: 'left',
        }} style={docco}>
          {codeString}
        </SyntaxHighlighter>
    );
}

export default function ERC20TransferShowComponent(props:any) {
    const [wallet, setWallet] = useState(undefined as any);
    useEffect(() => {
        const initWallet = async () => {
            const wallet:any = await getGlipWallet();
            setWallet(wallet);
            console.log('userinfo', await wallet.getUserInfo());
            console.log('www');
        };
        initWallet();
    }, []);

    
    
    
    const transferNFT = async () => {
        let toAddress = "0xb2959e5493758F55e9c481d02C3C6D57BBB43B57";
        let glipWallet = await getGlipWallet();
        let myAddress = (await glipWallet.getUserInfo()).publicAddress;
        console.log(await glipWallet.getUserInfo())
        console.log('myAddress', myAddress);
        const quantity = 1;
        const contractAddress = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
        
        //const erc20 = new ethers.Contract(address, abiERC721);
        const erc20_rw = new ethers.Contract(
            contractAddress, abiERC20);
        const tx = await erc20_rw.populateTransaction['transfer'](
            toAddress,
            quantity
        );
        let signer = await glipWallet.getSigner();
        let signedTransaction;
        try{
            signedTransaction = await signer.sendTransaction(tx);
        }
        catch(e){
            console.log('error', e);
        }
        return signedTransaction;
    }

    //copy codestring to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeString);
    }

    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
        }}>
          <ShowCodeComponent/>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Button variant="contained" onClick={() => copyToClipboard()}>Copy Code</Button>
            <Button variant="contained"
                    style={{marginLeft:'10px'}}
                    onClick={() => transferNFT()}>
              Execute Code
            </Button>
          </div>
        </div>
    );
}
