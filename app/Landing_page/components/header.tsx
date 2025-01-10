import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center gap-5">
      <Image src="/logo.png" alt="Logo Planit" width={250} height={250} />
      <h1 className="text-center text-4xl font-bold p-1">Organize seu dia a dia de graça, sem downloads!</h1>
      <p className="text-lg text-teal-800 text-center">Use o Planit direto do seu celular e conquiste mais produtividade com simplicidade.</p>

      <div>
        <Button className="bg-teal-800 hover:bg-teal-400 hover:text-black text-white font-semibold p-7">Usar Grátis</Button>
      </div>

    </header>
  );
};

export default Header;