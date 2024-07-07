'use client'
import QRCode from 'qrcode'
import { useState } from 'react'

export default function Home() {
  const [svgEl, setSvgEl] = useState<string>('')
  
  const generateQR = async () => {
    try {
      const mensagem = 'Olá, conheci a clínica através do pôster e gostaria de mais informações'
      const telefone = '5518996817450'
      const whatsapp = `https://api.whatsapp.com/send/?phone=${telefone}&text=${encodeURI(mensagem)}&type=phone_number&app_absent=0`
      const url = 'https://docs.google.com/forms/d/e/1FAIpQLSf1VnRK0VuhIzpSn0QoVypOj7LgPJvAjfLceHWiq3ucNrSQOw/viewform'
      const svg =  await QRCode.toString(url, { type: 'svg', width: 500 })
      setSvgEl(svg)
    } catch (err) {
      console.error(err)
    }
  }

  generateQR()

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className='mb-16' id="canvas" dangerouslySetInnerHTML={{ __html: svgEl }}></div>
      <div>
        <h1 className="text-2xl">Blog DEV - Felipe Lima</h1>
      </div>
      <hr />
      <section className="pt-6">
        <h2 className="text-xl font-bold">Projeto NextJS, Tailwind e Prisma ORM</h2>
        <div className="pt-2">
          <p>Desenvolvendo um projeto para gerencimento de clinicas de fisioterapia, com features como: Agenda, Prontuario, Acompanhamento, Avaliação, Contas a Receber, etc.</p>
          <p>A arquitetura do projeto irá utilizar um modelo multi-tenant com banco de dados compartilhado e um sistema de login simples com apenas email e senha.</p>
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-medium">Banco de dados</h3>
          <div>
            <p>A primeira coisa foi escolher um banco de dados, neste caso o escolhido foi o MySQL, por nenhum motivo em particular.</p>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-medium">Projeto NextJS</h3>
          <div>
            <p className="mt-2">Para iniciar o projeto NextJS foi utilizado o seguindo comando:</p>
            <div className="flex">
              <pre className="mt-1 p-2 rounded bg-gray-200">
                npx create-next-app@latest blog-dev --typescript --eslint
              </pre>
            </div>

            <p className="mt-2">Depois do projeto criado é hora que instalar o Prisma:</p>
            <div className="flex mb-2">
              <pre className="mt-1 p-2 rounded bg-gray-200">
                npm install prisma --save-dev
              </pre>
            </div>
            <p>Depois de instalado é preciso criar o arquivo de schema para o Prisma no diretorio <span className="italic">'src/prisma/schema.prisma'.</span></p>
            <p>Este arquivo será responsavel pelo mapeamento das tabelas do banco de dados MySQL</p>
          </div>
        </div>
      </section>
    </main>
  );
}
