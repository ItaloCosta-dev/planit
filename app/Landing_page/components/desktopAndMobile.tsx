import Image from "next/image";

const DesktopAndMobile = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10 p-5">
      <h1 className="text-center text-2xl font-bold p-1">
        Use o Planit no celular ou no computador
      </h1>
      <p>
        Organize suas tarefas de forma prática e eficiente, onde quiser: nosso
        to-do app é 100% responsivo, funcionando perfeitamente no seu celular,
        tablet ou computador.
      </p>
      <Image src="/Content.png" alt="Logo Planit" width={1000} height={250} />
    </div>
  );
};

export default DesktopAndMobile;
