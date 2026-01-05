export default function Categories() {
  return (
    <div className="flex flex-col gap-3.75">
      <div>
        <h1 className="text-primary text-[18px] font-bold">
          Por que ser uma, se podemos ser várias?
        </h1>
        <h2 className="text-primary text-[16px] font-normal">
          A tua beleza é única e podes sempre realça-la
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-3.75 gap-y-5">
        {['Olhos', 'Lábios', 'Rosto', 'Acessórios'].map((category) => (
          <div
            key={category}
            className="relative flex h-[238px] w-[170px] items-end justify-center rounded-[30px] bg-cover bg-center shadow-md"
            style={{
              backgroundImage: `url(/images/categories/${category.toLowerCase()}.png)`,
            }}
          >
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[30px] bg-black/12" />
            <h3 className="z-10 mb-3.75 text-center text-[16px] font-black text-white">
              {category.toUpperCase()}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
