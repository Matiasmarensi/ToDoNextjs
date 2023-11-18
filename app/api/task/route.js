import { NextResponse } from "next/server";
import { prisma } from "../../libs/prisma";

export async function GET() {
  const task = await prisma.task.findMany();
  console.log(task);
  return NextResponse.json({
    message: "obteniendo tareas",
  });
}

export function POST() {
  return NextResponse.json({
    message: "creando tareas",
  });
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
