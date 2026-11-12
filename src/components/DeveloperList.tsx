import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useDevelopers } from '../lib/hooks';

const sorts = [
  { value: 'resignations', label: 'Most resigned' },
  { value: 'recent', label: 'Recent' },
  { value: 'name', label: 'Name' },
] as const;

const DeveloperList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<(typeof sorts)[number]['value']>('resignations');
  const { developers, getDeveloperAwards } = useDevelopers(searchQuery);

  const sorted = [...developers].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'resignations') return b.resignation_count - a.resignation_count;
    return new Date(b.last_resigned_at).getTime() - new Date(a.last_resigned_at).getTime();
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <h1 className="font-display text-7xl font-black uppercase leading-[0.85] md:text-9xl">The Rack</h1>
      <p className="mt-3 text-xl font-medium">
        Malaysian developers yang dah resign. {developers.length} card{developers.length !== 1 ? 's' : ''}
        {searchQuery ? ` matching "${searchQuery}"` : ' on the wall'}.
      </p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <label className="relative block md:w-80">
          <span className="sr-only">Search developers</span>
          <Search aria-hidden className="pointer-events-none absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search name or title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="field px-8"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-0 top-1/2 -translate-y-1/2 hover:text-late"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </label>

        <div role="group" aria-label="Sort cards" className="flex border-2 border-ink">
          {sorts.map((sort) => (
            <button
              key={sort.value}
              onClick={() => setSortBy(sort.value)}
              aria-pressed={sortBy === sort.value}
              className={`flex-1 px-4 py-2 font-display text-lg font-bold uppercase tracking-wide ${
                sortBy === sort.value ? 'bg-ink text-card' : 'hover:bg-ink/10'
              }`}
            >
              {sort.label}
            </button>
          ))}
        </div>
      </div>

      {sorted.length > 0 ? (
        <ul className="mt-10 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((dev) => {
            const daysFree = Math.floor(
              (Date.now() - new Date(dev.last_resigned_at).getTime()) / (1000 * 60 * 60 * 24)
            );
            return (
              <li key={dev.id} className="group relative pb-4">
                <article className="timecard flex h-full flex-col bg-stock px-4 pb-6 pt-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-3">
                  <div className="flex items-start gap-3 border-b-2 border-ink pb-3">
                    <img
                      src={dev.avatar_url}
                      alt=""
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-sm object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/blank-profile.png';
                      }}
                    />
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-3xl font-black uppercase leading-none">{dev.name}</h2>
                      <p className="mt-1 text-sm text-ink/75">{dev.title}</p>
                    </div>
                    <div className="pr-3 text-right text-late">
                      <div className="font-dot text-5xl font-black leading-none">{dev.resignation_count}</div>
                      <div className="text-xs font-bold uppercase tracking-wider">kali</div>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-5 gap-1.5">
                    {Array.from({ length: Math.max(10, dev.resignation_count) }, (_, i) => (
                      <div
                        key={i}
                        className="flex h-9 items-center justify-center border border-ink/30 text-late"
                      >
                        {i < dev.resignation_count && <span className="stamp text-sm">Out</span>}
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex justify-between gap-2 font-dot text-sm font-black uppercase">
                    <span>
                      Last out{' '}
                      {new Date(dev.last_resigned_at).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="text-ribbon">{daysFree} hari bebas</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-ribbon">
                    {getDeveloperAwards(dev.id).map((award) => (
                      <span key={award.id} title={award.description} className="stamp text-base">
                        {award.icon} {award.name}
                      </span>
                    ))}
                  </div>
                </article>
                {/* rack pocket the card sits in */}
                <div className="absolute inset-x-0 bottom-0 h-5 rounded-b-md bg-ink" />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-16 max-w-xl">
          <h2 className="font-display text-5xl font-black uppercase leading-[0.9]">No developers found lah</h2>
          <p className="mt-3 text-lg">
            Cannot find any card matching "{searchQuery}". Try a different search, or resign and be the first.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-6 bg-ink px-5 py-3 font-display text-xl font-bold uppercase tracking-wide text-card hover:bg-ribbon hover:text-stock"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};

export default DeveloperList;
