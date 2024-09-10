import "../components/CardCategories.css";

export default function CardCategories({ title }) {
  return (
    <div className="card-categories">
      <a className="a-card_categories">
        <h2 className="h2-card_categories">{title}</h2>
      </a>
    </div>
  );
}
