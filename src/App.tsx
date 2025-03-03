import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DeveloperList from "./components/DeveloperList";
import AwardsConfig from "./components/AwardsConfig";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-purple-900 text-white">
      {/* app header - mobile only */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-purple-950 flex items-center z-50 px-4">
        {/* mobile menu button - only visible on small screens */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="z-50 md:hidden bg-transparent p-2 rounded-lg"
        >
          <span className="material-icons text-2xl">
            {isSidebarOpen ? "close" : "menu"}
          </span>
        </button>
        <div className="flex-1 flex items-center justify-between">
          <h1 className="text-xl font-bold">Techbros</h1>
          <div className="">
            <div className="relative flex flex-col md:flex-row">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-purple-300">
                search
              </span>
              <input
                type="text"
                placeholder="Search"
                className="bg-purple-800/50 pl-10 pr-4 py-2 rounded-full text-sm placeholder-purple-300 w-[200px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* sidebar with mobile overlay */}
        <div
          className={`
          fixed md:relative w-screen h-screen md:w-auto md:h-auto
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:transform-none z-40
        `}
        >
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>

        {/* main content */}
        <main className="flex-1 px-4 md:p-8 pt-20 md:pt-8 h-screen overflow-y-scroll">
          <div className="flex flex-col gap-6">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<DeveloperList />} />
                <Route path="/awards" element={<AwardsConfig />} />
              </Routes>
            </div>
            <div className="w-full">
              <Leaderboard />
            </div>
          </div>
        </main>
      </div>

      {/* overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
