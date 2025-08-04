import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="w-full md:w-24 h-full bg-purple-950 py-4 md:py-8 flex flex-col">
      {/* logo - hidden on mobile since it's in the header */}
      <div className="hidden md:flex md:mb-12 justify-center">
        <Link
          to="/"
          onClick={handleLinkClick}
          className="text-lg font-bold text-white hover:text-purple-300 transition-colors transform hover:scale-110"
        >
          🇲🇾
        </Link>
      </div>

      {/* Mobile header with close button */}
      <div className="md:hidden flex items-center justify-between px-4 mb-8">
        <h2 className="text-xl font-bold text-white">Navigation</h2>
        <button
          onClick={handleLinkClick}
          className="p-2 rounded-lg bg-purple-800 hover:bg-purple-700 transition-colors"
          aria-label="Close navigation"
        >
          <span className="material-icons text-white">close</span>
        </button>
      </div>

      <nav className="flex flex-col space-y-1 md:space-y-8 md:items-center px-4 md:px-0 mt-4 md:mt-4">
        <Link
          to="/"
          onClick={handleLinkClick}
          className={`
            flex items-center px-4 md:px-0 py-4 md:py-0 rounded-xl md:rounded-lg transition-all duration-200
            md:w-12 md:h-12 md:justify-center transform hover:scale-105 md:hover:scale-110
            ${
              isActive("/")
                ? "bg-yellow-400 text-purple-900 shadow-lg"
                : "text-purple-300 hover:text-white hover:bg-purple-800/50 md:hover:bg-transparent"
            }
          `}
        >
          <span className="material-icons mr-3 md:mr-0">home</span>
          <span className="md:hidden font-medium">Home</span>
        </Link>

        <Link
          to="/hall-of-fame"
          onClick={handleLinkClick}
          className={`
            flex items-center px-4 md:px-0 py-4 md:py-0 rounded-xl md:rounded-lg transition-all duration-200
            md:w-12 md:h-12 md:justify-center transform hover:scale-105 md:hover:scale-110
            ${
              isActive("/hall-of-fame")
                ? "bg-yellow-400 text-purple-900 shadow-lg"
                : "text-purple-300 hover:text-white hover:bg-purple-800/50 md:hover:bg-transparent"
            }
          `}
        >
          <span className="material-icons mr-3 md:mr-0">military_tech</span>
          <span className="md:hidden font-medium">Hall of Fame</span>
        </Link>

        <Link
          to="/should-i-resign"
          onClick={handleLinkClick}
          className={`
            flex items-center px-4 md:px-0 py-4 md:py-0 rounded-xl md:rounded-lg transition-all duration-200
            md:w-12 md:h-12 md:justify-center transform hover:scale-105 md:hover:scale-110
            ${
              isActive("/should-i-resign")
                ? "bg-yellow-400 text-purple-900 shadow-lg"
                : "text-purple-300 hover:text-white hover:bg-purple-800/50 md:hover:bg-transparent"
            }
          `}
        >
          <span className="material-icons mr-3 md:mr-0">psychology</span>
          <span className="md:hidden font-medium">Should I Resign?</span>
        </Link>

        <Link
          to="/awards"
          onClick={handleLinkClick}
          className={`
            flex items-center px-4 md:px-0 py-4 md:py-0 rounded-xl md:rounded-lg transition-all duration-200
            md:w-12 md:h-12 md:justify-center transform hover:scale-105 md:hover:scale-110
            ${
              isActive("/awards")
                ? "bg-yellow-400 text-purple-900 shadow-lg"
                : "text-purple-300 hover:text-white hover:bg-purple-800/50 md:hover:bg-transparent"
            }
          `}
        >
          <span className="material-icons mr-3 md:mr-0">emoji_events</span>
          <span className="md:hidden font-medium">Awards</span>
        </Link>
      </nav>

      <div className="mt-auto flex justify-start md:justify-center px-4 md:px-0">
        <Link
          to="/settings"
          onClick={handleLinkClick}
          className="
            flex items-center px-4 md:px-0 py-4 md:py-0 rounded-xl md:rounded-lg transition-all duration-200
            md:w-12 md:h-12 md:justify-center transform hover:scale-105 md:hover:scale-110
            text-purple-300 hover:text-white hover:bg-purple-800/50 md:hover:bg-transparent
          "
        >
          <span className="material-icons mr-3 md:mr-0">settings</span>
          <span className="md:hidden font-medium">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
