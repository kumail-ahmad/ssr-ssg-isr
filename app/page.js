"use client";
import React from "react";
export default function Home() {
  // its an async function but for the time being i have removed async
  console.log("Rendered & compiled successfully");

  // let data = await fetch("https://jsonplaceholder.typicode.com/photos", {
  //   next: 3600,
  // });
  // let posts = await data.json();

  return (
    <div>
      <div className="secret violet"> 
        Hey there! I am the secret code and my value is{" "}
        {process.env.NEXT_PUBLIC_EMAIL} of index {process.env.NEXT_PUBLIC_ID}
        <style jsx>
          {`
            .secret {
              background: red;
              color: green;
            }
          `}
        </style>
      </div>
      <br />

      {/* <ul>
        {posts.map((post) => (
          <ul key={post.id}>
            <li>
              {post.title}---------{post.url}
            </li>
          </ul>
        ))}
      </ul> */}
    </div>
  );
}

// export const dynamic = "force-dynamic";
