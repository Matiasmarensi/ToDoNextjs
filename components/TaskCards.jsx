"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function TaskCards({ task }) {
  const router = useRouter();
  return (
    <div
      className=""
      onClick={() => {
        router.push(`/task/edit/${task.id}`);
      }}
    >
      <div key={task.id} className="bg-slate-600 p-3 border-2 hover: cursor-pointer hover:bg-gray-900">
        <h3>Titulo: {task.title}</h3>
        <p>Descripción: {task.description}</p>
        <p>{new Date(task.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
