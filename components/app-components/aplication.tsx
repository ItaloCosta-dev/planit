import React, { useState } from "react";
import { Input } from "../ui/input";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { CiTrash } from "react-icons/ci";

const Aplication = () => {
  const [task, setTask] = useState(""); // armazenar o valor das tarefas.
  const [createdTask, setCreatedTask] = useState<string[]>([]); // armezenar as tarefas criadas.

  const handleAddTask = () => {
    if (task !== "") {
      // Verifica se a tarefa não é uma string vazia
      setCreatedTask([...createdTask, task]); // Adiciona a nova tarefa
      setTask(""); // Limpa o input após adicionar a tarefa
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-4">
      <div className="w-full max-w-md flex flex-col p-4 bg-white shadow-sm rounded-lg">
        {/* INPUT E BOTÃO */}
        <div className="flex flex-row items-center gap-2">
          <Input
            placeholder="Digite uma tarefa"
            className="flex-1 p-2 border border-gray-300 rounded-md"
            value={task}
            onChange={(e) => setTask(e.target.value)} // atualiza o valor do input
          />
          <CiSquarePlus
            size={50}
            className="cursor-pointer text-blue-500"
            onClick={handleAddTask}
          />
        </div>

        {/* Lista de tarefas */}
        <div className="mb-5">
          <p className="font-semibold text-lg mb-2">Lista de tarefas</p>
          <div className="flex flex-col gap-2">
            {createdTask.map((task, index) => (
              <div
                className="bg-gray-200 p-3 rounded-sm flex flex-row justify-between items-center"
                key={index}
              >
                {task}
                <div className="flex flex-row gap-2">
                  <CiSquareCheck  size={23} className="cursor-pointer text-green-700"/>
                  <GoPencil  size={23} className="cursor-pointer text-blue-500"/>
                  <CiTrash  size={23} className="cursor-pointer text-red-500"/>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tarefas concluídas */}
        <div>
          <p className="font-semibold text-lg mb-2">Tarefas concluídas</p>
          <div className="bg-gray-200 p-3 rounded-md text-green-600 line-through">
            Tarefa concluída
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplication;
