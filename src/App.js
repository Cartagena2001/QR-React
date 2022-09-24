import BasicInput from "./components/Basic-input";

import { useState } from "react";
import QRCode from "qrcode";
import LiveQrCode from "./components/Live-qr-code";
import Download from "./components/Download";

function App() {
  const [qrText, setQrText] = useState("");
  const [qrCode, setQrCode] = useState("");


  const generateQrCode = () => {
    QRCode.toDataURL(
      qrText,
      {
        width: 900,
        margin: 3,
      },
      (error, url) => {
        if (error) return console.log(error);
        setQrCode(url);
      }
    );
  };

  const handleQrCode = (e) => {
    setQrText(e.target.value);
    generateQrCode();
  };

  

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-white p-5 rounded-xl shadow-lg">
        <h1 className="text-[#387BF6] font-bold text-5xl mb-10">Generate QR</h1>
        <LiveQrCode value={qrText} />
        <BasicInput
          label="Enter URL to create the QR code:"
          value={qrText}
          onChange={handleQrCode}
        />
        <Download qrCode={qrCode} qrText={qrText}/>
        <span className="mt-10 font-semibold text-gray-400 hover:text-gray-600"><a href="https://twitter.com/Karta_12" target="__blank">@Karta_12</a></span>
      </div>
    </div>
  );
}

export default App;
