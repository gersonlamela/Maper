import CardValues from './card-values';

export default function Values() {
  return (
    <div
      className="flex h-auto w-full flex-col items-center justify-center gap-6 bg-cover bg-no-repeat px-4 py-7.5"
      style={{
        backgroundImage: `url(/images/BackgroudValues.svg)`,
      }}
    >
      <h1 className="text-center text-[32px] font-bold">#ma.per</h1>

      <div className="flex flex-wrap items-center justify-center gap-x-5.25 gap-y-3.75 justify-self-center">
        <CardValues
          imageSrc="diamond.svg"
          title="Exclusivo"
          description="Produtos de extrema
qualidade, apresentamos
um design exclusivo
a pensar em si!"
        />
        <CardValues
          imageSrc="rabbit.svg"
          title="Livre de Crueldade"
          description="Não testamos produtos ou ingredientes em animais. Somos certificas pelo PETA por Cruelty Free"
        />
        <CardValues
          imageSrc="shine.svg"
          title="Hipoalergênico"
          description="Os nossos produtos passam por testes de sensibilização realizados em laboratórios especializados"
        />
        <CardValues
          imageSrc="hand.svg"
          title="Dermatologicamente
Testado"
          description="Dermatologicamente testados em diferentes tipos de pele para procurar compatibilidade e segurança"
        />

        <CardValues
          imageSrc="chemicals.svg"
          title="Sem Parabenos"
          description="As nossas fórmulas foram desenvolvidas
sem parabenos, pois priorizamos a sua saúde"
        />
      </div>
    </div>
  );
}
