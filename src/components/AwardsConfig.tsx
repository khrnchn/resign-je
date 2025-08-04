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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-purple-800 rounded-2xl p-6 w-96 max-w-md mx-4 transform animate-slideInUp shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="material-icons mr-2">add_circle</span>
              Add New Award
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-200">Award Name</label>
                <input
                  type="text"
                  value={newAward.name}
                  onChange={(e) => setNewAward(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-purple-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                  placeholder="e.g., Quick Quitter"
                  maxLength={50}
                />
                <div className="text-xs text-purple-400 mt-1">{newAward.name?.length || 0}/50</div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-200">Description</label>
                <textarea
                  value={newAward.description}
                  onChange={(e) => setNewAward(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full bg-purple-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
                  placeholder="e.g., Resigned within the first week"
                  rows={3}
                  maxLength={100}
                />
                <div className="text-xs text-purple-400 mt-1">{newAward.description?.length || 0}/100</div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-purple-200">Icon (emoji)</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newAward.icon}
                    onChange={(e) => setNewAward(prev => ({ ...prev, icon: e.target.value }))}
                    className="flex-1 bg-purple-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                    placeholder="🏃"
                    maxLength={4}
                  />
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-2xl">
                    {newAward.icon || '?'}
                  </div>
                </div>
              </div>
              
              {newAward.name && newAward.description && newAward.icon && (
                <div className="bg-purple-700/30 rounded-lg p-4 border border-purple-600">
                  <h4 className="text-sm font-medium text-purple-200 mb-2">Preview:</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-lg">
                      {newAward.icon}
                    </div>
                    <div>
                      <div className="font-medium">{newAward.name}</div>
                      <div className="text-sm text-purple-300">{newAward.description}</div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => setIsAddingAward(false)}
                  className="px-6 py-2 text-purple-300 hover:text-white transition-colors rounded-lg hover:bg-purple-700/50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddAward}
                  disabled={!newAward.name || !newAward.description || !newAward.icon}
                  className="bg-yellow-400 text-purple-900 px-6 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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