import { useState } from 'react';
import { mockAwards } from '../lib/mockData';
import { Award } from '../types';

const AwardsConfig = () => {
  const [awards, setAwards] = useState<Award[]>(mockAwards);
  const [isAddingAward, setIsAddingAward] = useState(false);
  const [newAward, setNewAward] = useState<Partial<Award>>({
    name: '',
    description: '',
    icon: ''
  });

  const handleAddAward = () => {
    if (newAward.name && newAward.description && newAward.icon) {
      setAwards(prev => [...prev, {
        ...newAward,
        id: String(prev.length + 1)
      } as Award]);
      setNewAward({ name: '', description: '', icon: '' });
      setIsAddingAward(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Awards Configuration</h1>
        <button
          onClick={() => setIsAddingAward(true)}
          className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors"
        >
          Add New Award
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {awards.map((award) => (
          <div key={award.id} className="bg-purple-800 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-2xl">
                  {award.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{award.name}</h3>
                  <p className="text-purple-300">{award.description}</p>
                </div>
              </div>
              <button className="text-purple-300 hover:text-white">
                <span className="material-icons">more_vert</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {isAddingAward && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-purple-800 rounded-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-6">Add New Award</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={newAward.name}
                  onChange={(e) => setNewAward(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-purple-700 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <input
                  type="text"
                  value={newAward.description}
                  onChange={(e) => setNewAward(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full bg-purple-700 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Icon (emoji)</label>
                <input
                  type="text"
                  value={newAward.icon}
                  onChange={(e) => setNewAward(prev => ({ ...prev, icon: e.target.value }))}
                  className="w-full bg-purple-700 rounded px-3 py-2"
                />
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setIsAddingAward(false)}
                  className="px-4 py-2 text-purple-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddAward}
                  className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300"
                >
                  Add Award
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardsConfig;