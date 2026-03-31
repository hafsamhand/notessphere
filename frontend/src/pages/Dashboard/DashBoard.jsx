import { useEffect, useState } from 'react';
import { getCategories } from '../../services/categories.service';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard';

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
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {categories.map((cat) => (
          <CategoryCard key={cat.id} category={cat} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;