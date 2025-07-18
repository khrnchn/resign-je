import { useMemo } from 'react';
import { useDevelopers } from '../lib/hooks';

const Leaderboard = () => {
  const { developers } = useDevelopers('');

  const topResigners = useMemo(() => {
    return [...developers]
      .sort((a, b) => b.resignation_count - a.resignation_count)
      .slice(0, 10);
  }, [developers]);

  return (
    <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6 w-full md:w-[400px]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">🏆 Top Resigners</h2>
          <p className="text-purple-300 text-sm">Malaysian Champions</p>
        </div>
        <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform">
          <span className="material-icons text-purple-900 text-2xl">emoji_events</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative flex justify-between items-end h-[280px] px-4">
          {topResigners[1] && (
            <div className="absolute bottom-0 left-4 flex flex-col items-center transform hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 mb-2 rounded-2xl overflow-hidden border-2 border-purple-400/50 ring-2 ring-purple-400/20 ring-offset-2 ring-offset-purple-800">
                <img
                  src={topResigners[1].avatar_url}
                  alt={topResigners[1].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm font-medium mb-1 text-center max-w-[80px] truncate">
                {topResigners[1].name}
              </div>
              <div className="text-xs text-purple-300 mb-2 max-w-[80px] truncate">
                {topResigners[1].title}
              </div>
              <div className="text-yellow-400 font-bold text-lg mb-2">
                {topResigners[1].resignation_count}
              </div>
              <div className="w-20 h-28 bg-gradient-to-b from-purple-700/40 to-purple-700/20 backdrop-blur-sm rounded-t-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white/70">2</span>
              </div>
            </div>
          )}

          {topResigners[0] && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 transform hover:-translate-y-2 transition-transform">
              <div className="relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <span className="material-icons text-yellow-400 text-2xl animate-bounce">stars</span>
                </div>
                <div className="w-16 h-16 mb-2 rounded-2xl overflow-hidden border-4 border-yellow-400 ring-4 ring-yellow-400/20 ring-offset-2 ring-offset-purple-800">
                  <img
                    src={topResigners[0].avatar_url}
                    alt={topResigners[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-base font-semibold mb-1 text-center max-w-[100px] truncate">
                {topResigners[0].name}
              </div>
              <div className="text-xs text-purple-300 mb-2 max-w-[100px] truncate">
                {topResigners[0].title}
              </div>
              <div className="text-yellow-400 font-bold text-xl mb-2">
                {topResigners[0].resignation_count}
              </div>
              <div className="w-24 h-36 bg-gradient-to-b from-purple-700/40 to-purple-700/20 backdrop-blur-sm rounded-t-2xl flex items-center justify-center">
                <span className="text-3xl font-bold text-yellow-400">1</span>
              </div>
            </div>
          )}

          {topResigners[2] && (
            <div className="absolute bottom-0 right-4 flex flex-col items-center transform hover:-translate-y-2 transition-transform">
              <div className="w-14 h-14 mb-2 rounded-2xl overflow-hidden border-2 border-purple-400/50 ring-2 ring-purple-400/20 ring-offset-2 ring-offset-purple-800">
                <img
                  src={topResigners[2].avatar_url}
                  alt={topResigners[2].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm font-medium mb-1 text-center max-w-[80px] truncate">
                {topResigners[2].name}
              </div>
              <div className="text-xs text-purple-300 mb-2 max-w-[80px] truncate">
                {topResigners[2].title}
              </div>
              <div className="text-yellow-400 font-bold text-lg mb-2">
                {topResigners[2].resignation_count}
              </div>
              <div className="w-20 h-24 bg-gradient-to-b from-purple-700/40 to-purple-700/20 backdrop-blur-sm rounded-t-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white/70">3</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {topResigners.slice(3).map((dev, index) => (
          <div
            key={dev.id}
            className="flex items-center gap-4 p-2 rounded-2xl hover:bg-purple-700/30 transition-colors"
          >
            <div className="w-6 text-base font-medium text-purple-300">
              {index + 4}
            </div>
            <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-purple-400/20 ring-offset-2 ring-offset-purple-800">
              <img
                src={dev.avatar_url}
                alt={dev.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{dev.name}</div>
              <div className="text-sm text-purple-300 truncate">{dev.title}</div>
            </div>
            <div className="text-yellow-400 font-bold text-lg tabular-nums">
              {dev.resignation_count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;