import './GreetingContainer.css';

export default function GreetingContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
    </div>
  );
}
