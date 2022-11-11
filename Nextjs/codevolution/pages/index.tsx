import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/products");
  };
  const handleClick2 = () => {
    console.log("Placing your order");
    router.replace("/products");
  };

  const flexbox = { display: "flex", justifyContent: "space-around" };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Home page </h1>
      <hr />
      <nav style={flexbox}>
        <Link href="/about">About</Link>
        <Link href="/blog" legacyBehavior>
          <a>Blog</a>
        </Link>
        <Link href="/products">Products</Link>
      </nav>
      <hr />
      <div style={flexbox}>
        <button onClick={handleClick}>Place Order - router.push()</button>
        <button onClick={handleClick2}>Place Order - router.replace()</button>
      </div>
    </div>
  );
}

export default Home;
