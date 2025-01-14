import { Button } from "@/components/ui/button";
import Image from "next/image";

const DevComment = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10 p-5">
      <h1 className="text-center text-2xl font-bold p-1">
        Criei este aplicativo para ajudar você a organizar suas tarefas e
        alcançar seus objetivos com mais eficiência. Você pode planejar seu dia,
        acompanhar seu progresso e nunca mais esquecer de nada importante.
        Experimente agora mesmo e veja como é fácil manter tudo sob controle!
      </h1>
      <Image
        src="/profile.png"
        alt="Logo Planit"
        width={100}
        height={100}
        className="rounded-full"
      />

      <p>Italo Costa - Criador do Planit</p>
      <Button className="bg-teal-800 hover:bg-teal-400 hover:text-black text-white font-semibold p-7">
        Usar Grátis
      </Button>
    </div>
  );
};

export default DevComment;
