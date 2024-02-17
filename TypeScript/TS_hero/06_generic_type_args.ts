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

type GroceryStore<Name, City> = {
  name: Name;
  city: City;
};

type GroceryItem<Name, Price, InStock> = {
  name: Name;
  price: Price;
  inStock: InStock;
};

type CapreseSalad = GroceryItem<"Caprese Salad", 14.99, true>;

{
  // Generic Type Constraints
  type RowConstraints = string | number | (() => string | number);
  type Row<T extends RowConstraints> = {
    value: T;
    label: string;
    orientation: "vertical" | "horizontal";
  };

  type AllowString<T extends string> = T;
  type AllowNumber<T extends number> = T;

  type CreateLogger<T extends (value: number) => void> = {
    log: T;
    exit: () => void;
  };
}
