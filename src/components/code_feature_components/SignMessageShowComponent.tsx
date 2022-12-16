import {useEffect, useState} from 'react';
import getGlipWallet from '../../wallet';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '@mui/material/Button';

const codeString = `
  const signTransaction = async () => {
    let signer = await wallet?.getSigner();
    let signedMessage = await signer.signMessage("wow bro \n wow");
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

export default function SignMessageShowComponent(props:any) {
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



    const signMessage = async () =>{
        let signer = await wallet.getSigner();
        let publicAddress = (await wallet.getUserInfo()).publicAddress;
        let displayMessage = "This transaction transfers 0 value";

        let signedTx = await signer.signMessage("wow bro \n wow");
        console.log(signedTx, 'signedTx');
        alert(signedTx);
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
                    onClick={() => signMessage()}>
              Execute Code
            </Button>
          </div>
        </div>
    );
}
