import { NextResponse } from "next/server";

export function GET(req, res) {
  return NextResponse.json("obteniendo tarea" + req.params.id);
}
export function PUT(req, res) {
  return NextResponse.json("modificando tarea" + req.params.id);
}
export function DELETE(req, res) {
  return NextResponse.json("elimanndo tarea" + req.params.id);
}
