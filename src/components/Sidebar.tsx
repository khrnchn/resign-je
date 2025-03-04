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
          className="text-lg font-bold text-white hover:text-purple-300 transition-colors"
        >
          Techbros
        </Link>
      </div>

      <nav className="flex flex-col space-y-1 md:space-y-8 md:items-center px-4 md:px-0 mt-20 md:mt-4">
        <Link
          to="/"
          onClick={handleLinkClick}
          className={`
            flex items-center px-4 md:px-0 py-3 md:py-0 rounded-lg transition-colors
            md:w-12 md:h-12 md:justify-center
            ${
              isActive("/")
                ? "bg-yellow-400 text-purple-900"
                : "text-purple-300 hover:text-white hover:bg-purple-800/50 md:hover:bg-transparent"
            }
          `}
        >
          <span className="material-icons mr-3 md:mr-0">group</span>
          <span className="md:hidden">Developers</span>
        </Link>

        <Link
          to="/awards"
          onClick={handleLinkClick}
          className={`
    flex items-center px-4 md:px-0 py-3 md:py-0 rounded-lg transition-colors
    md:w-12 md:h-12 md:justify-center
    ${
      isActive("/awards")
        ? "bg-yellow-400 text-purple-900"
        : "text-purple-300 hover:text-white hover:bg-purple-800/50 md:hover:bg-transparent"
    }
  `}
        >
          <span className="material-icons mr-3 md:mr-0">emoji_events</span>
          <span className="md:hidden">Awards</span>
        </Link>

        <Link
          to="/should-i-resign"
          onClick={handleLinkClick}
          className={`
    flex items-center px-4 md:px-0 py-3 md:py-0 rounded-lg transition-colors
    md:w-12 md:h-12 md:justify-center
    ${
      isActive("/should-i-resign")
        ? "bg-yellow-400 text-purple-900"
        : "text-purple-300 hover:text-white hover:bg-purple-800/50 md:hover:bg-transparent"
    }
  `}
        >
          <span className="material-icons mr-3 md:mr-0">rebase_edit</span>
          <span className="md:hidden">Awards</span>
        </Link>
      </nav>

      <div className="mt-auto flex justify-start md:justify-center px-4 md:px-0">
        <Link
          to="/settings"
          onClick={handleLinkClick}
          className="
            flex items-center px-4 md:px-0 py-3 md:py-0 rounded-lg transition-colors
            md:w-12 md:h-12 md:justify-center
            text-purple-300 hover:text-white hover:bg-purple-800/50 md:hover:bg-transparent
          "
        >
          <span className="material-icons mr-3 md:mr-0">settings</span>
          <span className="md:hidden">Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
