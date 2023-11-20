"use client";
import React from "react";
import { useEffect } from "react";
import TaskCards from "@/components/TaskCards";
async function loadTask() {
  const res = await fetch("http://localhost:3000/api/task/");
  const data = await res.json();
  return data;
}

async function Home() {
  const tasks = await loadTask();

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
