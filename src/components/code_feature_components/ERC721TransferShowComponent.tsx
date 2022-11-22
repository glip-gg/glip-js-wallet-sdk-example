import {useEffect, useState} from 'react';
import { ethers } from "ethers";
import { abiERC721 } from '@metamask/metamask-eth-abis';
import getGlipWallet from '../../wallet';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '@mui/material/Button';

const codeString = `
    
    import { ethers } from "ethers";
    import { abiERC721 } from '@metamask/metamask-eth-abis';
     
    const transferNFT = async () => {
        let toAddress = "0x6203A4a2c3c58bEA165b72012303Dbd8FF938B1b";
        let glipWallet = await getGlipWallet();
        let myAddress = (await glipWallet.getUserInfo()).publicAddress;
        console.log('myAddress', myAddress);
        const quantity = 1;
        const contractAddress = "0xE1fe881845ce91d16628A677CFf12584476955Ce";
        const erc721_rw = new ethers.Contract(address, abiERC721);
        const tx = await erc721_rw.populateTransaction['transfer'](
            myAddress,
            toAddress,
            quantity
        );
        let signer = await glipWallet.getSigner();
        let signedTransaction;
        try{
            signedTransaction = await signer.signTransaction(tx);
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

export default function ERC721TransferShowComponent(props:any) {
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
        let toAddress = "0x6203A4a2c3c58bEA165b72012303Dbd8FF938B1b";
        let glipWallet = await getGlipWallet();
        let myAddress = (await glipWallet.getUserInfo()).publicAddress;
        console.log(await glipWallet.getUserInfo())
        console.log('myAddress', myAddress);
        const quantity = 1;
        const contractAddress = "0xE1fe881845ce91d16628A677CFf12584476955Ce";
        
        //const erc20 = new ethers.Contract(address, abiERC721);
        const erc721_rw = new ethers.Contract(
            contractAddress, abiERC721);
        const tx = await erc721_rw.populateTransaction['transferFrom'](
            myAddress,
            toAddress,
            quantity
        );
        let signer = await glipWallet.getSigner();
        let signedTransaction;
        try{
            signedTransaction = await signer.signTransaction(tx);
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
