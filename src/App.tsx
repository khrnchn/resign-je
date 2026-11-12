import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DeveloperList from "./components/DeveloperList";
import AwardsConfig from "./components/AwardsConfig";
import LandingPage from "./components/LandingPage";
import Settings from "./components/Settings";
import ShouldIResignGame from "./components/ShouldIResign";
import { useMetadata } from "./lib/hooks";

const nav = [
  { to: "/hall-of-fame", label: "The Rack" },
  { to: "/should-i-resign", label: "Punch" },
  { to: "/awards", label: "Awards" },
  { to: "/settings", label: "Settings" },
];

function App() {
  const location = useLocation();
  const [now, setNow] = useState(new Date());

  useMetadata(location.pathname);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-card text-ink pb-16 md:pb-0">
      <header className="sticky top-0 z-40 bg-ink text-stock">
        <div className="mx-auto flex h-14 max-w-6xl items-stretch justify-between px-4">
          <Link
            to="/"
            className="flex items-center font-display text-2xl font-black uppercase tracking-wide text-card"
          >
            Resign Je
          </Link>

          <nav aria-label="Main" className="hidden md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-5 font-display text-lg font-bold uppercase tracking-wider transition-colors ${
                    isActive ? "bg-card text-ink" : "text-stock hover:text-card"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <time className="flex items-center font-dot text-lg font-black text-card">
            {now.toLocaleTimeString("en-GB", { timeZone: "Asia/Kuala_Lumpur", hour12: false })}
            <span className="ml-2 font-display text-sm font-bold tracking-widest text-stock">KL</span>
          </time>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hall-of-fame" element={<DeveloperList />} />
          <Route path="/awards" element={<AwardsConfig />} />
          <Route path="/should-i-resign" element={<ShouldIResignGame />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>

      <nav
        aria-label="Main"
        className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-4 bg-ink md:hidden"
      >
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center justify-center font-display text-base font-bold uppercase tracking-wider ${
                isActive ? "bg-card text-ink" : "text-stock"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default App;
