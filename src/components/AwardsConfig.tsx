import { useState } from 'react';
import { mockAwards, mockDeveloperAwards, mockDevelopers } from '../lib/mockData';
import { Award } from '../types';

const emptyAward = { name: '', description: '', icon: '' };

const AwardsConfig = () => {
  const [awards, setAwards] = useState<Award[]>(mockAwards);
  const [newAward, setNewAward] = useState(emptyAward);

  const complete = newAward.name && newAward.description && newAward.icon;

  const handleAddAward = (e: React.FormEvent) => {
    e.preventDefault();
    if (!complete) return;
    setAwards([...awards, { ...newAward, id: String(awards.length + 1) }]);
    setNewAward(emptyAward);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h1 className="font-display text-7xl font-black uppercase leading-[0.85] md:text-9xl">The Chop Drawer</h1>
      <p className="mt-3 max-w-xl text-xl font-medium">
        Awards get chopped onto a card when someone resigns with style.
      </p>

      <ul className="mt-10 border-t-2 border-ink">
        {awards.map((award, index) => {
          const holders = mockDeveloperAwards
            .filter((da) => da.award_id === award.id)
            .map((da) => mockDevelopers.find((dev) => dev.id === da.developer_id)?.name)
            .filter(Boolean);
          return (
            <li
              key={award.id}
              className="grid items-center gap-x-8 gap-y-3 border-b border-ink/30 py-6 md:grid-cols-[18rem_1fr_1fr]"
            >
              <div className={index % 2 ? 'text-late' : 'text-ribbon'}>
                <span className="stamp text-3xl">
                  {award.icon} {award.name}
                </span>
              </div>
              <p className="text-lg">{award.description}</p>
              <p className="text-ink/75">
                {holders.length ? `Chopped on: ${holders.join(', ')}` : 'Nobody has earned this one yet.'}
              </p>
            </li>
          );
        })}
      </ul>

      <form onSubmit={handleAddAward} className="timecard mt-12 bg-stock px-5 py-6 md:px-8">
        <h2 className="font-display text-4xl font-black uppercase leading-none">Cut a new chop</h2>
        <p className="mt-2 text-ink/75">
          Lasts until you refresh. To make it official, add it to <code className="font-bold">mockData.ts</code> in a PR.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1.5fr_6rem]">
          <label className="block">
            <span className="text-sm font-bold uppercase tracking-wider">Award name</span>
            <input
              type="text"
              value={newAward.name}
              onChange={(e) => setNewAward({ ...newAward, name: e.target.value })}
              placeholder="Quick Quitter"
              maxLength={50}
              className="field"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold uppercase tracking-wider">Description</span>
            <input
              type="text"
              value={newAward.description}
              onChange={(e) => setNewAward({ ...newAward, description: e.target.value })}
              placeholder="Resigned within the first week"
              maxLength={100}
              className="field"
            />
          </label>
          <label className="block">
            <span className="text-sm font-bold uppercase tracking-wider">Emoji</span>
            <input
              type="text"
              value={newAward.icon}
              onChange={(e) => setNewAward({ ...newAward, icon: e.target.value })}
              placeholder="🏃"
              maxLength={4}
              className="field"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="min-h-[3rem] text-ribbon">
            {(newAward.name || newAward.icon) && (
              <span className="stamp text-2xl">
                {newAward.icon} {newAward.name}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={!complete}
            className="bg-ink px-6 py-3 font-display text-xl font-bold uppercase tracking-wide text-card hover:bg-ribbon hover:text-stock disabled:cursor-not-allowed disabled:bg-ink/40 disabled:text-stock"
          >
            Add award
          </button>
        </div>
      </form>
    </div>
  );
};

export default AwardsConfig;
