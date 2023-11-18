import React from "react";
import PostPages from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data;
}
export default async function Post({ params }) {
  const post = await loadPost(params.id);

  return (
    <div>
      <h1>Post {post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <p>otras publicaciones</p>
      <Suspense>
        <PostPages fallback={<p>Cargando...</p>} />
      </Suspense>
    </div>
  );
}
