import {useEffect, useState} from 'react';
import getGlipWallet from '../../wallet';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ShowConnectModalCodeComponent = () => {
    const codeString = `glipWallet.login('google')`;
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
    );
}

export default function LoginShowComponent(props:any) {
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
    
    return (
        <>
          <ShowConnectModalCodeComponent/>
          <button onClick={() => wallet.login(
              'google', window.location.href
          )}>
            Show Login
          </button>
        </>
    );
}
