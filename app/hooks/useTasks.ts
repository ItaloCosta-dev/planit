import { useState, useEffect } from "react";

export const useTasks = () => {
  const [task, setTask] = useState("");
  const [createdTasks, setCreatedTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  // Carregar tarefas do localStorage
  useEffect(() => {
    try {
      const storedCreatedTasks = JSON.parse(
        localStorage.getItem("createdTasks") || "[]"
      );
      const storedCompletedTasks = JSON.parse(
        localStorage.getItem("completedTasks") || "[]"
      );

      if (storedCreatedTasks.length) setCreatedTasks(storedCreatedTasks);
      if (storedCompletedTasks.length) setCompletedTasks(storedCompletedTasks);
    } catch (error) {
      console.error("Erro ao carregar tarefas do localStorage:", error);
    }
  }, []);

  // Atualizar localStorage sempre que as tarefas forem alteradas
  useEffect(() => {
    localStorage.setItem("createdTasks", JSON.stringify(createdTasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [createdTasks, completedTasks]);

  const handleAddTask = () => {
    if (!task.trim()) return;
    setCreatedTasks((prev) => [...prev, task]);
    setTask("");
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditText(createdTasks[index]);
  };

  const handleEditTask = (index: number) => {
    if (!editText.trim()) return;
    setCreatedTasks((prev) => {
      const updatedTasks = [...prev];
      updatedTasks[index] = editText;
      return updatedTasks;
    });
    setEditingIndex(null);
  };

  const handleDeleteTask = (index: number) => {
    setCreatedTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCompleteTask = (index: number) => {
    const taskToComplete = createdTasks[index];
    setCreatedTasks((prev) => prev.filter((_, i) => i !== index));
    setCompletedTasks((prev) => (prev.includes(taskToComplete) ? prev : [...prev, taskToComplete]));
  };

  const handleDeleteCompleteTask = (index: number) => {
    setCompletedTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    task,
    setTask,
    createdTasks,
    completedTasks,
    editingIndex,
    editText,
    setEditText,
    handleAddTask,
    handleEditClick,
    handleEditTask,
    handleDeleteTask,
    handleCompleteTask,
    handleDeleteCompleteTask,
  };
};
