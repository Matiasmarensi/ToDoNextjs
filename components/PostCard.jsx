"use client";
import React from "react";

export default function postCard({ post }) {
  return (
    <div>
      <div>
        <h3>
          {post.id}.{post.title}
        </h3>
        <p>{post.body}</p>
        <button onClick={() => {}}></button>
      </div>
    </div>
  );
}
