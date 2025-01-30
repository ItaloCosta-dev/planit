import React, { useState } from "react";
import { Input } from "../ui/input";
import { CiSquarePlus, CiSquareCheck, CiTrash } from "react-icons/ci";
import { GoPencil } from "react-icons/go";

const Aplication = () => {
  const [task, setTask] = useState(""); // Armazena o valor da tarefa nova.
  const [createdTask, setCreatedTask] = useState<string[]>([]); // Lista de tarefas criadas.
  const [completedTasks, setCompletedTasks] = useState<string[]>([]); // Lista de tarefas concluídas.
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Índice da tarefa sendo editada.
  const [editText, setEditText] = useState(""); // Texto da edição atual.

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setCreatedTask([...createdTask, task]); // Adiciona a nova tarefa.
      setTask(""); // Limpa o input.
    }
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index); // Define o índice da tarefa sendo editada.
    setEditText(createdTask[index]); // Preenche o input com o valor atual da tarefa.
  };

  const handleEditTask = (index: number) => {
    if (editText.trim() !== "") {
      const updatedTask = [...createdTask]; // Faz uma cópia do array
      updatedTask[index] = editText; // Atualiza a tarefa editada
      setCreatedTask(updatedTask); // Atualiza o estado
      setEditingIndex(null); // Sai do modo de edição
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = createdTask.filter((_, i) => i !== index);
    setCreatedTask(updatedTasks);
  };

  const handleCompleteTask = (index: number) => {
    const taskToComplete = createdTask[index]; // Obtém a tarefa selecionada
    setCompletedTasks([...completedTasks, taskToComplete]); // Move para a lista de concluídas
    handleDeleteTask(index); // Remove da lista ativa
  };

  const handleDeleteCompleteTask = (index: number) => {
    const updatedCompletedTasks = completedTasks.filter((_,i) => i !== index)
    setCompletedTasks(updatedCompletedTasks)
  }

  return (
    <div className="flex justify-center items-center h-screen px-4">
      <div className="w-full max-w-md flex flex-col p-4 bg-white shadow-sm rounded-lg">
        {/* INPUT E BOTÃO */}
        <div className="flex flex-row items-center gap-2">
          <Input
            placeholder="Digite uma tarefa"
            className="flex-1 p-2 border border-gray-300 rounded-md"
            value={task}
            onChange={(e) => setTask(e.target.value)}
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
                {editingIndex === index ? (
                  <input
                    className="p-1 border border-gray-400 rounded-sm flex-1"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => handleEditTask(index)} // Salva ao perder o foco
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleEditTask(index);
                    }} // Salva ao pressionar Enter
                    autoFocus
                  />
                ) : (
                  <span>{task}</span>
                )}

                <div className="flex flex-row gap-2">
                  <CiSquareCheck
                    size={23}
                    className="cursor-pointer text-green-700"
                    onClick={() => handleCompleteTask(index)}
                  />
                  <GoPencil
                    size={23}
                    className="cursor-pointer text-blue-500"
                    onClick={() => handleEditClick(index)}
                  />
                  <CiTrash
                    size={23}
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDeleteTask(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tarefas concluídas */}
        <div>
          <p className="font-semibold text-lg mb-2">Tarefas concluídas</p>
          <div className="flex flex-col gap-2">
            {completedTasks.map((task, index) => (
              <div
                key={index}
                className="bg-gray-200 p-3 rounded-md text-green-600 line-through flex justify-between flex-row items-center"
              >
                 {task}
                 <CiTrash
                    size={23}
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDeleteCompleteTask(index)}
                  />
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplication;
