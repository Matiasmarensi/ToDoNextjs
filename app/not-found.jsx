import React from "react";
import Link from "next/link";

export default function Notfound() {
  return (
    <section>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">Go back home</Link>
    </section>
  );
}
