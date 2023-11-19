"use client";
import React from "react";

export default function NewPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const res = await fetch("/api/task", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-700 p-10 w-1/2" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold ">
          Titulo de la tarea
        </label>
        <input
          placeholder="Titulo"
          className="text-black border border-gray-200 p-2 mb-4 w-full"
          type="text"
          name=""
          id="title"
        />
        <label htmlFor="description" className="font-bold ">
          Describe tu tarea
        </label>
        <textarea
          placeholder="Descripción"
          className="border border-gray-200 p-2 mb-4 w-full h-auto text-black"
          name=""
          id="description"
          cols="30"
          rows="10"
        ></textarea>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ">Crear</button>
      </form>
    </div>
  );
}
