import Link from "next/link";

function Blog() {
  return (
    <>
      <h1>Blog Page</h1>
      <Link href="/">Home</Link>
      <hr />
      <Link href="/blog/first">First</Link>
    </>
  );
}

export default Blog;
