{
  //examples

  interface Row<T> {
    label: string;
    value: T;
    disabled: boolean;
  }

  type NumberRow = Row<number>;
  
  type StringRow = Row<string>; //equal to 
  {
    type StringRow = {
      label: string;
      value: string;
      disabled: boolean;
    };
  }
}

type GroceryStore<Name,City> = {
	name:Name;
	city:City;
};

type GroceryItem<Name, Price, InStock> = {
  name: Name;
  price: Price;
  inStock: InStock;
};

type CapreseSalad = GroceryItem<'Caprese Salad',14.99,true>;

