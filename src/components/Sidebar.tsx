import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-24 bg-purple-950 py-8 flex flex-col items-center">
      <div className="mb-12">
        <span className="text-lg font-bold text-white whitespace-normal text-center">ResignJe</span>
      </div>

      <nav className="flex flex-col items-center space-y-8">
        <Link
          to="/"
          className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${isActive('/') ? 'bg-yellow-400 text-purple-900' : 'text-purple-300 hover:text-white'
            }`}
        >
          <span className="material-icons">group</span>
        </Link>

        <Link
          to="/awards"
          className={`w-12 h-12 flex items-center justify-center rounded-lg transition-colors ${isActive('/awards') ? 'bg-yellow-400 text-purple-900' : 'text-purple-300 hover:text-white'
            }`}
        >
          <span className="material-icons">emoji_events</span>
        </Link>
      </nav>

      <div className="mt-auto">
        <Link
          to="/settings"
          className="w-12 h-12 flex items-center justify-center text-purple-300 hover:text-white"
        >
          <span className="material-icons">settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;