"use client";
import React, { useEffect, useState } from "react";
import TaskCards from "@/components/TaskCards";

async function loadTask() {
  const res = await fetch("/api/task");
  const data = await res.json();
  console.log(data);
  return data;
}

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Definimos una función dentro del useEffect para poder usar async/await.
    const fetchData = async () => {
      const data = await loadTask();
      setTasks(data);
    };

    // Llamamos a la función de carga solo cuando el componente se monta.
    fetchData();
  }, []); // El array vacío significa que el useEffect se ejecuta solo después del montaje inicial.

  return (
    <section className="flex justify-center my-10 py-4">
      <div className="grid grid-cols-3 gap-3 mt-10 mx-auto">
        {tasks.map((task) => (
          <TaskCards task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}

export default Home;
