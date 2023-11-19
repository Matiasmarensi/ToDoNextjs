import React from "react";
import Link from "next/link";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="navBar py-5">
      <Link href="/">
        <h1 className="text-3xl font-bold text-cyan-950">Lista de Tareas</h1>
      </Link>
      <ul className="font-bold text-cyan-950">
        <li>
          <Link href="/new">New</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
