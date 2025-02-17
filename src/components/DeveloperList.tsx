import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Developer } from '../types';
import Leaderboard from './Leaderboard';

export default function DeveloperList() {
  const [developers, setDevelopers] = useState<Developer[]>([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      const { data } = await supabase
        .from('developers')
        .select('*')
        .order('resignation_count', { ascending: false });

      if (data) {
        setDevelopers(data);
      }
    };

    fetchDevelopers();
  }, []);

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-white mb-6">Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {developers.map((dev) => (
            <div key={dev.id} className="bg-purple-800 rounded-lg p-4 text-white">
              <div className="flex items-center space-x-4">
                <img
                  src={dev.avatar_url}
                  alt={dev.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{dev.name}</h3>
                  <p className="text-purple-300">{dev.title}</p>
                  <p className="text-sm text-purple-400">{dev.location}</p>
                </div>
              </div>
              <div className="mt-4 text-right">
                <span className="text-purple-300">Resignations: </span>
                <span className="font-bold">{dev.resignation_count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Leaderboard developers={developers} />
    </div>
  );
}