import React from "react";
import "./post.css";
import PostCard from "../../components/PostCard";
async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function PostPages() {
  const post = await loadPost();
  console.log(post);
  return (
    <div className="grid">
      {post.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
