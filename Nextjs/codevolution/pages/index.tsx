import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home page </h1>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link href="/about">About</Link>
        <Link href="/blog" legacyBehavior>
          <a>Blog</a>
        </Link>
        <Link href="/products">Products</Link>
      </nav>
    </div>
  );
}

export default Home;
