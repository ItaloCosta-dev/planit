import { CiCirclePlus } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10 p-5">
      <h1 className="font-bold text-2xl text-teal-800">
        Como o Planit te ajuda?
      </h1>
      <p className="text-lg text-teal-800 text-center">
        Transforme sua rotina e alcance o máximo do seu potencial. Com nosso
        aplicativo de lista de tarefas, planeje, organize e acompanhe cada passo
        do seu dia de forma simples e eficiente, garantindo que você nunca perca
        um prazo ou uma ideia importante.
      </p>

      <div className="flex flex-col gap-10">
        <div className="flex flex-row gap-5">
          <Card className="flex flex-col justify-center items-center text-center p-10">
            <CardHeader>
              <CardTitle>Crie sua tarefa</CardTitle>
              <CardDescription className="flex justify-center">
                <CiCirclePlus size={35} />
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col justify-center items-center text-center p-10">
            <CardHeader>
              <CardTitle>Edite sua tarefa</CardTitle>
              <CardDescription className="flex justify-center">
                <FaPencilAlt size={35} />
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col justify-center items-center text-center p-10">
            <CardHeader>
              <CardTitle>Listar tarefas</CardTitle>
              <CardDescription className="flex justify-center">
                <CiViewList size={35} />
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="flex flex-row gap-5">
        <Card className="flex flex-col justify-center items-center text-center p-10">
            <CardHeader>
              <CardTitle>Tarefas concluídas</CardTitle>
              <CardDescription className="flex justify-center">
                <CiCircleCheck size={35} />
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="flex flex-col justify-center items-center text-center p-10">
            <CardHeader>
              <CardTitle>Deletar tarefas</CardTitle>
              <CardDescription className="flex justify-center">
                <CiTrash size={35} />
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col justify-center items-center text-center p-10">
            <CardHeader>
              <CardTitle>Use no celular</CardTitle>
              <CardDescription className="flex justify-center">
                <FaMobileAlt size={35} />
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;
