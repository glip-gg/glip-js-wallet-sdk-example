import {useEffect, useState} from 'react';
import getGlipWallet from '../../wallet';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '@mui/material/Button';

const codeStringShowWallet = `glipWallet.showWallet()`;
const ShowCodeComponentShowWallet = () => {
    
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeStringShowWallet}
        </SyntaxHighlighter>
    );
}
const codeStringHideWallet = `glipWallet.hideWallet()`;
const ShowHCodeComponentHideWallet = () => {
    
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeStringHideWallet}
        </SyntaxHighlighter>
    );
}

export default function ShowWalletShowComponent(props:any) {
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
    const copyToClipboardShowWallet = () => {
        navigator.clipboard.writeText(codeStringShowWallet);
    }

    const copyToClipboardHideWallet = () => {
        navigator.clipboard.writeText(codeStringHideWallet);
    }

    
    return (
        <>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
        }}>
        <ShowCodeComponentShowWallet/>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Button variant="contained" onClick={() => copyToClipboardShowWallet()}>Copy Code</Button>
        <Button variant="contained"
        style={{marginLeft:'10px'}}
        onClick={() => wallet.showWallet()}>
        Execute Code
        </Button>
        </div>
        </div>
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
        }}>
          <ShowHCodeComponentHideWallet/>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Button variant="contained" onClick={() => copyToClipboardHideWallet()}>Copy Code</Button>
            <Button variant="contained"
                    style={{marginLeft:'10px'}}
                    onClick={() => wallet.hideWallet()}>
              Execute Code
            </Button>
          </div>
        </div>
        </>
    );
}
