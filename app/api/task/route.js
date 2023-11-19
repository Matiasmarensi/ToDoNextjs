import { NextResponse } from "next/server";
import { prisma } from "../../libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();

  return NextResponse.json(tasks);
}

export async function POST(request) {
  const data = await request.json();

  const newTask = await prisma.task.create({
    data: { title: data.title, description: data.description },
  });
  return Response.json(newTask);
}

export function PUT() {
  return NextResponse.json({
    message: "modificando tareas",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "borrando tarea",
  });
}
