import Link from "next/link";

function ProductList() {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];
  return (
    <>
      {products.map((p) => (
        <Link href={`/products/${p.id}`} key={p.id}>
          <h1>{p.name}</h1>
        </Link>
      ))}

      <hr />
      <Link href="/">back to Home page</Link>
    </>
  );
}

export default ProductList;
