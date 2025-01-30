import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { CiSquarePlus, CiSquareCheck, CiTrash } from "react-icons/ci";
import { GoPencil } from "react-icons/go";

const Aplication = () => {
  const [task, setTask] = useState(""); // Armazena o valor da tarefa nova.
  const [createdTask, setCreatedTask] = useState<string[]>([]); // Lista de tarefas criadas.
  const [completedTasks, setCompletedTasks] = useState<string[]>([]); // Lista de tarefas concluídas.
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Índice da tarefa sendo editada.
  const [editText, setEditText] = useState(""); // Texto da edição atual.

  // Função para salvar as tarefas no localStorage
  const saveToLocalStorage = (tasks: string[], completed: string[]) => {
    localStorage.setItem("createdTasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completed));
  };

  // Carregar tarefas do localStorage ao iniciar
  useEffect(() => {
    try {
      const storedCreatedTasks = localStorage.getItem("createdTasks");
      const storedCompletedTasks = localStorage.getItem("completedTasks");

      if (storedCreatedTasks) {
        setCreatedTask(JSON.parse(storedCreatedTasks));
      }
      if (storedCompletedTasks) {
        setCompletedTasks(JSON.parse(storedCompletedTasks));
      }
    } catch (error) {
      console.error("Erro ao carregar tarefas do localStorage:", error);
    }
  }, []);

  // Atualizar o localStorage sempre que as tarefas forem alteradas
  useEffect(() => {
    saveToLocalStorage(createdTask, completedTasks);
  }, [createdTask, completedTasks]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setCreatedTask((prevTasks) => {
        const updatedTasks = [...prevTasks, task];
        saveToLocalStorage(updatedTasks, completedTasks);
        return updatedTasks;
      });
      setTask("");
    }
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditText(createdTask[index]);
  };

  const handleEditTask = (index: number) => {
    if (editText.trim() !== "") {
      setCreatedTask((prevTasks) => {
        const updatedTasks = [...prevTasks];
        updatedTasks[index] = editText;
        saveToLocalStorage(updatedTasks, completedTasks);
        return updatedTasks;
      });
    }
    setEditingIndex(null);
  };

  const handleDeleteTask = (index: number) => {
    setCreatedTask((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);
      saveToLocalStorage(updatedTasks, completedTasks);
      return updatedTasks;
    });
  };

  const handleCompleteTask = (index: number) => {
    const taskToComplete = createdTask[index]; // Pega a tarefa a ser concluída
    const updatedCreatedTasks = createdTask.filter((_, i) => i !== index); // Remove da lista de tarefas criadas
    const updatedCompletedTasks = [...completedTasks, taskToComplete]; // Adiciona a tarefa na lista de concluídas
  
    // Atualiza ambos os estados e salva no localStorage
    setCreatedTask(updatedCreatedTasks);
    setCompletedTasks(updatedCompletedTasks);
    saveToLocalStorage(updatedCreatedTasks, updatedCompletedTasks);
  };
  

  const handleDeleteCompleteTask = (index: number) => {
    setCompletedTasks((prevCompleted) => {
      const updatedCompletedTasks = prevCompleted.filter((_, i) => i !== index);
      saveToLocalStorage(createdTask, updatedCompletedTasks);
      return updatedCompletedTasks;
    });
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
                    onBlur={() => handleEditTask(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleEditTask(index);
                    }}
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
