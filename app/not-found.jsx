import React from "react";
import Link from "next/link";

export default function Notfound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center mt-calc() ">
      <div className="text-center">
        <h1 className="text-9xl mb-4">404</h1>
        <p className="text-2xl mb-4">Page not found</p>
        <Link className="inline-block bg-blue-700 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-800" href="/">
          Go back home
        </Link>
      </div>
    </section>
  );
}
