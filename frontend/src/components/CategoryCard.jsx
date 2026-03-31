import './CategoryCard.css';

function CategoryCard({ category, onClick }) {
  return (
    <div className="card" onClick={() => onClick(category.id)}>
      <h3>{category.name}</h3>
    </div>
  );
}

export default CategoryCard;