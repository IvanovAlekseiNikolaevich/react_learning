interface CardProps {
  cartItems: string[];
  onClear: () => void;
}

const Card = ({ cartItems, onClear }: CardProps) => {
  return (
    <div>
      <ul>
        {cartItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button onClick={onClear}>Clear me</button>
    </div>
  );
};

export default Card;
