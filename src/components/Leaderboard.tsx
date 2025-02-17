import { Developer } from '../types';

export default function Leaderboard({ developers }: { developers: Developer[] }) {
  const topDevelopers = developers.slice(0, 10);
  const podiumDevelopers = topDevelopers.slice(0, 3);

  return (
    <div className="w-80 bg-yellow-400 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Leaderboard</h2>
      
      <div className="flex justify-center items-end mb-8 h-48">
        {podiumDevelopers.map((dev, index) => {
          const heights = ['h-32', 'h-40', 'h-24'];
          const positions = ['order-2', 'order-1', 'order-3'];
          
          return (
            <div
              key={dev.id}
              className={`${positions[index]} ${heights[index]} w-24 mx-1 bg-purple-900 rounded-t-lg relative`}
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <img
                  src={dev.avatar_url}
                  alt={dev.name}
                  className="w-16 h-16 rounded-full border-4 border-yellow-400"
                />
                <div className="text-center mt-2 text-white">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-2">
        {topDevelopers.map((dev, index) => (
          <div key={dev.id} className="flex items-center justify-between p-2 bg-yellow-300 rounded">
            <div className="flex items-center">
              <span className="w-6 text-lg font-bold">{index + 1}</span>
              <img
                src={dev.avatar_url}
                alt={dev.name}
                className="w-8 h-8 rounded-full mx-2"
              />
              <span>{dev.name}</span>
            </div>
            <span className="font-bold">{dev.resignation_count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}