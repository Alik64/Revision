type GroceryList = {
  [produit: string]: number;
};

type InappropriateActionBySituation = {
  [situation: string]: string[];
};

type CharactersById = {
  [num: number]: {
    [personID: string]: string | number;
  };
};
