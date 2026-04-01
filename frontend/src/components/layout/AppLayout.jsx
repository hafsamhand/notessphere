import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function AppLayout({ children }) {
  const { logoutUser } = useContext(AuthContext);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">NoteSphere 🌌</h2>

        <button
          onClick={logoutUser}
          className="mt-auto bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}

export default AppLayout;