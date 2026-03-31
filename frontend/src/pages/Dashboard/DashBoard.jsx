import { useEffect, useState } from 'react';
import { getCategories } from '../../services/categories.service';

function Dashboard() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Categories</h3>

      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;