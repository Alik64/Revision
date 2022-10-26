type Greet2Props = {
  name?: string;
};
const Greet2 = ({ name }: Greet2Props) => {
  return <div>Hello {name}</div>;
};

export default Greet2;
