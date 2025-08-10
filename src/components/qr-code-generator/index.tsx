import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

const QrCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  return (
    <div className="qrcode-container">
      <h3 className="qrcode-header">Generate QR Code</h3>
      <div className="qrcode-form">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter text here..."
        />
        <button onClick={() => setQrCode(input)} type="button">
          Generate
        </button>
      </div>
      {qrCode && (
        <div className="qrcode">
          <QRCode value={qrCode} />
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;
