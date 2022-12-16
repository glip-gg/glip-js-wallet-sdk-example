import {useEffect, useState} from 'react';
import getGlipWallet from '../../wallet';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '@mui/material/Button';

const codeString = `glipWallet.showConnectModal(['google'])`;

const ShowCodeComponent = () => {
    const codeString = `glipWallet.getBalance()`;
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
    );
}

export default function FetchBalanceShowComponent(props:any) {
    const [wallet, setWallet] = useState(undefined as any);
    //copy codestring to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeString);
    }

    
    useEffect(() => {
        const initWallet = async () => {
        const wallet:any = await getGlipWallet();
        setWallet(wallet);
        console.log('balance', await wallet.getBalance());
        console.log('www');
    };
        initWallet();
    }, []);

    const getBalance = async () => {
        const balance = await wallet.getBalance();
        alert(balance);
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
                    onClick={() => getBalance()}>
              Execute Code
            </Button>
          </div>
        </div>
    );
}
