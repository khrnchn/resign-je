import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DeveloperList from './components/DeveloperList';
import AwardsConfig from './components/AwardsConfig';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="flex min-h-screen bg-purple-900 text-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex gap-6">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<DeveloperList />} />
              <Route path="/awards" element={<AwardsConfig />} />
            </Routes>
          </div>
          <div className="w-80">
            <Leaderboard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;