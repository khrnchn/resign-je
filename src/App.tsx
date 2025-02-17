import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DeveloperList from './components/DeveloperList';
import AwardsConfig from './components/AwardsConfig';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-purple-900">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<DeveloperList />} />
            <Route path="/awards" element={<AwardsConfig />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;