const Product = (props) => {
  const { name, votes, onVote } = props;
  const plus = () => {
    onVote && onVote(name, 1);
  };
  const minus = () => {
    onVote && onVote(name, -1);
  };
  return (
    <li>
      <span>{name}</span> - <span>votes: {votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (name, vote) => {
    const updatedProducts = products.map((product) => {
      if (product.name === name) {
        product.votes += vote;
      }

      return product;
    });

    setProducts(updatedProducts);
  };
  React.useEffect(() => {
    products.sort((a, b) => {
      return a.votes < b.votes ? 1 : -1;
    });
  }, [products]);
  return (
    <ul>
      {products?.map((product) => (
        <Product
          onVote={onVote}
          name={product.name}
          votes={product.votes}
          key={product.name}
        />
      ))}
    </ul>
  );
};

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(
  <GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 },
    ]}
  />,
  document.getElementById("root")
);

let plusButton = document.querySelector("ul > li > button");
if (plusButton) {
  plusButton.click();
}
console.log(document.getElementById("root").outerHTML);
