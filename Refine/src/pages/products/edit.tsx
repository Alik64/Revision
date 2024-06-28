import { useOne, useUpdate } from "@refinedev/core";

export const EditProduct = () => {
  const { data, isLoading } = useOne({ resource: "products", id: 123 });
  const { mutate, isLoading: isUpdating } = useUpdate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const updatePrice = async () => {
    await mutate({
      resource: "products",
      id: 123,
      values: {
        price: Math.floor(Math.random() * 100),
      },
    });
  };

  return (
    <div>
      <div>Product name: {data?.data.name}</div>
      <div>Product price: ${data?.data.price}</div>
      <button onClick={updatePrice}>Update Price</button>
    </div>
  );
};
