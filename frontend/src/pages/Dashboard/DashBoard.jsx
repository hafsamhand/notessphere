import { useEffect, useState } from 'react';
import { getCategories } from '../../services/categories.service';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard';
import AppLayout from '../../components/layout/AppLayout';

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
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div>
            <CategoryCard key={cat.id} category={cat} onClick={handleClick} />
            {/* <div
              key={cat.id}
              onClick={() => navigate(`/notes?categoryId=${cat.id}`)}
              className="bg-blue-100 rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold">{cat.name}</h3>
            </div> */}
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

export default Dashboard;