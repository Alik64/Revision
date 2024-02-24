// We completed the first alias (`Name`) for you to see as an example
type Name = string;

// Now try replacing `unknown` with a primitive data type that might be appropriate for `Year`
type Year = number;
type Count = number;
type IsOperational = boolean;
type Kilograms = number;
type Payload = {
  name: Name;
  mass: Kilograms;
  // the tests show that you need a `mass` property here
  // but first you might need to create an alias for `Kilograms`
  // because that's the value of `mass`
};
