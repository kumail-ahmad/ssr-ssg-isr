import Image from "next/image";

export default async function Home() {
  console.log("Rendered & compiled succesfully ");
  let data = await fetch("https://jsonplaceholder.typicode.com/photos");
  let posts = await data.json();
  return (
    <ul>
      {posts.map((post) => {
        <li key={post.that}>{post.title} </li>;
      })}
    </ul>
  );
}
