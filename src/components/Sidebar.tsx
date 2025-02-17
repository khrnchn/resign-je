import { Link } from 'react-router-dom';
import { Home, Trophy } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-purple-950 p-6 text-white">
      <h1 className="text-2xl font-bold mb-8">Resigned Devs</h1>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-purple-800 rounded">
          <Home className="w-5 h-5" />
          <span>Developers</span>
        </Link>
        <Link to="/awards" className="flex items-center space-x-2 p-2 hover:bg-purple-800 rounded">
          <Trophy className="w-5 h-5" />
          <span>Awards</span>
        </Link>
      </nav>
    </div>
  );
}