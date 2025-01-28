import React from "react";
import { Input } from "../ui/input";
import { CiSquarePlus } from "react-icons/ci";

const aplication = () => {
  return (
    <div className="flex justify-center items-center h-screen px-4">
      <div className="w-full max-w-md flex flex-col p-4 bg-white shadow-sm rounded-lg">

        {/* INPUT E BOTÃO */}
        <div className="flex flex-row items-center gap-2">
          <Input placeholder="Digite uma tarefa" className="flex-1 p-2 border border-gray-300 rounded-md"/>
          <CiSquarePlus size={50} className="cursor-pointer text-blue-500"/>
        </div>

        {/* Lista de tarefas */}
        <div className="mb-5">
          <p className="font-semibold text-lg mb-2">Lista de tarefas</p>
          <div className="flex flex-col gap-2">
            <div className="bg-gray-200 p-3 rounded-sm">Acordar 6H</div>
            <div className="bg-gray-200 p-3 rounded-sm">Escovar os dentes</div>
            <div className="bg-gray-200 p-3 rounded-sm">Tomar um banho gelado</div>
            <div className="bg-gray-200 p-3 rounded-sm">Dominar o mundo</div>
          </div>
        </div>

             {/* Tarefas concluídas */}
        <div>
          <p className="font-semibold text-lg mb-2">Tarefas concluídas</p>
          <div className="bg-gray-200 p-3 rounded-md text-green-600 line-through">Chorar no banho</div>
        </div>
      </div>
    </div>
  );
};

export default aplication;
