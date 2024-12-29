import React from "react";

export default async function Home() {
  console.log("Rendered & compiled successfully");

  let data = await fetch("https://jsonplaceholder.typicode.com/photos");
  let posts = await data.json();

  return (
    <ul>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>
            {post.title}---------{post.url}{" "}
          </li>
        </ul>
      ))}
    </ul>
  );
}
