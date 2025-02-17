import { useState } from 'react';
import { useDevelopers } from '../lib/hooks';

const DeveloperList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { developers, getDeveloperAwards } = useDevelopers(searchQuery);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Techbros</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-purple-800 text-white px-4 py-2 rounded-lg pl-10"
          />
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-purple-300">
            search
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {developers.map((dev) => (
          <div key={dev.id} className="bg-purple-800 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-yellow-400">
                <img
                  src={dev.avatar_url}
                  alt={dev.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-purple-700 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">
                  {new Date(dev.created_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-1">{dev.name}</h3>
            <p className="text-purple-300 mb-4">{dev.title}</p>

            <div className="flex items-center text-sm text-purple-300 mb-4">
              <span className="material-icons text-sm mr-1">location_on</span>
              {dev.location}
            </div>

            <div className="flex flex-wrap gap-2">
              {getDeveloperAwards(dev.id).map((award) => (
                <div
                  key={award.id}
                  className="bg-purple-700 px-2 py-1 rounded-full flex items-center gap-1"
                  title={award.description}
                >
                  <span>{award.icon}</span>
                  <span className="text-sm">{award.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperList;