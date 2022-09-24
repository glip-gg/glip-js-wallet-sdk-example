import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ShowCodeComponent = () => {
    const codeString = `    const signTransaction = async () =>{
        let signer = await wallet?.getSigner();
        let displayMessage = "This transaction transfers 0 value";
        let publicAddress = (await wallet.getUserInfo()).publicAddress;
        let signedTx = signer.signTransaction({
            to: '0x0000000000000000000000000000000000000000',
            value: '0x0',
            data: '0x0',
            chainId: 137,
            nonce: 0,
            gasPrice: 0,
            gasLimit: 0,
            from: publicAddress,
        }, displayMessage);
    }
    `;

    return (
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
    );
}

export default function SignTransactionShowComponent(props:any) {
    const signTransaction = async () =>{
        let signer = await props.wallet?.getSigner();
        let displayMessage = "This transaction transfers 0 value";
        let publicAddress = (await props.wallet.getUserInfo()).publicAddress;
        let signedTx = signer.signTransaction({
            to: '0x0000000000000000000000000000000000000000',
            value: '0x0',
            data: '0x0',
            chainId: 137,
            nonce: 0,
            gasPrice: 0,
            gasLimit: 0,
            from: publicAddress,
        }, displayMessage);
        console.log(signedTx, 'signedTx');
    }

    return (
        <>
          <ShowCodeComponent/>
          <button onClick={() => signTransaction()}>
            Sign Transaction
          </button>
        </>
    );
}
