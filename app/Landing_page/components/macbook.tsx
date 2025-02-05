import Image from "next/image";

const Macbook = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-5">
      <div className="max-w-md mx-auto p-4">
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl text-center p-5">
          Melhore a produtividade com uma lista de tarefas 100% gratuita para
          usar no computador e no seu celular.
        </h1>
      </div>

      <Image src="/macbook.png" alt="Planit" width={1000} height={500} />
    </div>
  );
};

export default Macbook;
