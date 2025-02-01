import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { CiSquarePlus, CiSquareCheck, CiTrash } from "react-icons/ci";
import { GoPencil } from "react-icons/go";

const Aplication = () => {
  const [task, setTask] = useState(""); 
  const [createdTask, setCreatedTask] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  // Função para salvar as tarefas no localStorage
  const saveToLocalStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("createdTasks", JSON.stringify(createdTask));
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    }
  };

  // Carregar tarefas do localStorage ao iniciar
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedCreatedTasks = JSON.parse(localStorage.getItem("createdTasks") || "[]");
        const storedCompletedTasks = JSON.parse(localStorage.getItem("completedTasks") || "[]");

        setCreatedTask(storedCreatedTasks);
        setCompletedTasks(storedCompletedTasks);
      } catch (error) {
        console.error("Erro ao carregar tarefas do localStorage:", error);
      }
    }
  }, []);

  // Atualizar o localStorage sempre que as tarefas forem alteradas
  useEffect(() => {
    saveToLocalStorage();
  }, [createdTask, completedTasks]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setCreatedTask((prevTasks) => [...prevTasks, task]);
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
        return updatedTasks;
      });
    }
    setEditingIndex(null);
  };

  const handleDeleteTask = (index: number) => {
    setCreatedTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const handleCompleteTask = (index: number) => {
    setCreatedTask((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);
      setCompletedTasks((prevCompleted) => [...prevCompleted, prevTasks[index]]);
      return updatedTasks;
    });
  };

  const handleDeleteCompleteTask = (index: number) => {
    setCompletedTasks((prevCompleted) => prevCompleted.filter((_, i) => i !== index));
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
