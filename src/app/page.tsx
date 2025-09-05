"use client";
import QRCode from "qrcode";
import { useState, useEffect } from "react";

export default function Home() {
  const [svgEl, setSvgEl] = useState<string>("");
  const [text, setText] = useState<string>("");

  const generateQR = async () => {
    try {
      const mensagem =
        "Olá, conheci a clínica através do pôster e gostaria de mais informações";
      const telefone = "5518996817450";
      const whatsapp = `https://api.whatsapp.com/send/?phone=${telefone}&text=${encodeURI(
        mensagem
      )}&type=phone_number&app_absent=0`;

      //QRCODES
      const url = text || "https://www.google.com";
      const svg = await QRCode.toString(url, { type: "svg", width: 500 });
      setSvgEl(svg);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex min-h-screen flex-col px-24 py-8">
      <section className="">
        <div className="flex">
          <div>
            <h1 className="text-2xl">Gerar QR Codes</h1>
            <hr />
            <input
              type="text"
              className="border border-black p-2 w-full my-4"
              onChange={(value) => {
                setText(value.target.value);
              }}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={generateQR}
            >
              Gerar QRcode
            </button>
          </div>
          <div>
            <div
              className=""
              id="canvas"
              dangerouslySetInnerHTML={{ __html: svgEl }}
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}
