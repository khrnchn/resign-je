import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Award, Developer } from '../types';
import { Award as AwardIcon } from 'lucide-react';

export default function AwardsConfig() {
  const [awards, setAwards] = useState<Award[]>([]);
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [selectedDev, setSelectedDev] = useState('');
  const [selectedAward, setSelectedAward] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const [awardsData, devsData] = await Promise.all([
        supabase.from('awards').select('*'),
        supabase.from('developers').select('*')
      ]);

      if (awardsData.data) setAwards(awardsData.data);
      if (devsData.data) setDevelopers(devsData.data);
    };

    fetchData();
  }, []);

  const handleAwardAssign = async () => {
    if (!selectedDev || !selectedAward) return;

    await supabase
      .from('developer_awards')
      .insert([
        {
          developer_id: selectedDev,
          award_id: selectedAward,
          awarded_at: new Date().toISOString()
        }
      ]);

    setSelectedDev('');
    setSelectedAward('');
  };

  return (
    <div className="max-w-2xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-6">Configure Awards</h2>

      <div className="bg-purple-800 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Assign Award</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Select Developer</label>
            <select
              value={selectedDev}
              onChange={(e) => setSelectedDev(e.target.value)}
              className="w-full p-2 rounded bg-purple-700"
            >
              <option value="">Choose a developer...</option>
              {developers.map((dev) => (
                <option key={dev.id} value={dev.id}>{dev.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">Select Award</label>
            <select
              value={selectedAward}
              onChange={(e) => setSelectedAward(e.target.value)}
              className="w-full p-2 rounded bg-purple-700"
            >
              <option value="">Choose an award...</option>
              {awards.map((award) => (
                <option key={award.id} value={award.id}>{award.name}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAwardAssign}
            className="w-full py-2 bg-yellow-400 text-purple-900 rounded font-semibold hover:bg-yellow-300"
          >
            Assign Award
          </button>
        </div>
      </div>

      <div className="bg-purple-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Available Awards</h3>
        <div className="grid grid-cols-2 gap-4">
          {awards.map((award) => (
            <div key={award.id} className="bg-purple-700 p-4 rounded">
              <div className="flex items-center space-x-2">
                <AwardIcon className="w-6 h-6" />
                <h4 className="font-semibold">{award.name}</h4>
              </div>
              <p className="text-purple-300 text-sm mt-2">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}