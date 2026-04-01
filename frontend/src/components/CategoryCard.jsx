import "./CategoryCard.css";

function CategoryCard({ category, onClick }) {
  const icons = {
    Books: "📚",
    Fitness: "💪",
    Memories: "🧠",
    Movies: "🎬",
    "Personal Journal": "📝",
    Recipes: "🍳",
    Series: "📺",
    Travel: "✈️",
  };
  const colors = {
    Books: "bg-blue-100",
    Fitness: "bg-green-100",
    Memories: "bg-yellow-100",
    Movies: "bg-purple-100",
    "Personal Journal": "bg-pink-100",
    Recipes: "bg-orange-100",
    Series: "bg-indigo-100",
    Travel: "bg-cyan-100",
  };
  const bcolors = {
    Books: "border-blue-200",
    Fitness: "border-green-200",
    Memories: "border-yellow-200",
    Movies: "border-purple-200",
    "Personal Journal": "border-pink-200",
    Recipes: "border-orange-200",
    Series: "border-indigo-200",
    Travel: "border-cyan-200",
  };
  const textcolors = {
    Books: "text-blue-900",
    Fitness: "text-green-900",
    Memories: "text-yellow-900",
    Movies: "text-purple-900",
    "Personal Journal": "text-pink-900",
    Recipes: "text-orange-900",
    Series: "text-indigo-900",
    Travel: "text-cyan-900",
  };
  return (
    <div
      className={`border ${bcolors[category.name]}  ${colors[category.name]} rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition m-2 h-24 text-center pt-8 `}
      onClick={() => onClick(category.id)}
    >
      <h3 className={`text-lg font-semibold ${textcolors[category.name]}`}>
        {icons[category.name]} {category.name}
      </h3>
    </div>
  );
}

export default CategoryCard;
