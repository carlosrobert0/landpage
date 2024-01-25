import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-[#2A2A2A]">
        <header className="flex items-center justify-center mt-2.5">
          <Image
            alt="Icone"
            src="/icon.png"
            width={100}
            height={87}
            className="object-contain"
          />
        </header>
        <div className="flex items-center justify-center mt-[60px]">
          <div>
            <h4 className="text-[#7ED957] text-xl font-poppins font-semibold">GUIA COMPETO PARA UMA VIDA MAIS LEVE</h4>
            <h2 className="text-[#FFF] text-[53px] font-poppins font-bold w-[481px] leading-[53px] mt-[45px]">DESCUBRA NESSE E-BOOK  O SEGREDO PARA EMAGRECER COM SAÚDE.</h2>
            <h6 className="text-[#FFF] text-base text-center font-poppins mt-[150px]">Compre Agora Mesmo o Seu E-book.</h6>
            <button className="bg-[#4BC228] text-white text-[25px] font-bold rounded-[40px] w-[337px] h-[65px] mt-[30px] ml-[76px]">
              <a href="https://pay.kiwify.com.br/qao3xsN">COMPRAR AGORA</a>
            </button>
          </div>
          <div className="ml-[45px]">
            <Image
              alt="Icone"
              src="/ebook.png"
              width={400}
              height={458}
              className="object-contain"
            />
          </div>
        </div>
        <footer className="mt-[100px] w-full">
          <Image
            alt="Icone"
            src="/footer.png"
            width={1920}
            height={100}
            className="object-contain w-full"
          />
        </footer>
      </main>

      <main className="flex pt-[120px] min-h-screen flex-col items-center justify-between bg-[#2A2A2A]">
        <div className="flex flex-col max-w-[655px]">
          <h1 className="font-semibold text-[35px] leading-[35px] font-poppins text-white">POR QUE <br />
            <span className="text-[#7ED957]">COMPRAR NOSSO E-BOOK?</span>
          </h1>
          <h2 className="text-[20px] leading-[36px] font-poppins text-white mt-[32px]">Se você está procurando uma maneira de perder peso de forma
            saudável e duradoura, baixe agora mesmo nosso Guia Definitivo
            Do Emagrecimento Saudável. Aqui estão alguns motivos pelos
            quais você deveria considerar adquirir nosso e-book sobre
            emagrecimento saudável:</h2>
        </div>
        <div className="flex items-center gap-[38px] justify-center mt-[60px]">
          <div>
            <div className="w-[295px] gap-2.5 flex flex-col justify-start">
              <h3 className="font-poppins text-xl text-[#4bc228] font-semibold leading-[30px]">Dicas Práticas:</h3>
              <p className="font-poppins text-[15px] text-white leading-[27px]">
                Nosso e-book sobre emagrecimento
                saudável geralmente contêm dicas
                práticas e fáceis de seguir para ajudar
                você a mudar seus hábitos
                alimentares e estilo de vida, de forma
                que possa manter o peso ideal a longo
                prazo.
              </p>
            </div>
            <hr className="my-[25px]" />
            <div className="w-[295px] gap-2.5 flex flex-col justify-start">
              <h3 className="font-poppins text-xl text-[#4bc228] font-semibold leading-[30px]">Acesso Instantâneo:</h3>
              <p className="font-poppins text-[15px] text-white leading-[27px]">
                Comprar nosso ebook para emagrecer
                saudável é rápido e fácil, e você pode
                ter acesso imediato ao conteúdo
                assim que finalizar o download.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              alt="Icone"
              src="/ebook.png"
              width={400}
              height={400}
              className="object-contain"
            />
            <button className="bg-[#4BC228] text-white text-[25px] font-bold rounded-[40px] w-[337px] h-[65px] mt-[30px]">
              <a href="https://pay.kiwify.com.br/qao3xsN">COMPRAR AGORA</a>
            </button>
          </div>

          <div>
            <div className="w-[295px] gap-2.5 flex flex-col justify-start">
              <h3 className="font-poppins text-xl text-[#4bc228] font-semibold leading-[30px]">Informações Especializadas:</h3>
              <p className="font-poppins text-[15px] text-white leading-[27px]">
                Nosso e-book de emagrecimento
                saudável contém informações
                confiáveis e especializadas sobre como
                perder peso com saúde, sem precisar
                seguir dietas malucas ou perigosas.
              </p>
            </div>
            <hr className="my-[25px]" />
            <div className="w-[295px] gap-2.5 flex flex-col justify-start">
              <h3 className="font-poppins text-xl text-[#4bc228] font-semibold leading-[30px]">Flexibilidade:</h3>
              <p className="font-poppins text-[15px] text-white leading-[27px]">
                Com nosso ebook sobre
                emagrecimento saudável, você pode
                aprender a controlar o seu peso no seu
                próprio ritmo e de acordo com o seu
                estilo de vida, sem precisar seguir
                regras rígidas ou horários específicos.
              </p>
            </div>
          </div>

        </div>
        <footer className="mt-[100px] w-full">
          <Image
            alt="Icone"
            src="/footer.png"
            width={1920}
            height={100}
            className="object-contain w-full"
          />
        </footer>
      </main>
    </>
  )
}
