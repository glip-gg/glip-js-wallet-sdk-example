import {useEffect, useState} from 'react';
import getGlipWallet from '../../wallet';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ShowCodeComponent = () => {
    const codeString = `glipWallet.logout()`;
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
    );
}

export default function LogoutShowComponent(props:any) {
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
          <ShowCodeComponent/>
          <button onClick={() => wallet.logout()}>
            Show Logout
          </button>
        </>
    );
}
