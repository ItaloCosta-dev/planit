import { CiCirclePlus } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10">
      <h1 className="font-bold text-2xl text-teal-800">
        Como o Planit te ajuda?
      </h1>
      <p className="text-lg text-teal-800 text-center">
        Transforme sua rotina e alcance o máximo do seu potencial. Com nosso
        aplicativo de lista de tarefas, planeje, organize e acompanhe cada passo
        do seu dia de forma simples e eficiente, garantindo que você nunca perca
        um prazo ou uma ideia importante.
      </p>

      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col ustify-center items-center">
          <CiCirclePlus size={35} />
          <h1 className="font-bold text-teal-800">Crie sua tarefa</h1>
          <p className="text-center">
            Adicione sua tarefa rapidamente com um título de sua preferência.
          </p>
        </div>

        <div className="flex flex-col ustify-center items-center">
          <FaPencilAlt size={35} />
          <h1 className="font-bold text-teal-800">Edite a sua tarefa</h1>
          <p className="text-center">
            Não gostou do nome? Sem problemas, edite de forma fácil.
          </p>
        </div>

        <div className="flex flex-col ustify-center items-center">
          <CiTrash size={35} />
          <h1 className="font-bold text-teal-800">Delete a qualquer momento</h1>
          <p className="text-center">
            Caso sua tarefa não seja mais prioridade, apague com apenas um
            clique.
          </p>
        </div>

        <div className="flex flex-col ustify-center items-center">
          <CiCircleCheck size={35} />
          <h1 className="font-bold text-teal-800">Tarefas concluídas</h1>
          <p className="text-center">
            Veja em tempo real todas as tarefas que você já concluiu.
          </p>
        </div>

        <div className="flex flex-col ustify-center items-center">
          <CiViewList size={35} />
          <h1 className="font-bold text-teal-800">
            Veja todas as suas tarefas
          </h1>
          <p className="text-center">
            Visualize todas as tarefas em uma lista organizada.
          </p>
        </div>

        <div className="flex flex-col ustify-center items-center">
          <FaMobileAlt size={35} />
          <h1 className="font-bold text-teal-800">Design responsivo</h1>
          <p className="text-center">
            Acesse sua lista de tarefas no celular, tablet ou desktop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
