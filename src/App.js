import BasicInput from './components/Basic-input';

import { useState } from 'react';
import QRCode from 'qrcode';
import LiveQrCode from './components/Live-qr-code';
import Download from './components/Download';

function App() {

  const [qrText, setQrText] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQrCode = () => {
    QRCode.toDataURL(qrText, {
      width: 900,
      margin: 3,
    }, (error, url) =>{
      if(error) return console.log(error);
      setQrCode(url);
    })
  }

  const handleQrCode = e => {
    setQrText(e.target.value);
    generateQrCode();
  }

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1 className='text-white font-bold text-5xl mb-10'>Generate QR</h1>
      <LiveQrCode value={qrText} />
      <BasicInput 
      label="Enter text"
      value={qrText}
      onChange={handleQrCode}/>
      <Download  qrCode={qrCode} qrText={qrText}/>
    </div>
  );
}

export default App;
