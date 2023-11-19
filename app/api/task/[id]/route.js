import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET(req, { params }) {
  console.log(params.id);
  const task = await prisma.task.findUnique({ where: { id: Number(params.id) } });
  console.log(task);
  return NextResponse.json(task);
}
export function PUT(req, res) {
  return NextResponse.json("modificando tarea" + req.params.id);
}
export function DELETE(req, res) {
  return NextResponse.json("elimanndo tarea" + req.params.id);
}
