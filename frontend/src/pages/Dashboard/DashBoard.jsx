import { useEffect, useState } from "react";
import { getCategories } from "../../services/categories.service";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/CategoryCard";
import AppLayout from "../../components/layout/AppLayout";

function Dashboard() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (id) => {
    navigate(`/notes?categoryId=${id}`);
  };
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} onClick={handleClick} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
