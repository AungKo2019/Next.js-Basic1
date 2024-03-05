import Image from "next/image";
import Link from "next/link";

// https://www.youtube.com/watch?v=SKe32JksZ7o

export default function Home() {
  return (
    <div>
      <h1>Hello Next.js - 14</h1>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
      </ul>
    </div>
  );
}
