import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function AppLayout({ children }) {
  const { logoutUser } = useContext(AuthContext);

  return (
    <div className=" h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="flex w-full h-[5rem] bg-white shadow-md p-4 justify-between">
        <h2 className="text-xl font-bold mb-6">NoteSphere 🌌</h2>

        <button
          onClick={logoutUser}
          className=" h-[2rem] bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>

      {/* Main */}
<main className="flex-1 w-full p-6 overflow-y-auto">        {children}
      </main>

    </div>
  );
}

export default AppLayout;