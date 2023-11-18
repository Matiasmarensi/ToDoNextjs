import React from "react";
import PostCard from "../../components/PostCard";
async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function PostPages() {
  const post = await loadPost();

  return (
    <div>
      {post.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
