'use client';

import Image from 'next/image';

export default function Footer() {
  function handleGoTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#242424] py-5">
      <button
        onClick={handleGoTop}
        className="flex cursor-pointer items-center justify-center gap-3.75"
      >
        <Image
          src="/images/icons/arrowup.svg"
          alt="Voltar para o topo"
          width={10}
          height={5}
          className=""
        />
        <h1 className="text-center text-sm font-medium text-white">
          Voltar para o topo
        </h1>
      </button>
      <hr className="my-3.75 w-[320px] border border-[#D1D1D1]" />

      <div className="flex w-full flex-row flex-wrap items-start justify-between gap-7.5 px-14">
        <div>
          <h1 className="mb-5 text-sm font-bold text-white uppercase underline decoration-white underline-offset-[10px]">
            Ajuda
          </h1>

          <p className="mb-3.75 text-xs text-[#D9D9D9]">Perguntas Frequentes</p>
          <p className="text-xs text-[#D9D9D9]">Contactos</p>
        </div>
        <div>
          <h1 className="mb-5 text-sm font-bold text-white uppercase underline decoration-white underline-offset-[10px]">
            QUEM SOMOS
          </h1>

          <p className="mb-3.75 text-xs text-[#D9D9D9]">Sobre a Maper</p>
        </div>

        <div>
          <h1 className="mb-5 text-sm font-bold text-white uppercase underline decoration-white underline-offset-[10px]">
            INFO
          </h1>

          <p className="mb-3.75 text-xs text-[#D9D9D9]">Termos e Condições</p>
          <p className="mb-3.75 text-xs text-[#D9D9D9]">
            Política de Devolução
          </p>
          <p className="text-xs text-[#D9D9D9]">Política de Privacidade</p>
        </div>
        <div>
          <h1 className="mb-5 text-sm font-bold text-white uppercase underline decoration-white underline-offset-[10px]">
            REDES SOCIAIS
          </h1>

          <div className="flex flex-row items-center gap-5">
            <Image
              src="/images/social/insta.svg"
              alt="Instagram"
              width={25}
              height={25}
              className=""
            />
            <Image
              src="/images/social/face.svg"
              alt="Facebook"
              width={25}
              height={25}
              className=""
            />
            <Image
              src="/images/social/tiktok.svg"
              alt="TikTok"
              width={25}
              height={22}
              className=""
            />
          </div>
        </div>

        <div>
          <h1 className="mb-5 text-sm font-bold text-white uppercase underline decoration-white underline-offset-[10px]">
            ATENDIMENTO AO CLIENTE
          </h1>
          <p className="mb-3.75 text-xs text-[#D9D9D9]">Contacto</p>
          <p className="mb-0.5 text-xs text-[#D9D9D9]">Seg a Sex - 8h às 20h</p>
          <p className="text-xs text-[#D9D9D9]">Sáb - 10h às 16h</p>
        </div>
      </div>

      <Image
        src="/images/logo/logo-white.svg"
        alt="Voltar para o topo"
        width={120}
        height={84}
        className="my-6.25"
      />

      <h1 className="text-sm font-medium text-white">
        Realce a Beleza que Já é Sua!
      </h1>
      <hr className="my-3 w-[360px] border border-[#D1D1D1]" />

      <span className="text-xs font-light text-[#D9D9D9]">
        2025 Maper, Todos os direitos reservados.
      </span>
    </div>
  );
}
