import { useState } from 'react';
import { useDevelopers } from '../lib/hooks';
import Leaderboard from './Leaderboard';

const DeveloperList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const { developers, getDeveloperAwards } = useDevelopers(searchQuery);

  return (
    <div>
      {/* search bar - only visible on desktop */}
      <div className="hidden md:flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold hover:text-purple-300 transition-colors mb-2">
            👑 Hall of Fame
          </h1>
          <p className="text-purple-300">Malaysian Developers Yang Dah Resign</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-purple-800/50 pl-10 pr-4 py-2 rounded-full text-sm placeholder-purple-300 w-[200px] focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-purple-300">
            search
          </span>
        </div>
      </div>

      {/* mobile search bar */}
      <div className="md:hidden mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-purple-800/50 pl-10 pr-4 py-2 rounded-full text-sm placeholder-purple-300 w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-purple-300">
            search
          </span>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="flex-1 w-full">
          {developers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {developers.map((dev) => (
                <div
                  key={dev.id}
                  className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-yellow-400">
                      <img
                        src={dev.avatar_url}
                        alt={dev.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-purple-700/50 backdrop-blur-sm px-4 py-1 rounded-full">
                      <span className="text-sm font-medium">
                        {new Date(dev.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{dev.name}</h3>
                  <p className="text-purple-300 mb-2">{dev.title}</p>
                  <p className="text-green-400 text-sm font-semibold mb-4">
                    🎉 Resigned {Math.floor(Math.random() * 365 + 1)} days ago
                  </p>

                  <div className="flex items-center text-sm text-purple-300 mb-4">
                    <span className="material-icons text-sm mr-1">location_on</span>
                    {dev.location}
                  </div>

                  <div className="flex items-center text-sm text-yellow-400 mb-4">
                    <span className="material-icons text-sm mr-1">trending_up</span>
                    {dev.resignation_count} resignations
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {getDeveloperAwards(dev.id).map((award) => (
                      <div
                        key={award.id}
                        className="bg-purple-700/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5"
                        title={award.description}
                      >
                        <span>{award.icon}</span>
                        <span className="text-sm font-medium">{award.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              <div className="bg-purple-800/50 backdrop-blur-sm rounded-full p-4 mb-4">
                <span className="material-icons text-4xl text-purple-300">search_off</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">No developers found lah</h3>
              <p className="text-purple-300 max-w-md">
                Cannot find any developers matching "{searchQuery}". Try different search term or be the first to join our Hall of Fame!
              </p>
            </div>
          )}
        </div>

        {/* Leaderboard - collapsible on mobile, always visible on desktop */}
        <div className="w-full md:w-fit">
          {/* Mobile toggle button */}
          <div 
            className="md:hidden flex justify-between items-center bg-purple-800/50 backdrop-blur-sm rounded-2xl p-4 mb-2 cursor-pointer"
            onClick={() => setIsLeaderboardOpen(!isLeaderboardOpen)}
          >
            <h2 className="text-xl font-bold">🏆 Top Resigners</h2>
            <div className="bg-purple-700 p-1.5 rounded-lg flex items-center justify-center h-8 w-8">
              <span className="material-icons text-xl">
                {isLeaderboardOpen ? "expand_less" : "expand_more"}
              </span>
            </div>
          </div>
          
          {/* Leaderboard content - always visible on desktop, toggleable on mobile */}
          <div className={`${isLeaderboardOpen ? 'block' : 'hidden'} md:block`}>
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperList;