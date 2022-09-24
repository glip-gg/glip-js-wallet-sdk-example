import {useEffect, useState} from 'react';
import getGlipWallet from '../../wallet';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '@mui/material/Button';

const codeString = `glipWallet.showConnectModal(['google'])`;

const ShowConnectModalCodeComponent = () => {
    
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
    );
}

export default function ConnectShowModalComponent(props:any) {
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
          <ShowConnectModalCodeComponent/>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Button variant="contained" onClick={() => copyToClipboard()}>Copy Code</Button>
            <Button variant="contained"
                    style={{marginLeft:'10px'}}
                    onClick={() => wallet.showConnectModal(['google'])}>
              Execute Code
            </Button>
          </div>
        </div>
    );
}
