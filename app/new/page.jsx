"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewPage({ params }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/task/${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          setDescription(data.description);
          setTitle(data.title);
        });
    }
  }, []);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      const response = await fetch(`/api/task/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const update = await response.json();
    } else {
      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
    }
    router.push("/");
    router.refresh();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-700 p-10  md:w-1/2 lg:w-1/2  " onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold ">
          Titulo de la tarea
        </label>
        <input
          value={title}
          placeholder="Titulo"
          className="text-black border border-gray-200 p-2 mb-4 w-full"
          type="text"
          name=""
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description" className="font-bold ">
          Describe tu tarea
        </label>
        <textarea
          placeholder="Descripción"
          className="border border-gray-200 p-2 mb-4 w-full h-auto text-black"
          name=""
          id="description"
          value={description}
          cols="30"
          rows="10"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ">Crear</button>
      </form>
    </div>
  );
}
