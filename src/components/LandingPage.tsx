import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { mockDevelopers } from "../lib/mockData";
import ShouldIResignGame from "./ShouldIResign";

const repoUrl = "https://github.com/khrnchn/resign-je";

const resignationSigns = [
  "You dread Monday mornings like eating durian",
  "Boss micromanage until you rasa nak pengsan",
  "Work-life balance? What balance? Everyday OT sampai malam",
  "Office politics more drama than Astro Prima",
  "Gaji peanuts but workload like gajah",
  "No growth opportunities, stuck like LRT during peak hour",
  "Crunch time every day, weekend also kena work",
  "Your brilliant ideas kena ignore, but ang moh consultant same idea suddenly genius",
];

const verdicts = [
  "Tick what applies. Be honest, boss is not looking.",
  "Sikit je. Still can tahan.",
  "Sikit je. Still can tahan.",
  "Hmm. Start updating your LinkedIn quietly.",
  "Hmm. Start updating your LinkedIn quietly.",
  "Confirm plus chop. Time to punch out.",
  "Confirm plus chop. Time to punch out.",
  "Confirm plus chop. Time to punch out.",
  "All eight? Why are you still reading this. Resign je lah.",
];

const resumePrompt = `I'm updating my resume before I leave my current job. Study my contributions in this repository and turn them into resume material.

1. Find my work. Run git log --author="<my name or email>" --no-merges --stat, then read the PRs, tickets and docs I wrote. If you can't tell which author is me, ask.
2. Group it into 4 to 6 themes: features shipped, systems owned, performance or reliability wins, incidents handled, people mentored.
3. For each theme write 1 to 2 resume bullets. Strong verb first, then what I built, the tech used, and a measurable result. Only use numbers you can find in the code, commits or docs. If a number is missing, ask me. Never invent one.
4. Leave out anything confidential: internal codenames, customer names, secrets, unreleased plans.
5. If I give you my current resume, update the section for this job in place and keep its format. Otherwise output the bullets as Markdown.

Finish with 3 questions about impact you could not verify, so I can fill the gaps.`;

const LandingPage = () => {
  const [ticked, setTicked] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  const totalResignations = mockDevelopers.reduce((sum, dev) => sum + dev.resignation_count, 0);
  const topResigners = [...mockDevelopers]
    .sort((a, b) => b.resignation_count - a.resignation_count)
    .slice(0, 5);

  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-10 md:grid-cols-[1fr_380px] md:gap-16 md:pb-24 md:pt-16">
        <div className="md:pt-6">
          <h1 className="font-display text-[5.5rem] font-black uppercase leading-[0.82] md:text-[9.5rem]">
            Sudah fed up ke?
          </h1>
          <p className="mt-6 max-w-xl text-xl font-medium md:text-2xl">
            Malaysia's #1 resignation encouragement platform.{" "}
            <span className="font-bold text-ribbon">
              {totalResignations} resignations clocked by {mockDevelopers.length} real developers
            </span>{" "}
            who said "cukup lah".
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/hall-of-fame"
              className="inline-flex items-center gap-2 bg-ink px-6 py-4 font-display text-2xl font-bold uppercase tracking-wide text-card hover:bg-ribbon hover:text-stock"
            >
              See who resigned <ArrowRight aria-hidden className="h-6 w-6" />
            </Link>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-lg font-bold underline underline-offset-4 hover:text-ribbon"
            >
              Add your own card <ArrowUpRight aria-hidden className="h-5 w-5" />
            </a>
          </div>
        </div>

        <ShouldIResignGame hero />
      </section>

      <section className="bg-stock">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
            Most punched out
          </h2>
          <p className="mt-3 max-w-xl text-lg">
            Real people, real resignations. One red stamp per time they told the boss bye.
          </p>

          <ol className="mt-10 border-t-2 border-ink">
            {topResigners.map((dev, index) => (
              <li
                key={dev.id}
                className="grid grid-cols-[2.5rem_3rem_1fr_auto] items-center gap-x-4 gap-y-2 border-b border-ink/30 py-4 md:grid-cols-[4rem_3.5rem_1fr_auto_5rem]"
              >
                <span className="font-display text-5xl font-black leading-none">{index + 1}</span>
                <img
                  src={dev.avatar_url}
                  alt=""
                  loading="lazy"
                  className="h-12 w-12 rounded-sm object-cover md:h-14 md:w-14"
                  onError={(e) => {
                    e.currentTarget.src = "/images/blank-profile.png";
                  }}
                />
                <div className="min-w-0">
                  <div className="truncate font-display text-3xl font-bold uppercase leading-none">{dev.name}</div>
                  <div className="truncate text-ink/75">{dev.title}</div>
                </div>
                <div className="col-span-3 col-start-2 row-start-2 flex flex-wrap gap-1.5 text-late md:col-span-1 md:col-start-4 md:row-start-1 md:justify-end">
                  {Array.from({ length: dev.resignation_count }, (_, i) => (
                    <span key={i} className="stamp text-sm">Out</span>
                  ))}
                </div>
                <span className="col-start-4 row-start-1 text-right font-dot text-4xl font-black text-late md:col-start-5">
                  {dev.resignation_count}x
                </span>
              </li>
            ))}
          </ol>

          <Link
            to="/hall-of-fame"
            className="mt-8 inline-flex items-center gap-2 text-lg font-bold underline underline-offset-4 hover:text-ribbon"
          >
            Open the full rack, all {mockDevelopers.length} cards <ArrowRight aria-hidden className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.2fr] md:gap-16 md:py-24">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
            Signs you should resign je
          </h2>
          <p aria-live="polite" className="mt-6 font-dot text-6xl font-black leading-none text-ribbon">
            {ticked.length}/{resignationSigns.length}
          </p>
          <p aria-live="polite" className="mt-3 max-w-sm text-xl font-bold">
            {verdicts[ticked.length]}
          </p>
        </div>

        <ul className="timecard bg-stock px-5 pb-4 pt-2 md:px-8">
          {resignationSigns.map((sign, index) => {
            const on = ticked.includes(index);
            return (
              <li key={sign} className="border-b border-ink/30 last:border-b-0">
                <label className="flex cursor-pointer items-center gap-4 py-4 text-lg">
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() =>
                      setTicked(on ? ticked.filter((i) => i !== index) : [...ticked, index])
                    }
                    className="h-6 w-6 shrink-0 appearance-none border-2 border-ink bg-stock checked:border-late checked:bg-late"
                  />
                  <span className={on ? "font-bold text-late" : ""}>{sign}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="bg-ink text-stock">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_1.2fr] md:gap-16 md:py-24">
          <div>
            <h2 className="font-display text-6xl font-black uppercase leading-[0.9] text-card md:text-8xl">
              Resume dulu, resign kemudian
            </h2>
            <p className="mt-6 max-w-sm text-xl">
              Paste this into your AI agent inside the company repo, while you still have access. It digs up what you
              actually shipped and writes it into your resume.
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(resumePrompt);
                setCopied(true);
              }}
              className="mt-8 bg-card px-6 py-4 font-display text-2xl font-bold uppercase tracking-wide text-ink hover:bg-stock"
            >
              {copied ? "Copied. Go paste." : "Copy the prompt"}
            </button>
          </div>

          <pre className="timecard whitespace-pre-wrap bg-stock px-5 py-6 font-sans text-base leading-relaxed text-ink md:px-8">
            {resumePrompt}
          </pre>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="max-w-3xl font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
            Resigned already? Claim your card.
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            <li>
              <div className="font-dot text-5xl font-black text-ribbon">1</div>
              <h3 className="mt-2 font-display text-3xl font-bold uppercase">Resign</h3>
              <p className="mt-1 text-lg">The hard part. We cannot help, only cheer.</p>
            </li>
            <li>
              <div className="font-dot text-5xl font-black text-ribbon">2</div>
              <h3 className="mt-2 font-display text-3xl font-bold uppercase">Add yourself</h3>
              <p className="mt-1 text-lg">
                Fork the repo and put your name in <code className="font-bold">src/lib/mockData.ts</code>. Bump the count if you are a repeat customer.
              </p>
            </li>
            <li>
              <div className="font-dot text-5xl font-black text-late">3</div>
              <h3 className="mt-2 font-display text-3xl font-bold uppercase">Open a PR</h3>
              <p className="mt-1 text-lg">Once it merges, your card goes on the rack with everyone else's.</p>
            </li>
          </ol>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-ink px-6 py-4 font-display text-2xl font-bold uppercase tracking-wide text-card hover:bg-ribbon hover:text-stock"
          >
            Open the repo <ArrowUpRight aria-hidden className="h-6 w-6" />
          </a>
        </div>
      </section>

      <section className="bg-late text-stock">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-32">
          <h2 className="font-display text-[4.5rem] font-black uppercase leading-[0.82] md:text-[9rem]">
            Your freedom menanti you
          </h2>
          <p className="mt-6 max-w-xl text-xl md:text-2xl">
            Don't tahan anymore lah. Life too short to be miserable at work. Time to cari better opportunity.
          </p>
          <Link
            to="/should-i-resign"
            className="mt-8 inline-flex items-center gap-2 bg-stock px-6 py-4 font-display text-2xl font-bold uppercase tracking-wide text-late hover:bg-ink hover:text-card"
          >
            Resign je lah <ArrowRight aria-hidden className="h-6 w-6" />
          </Link>
        </div>
      </section>

      <footer className="bg-ink text-stock">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 py-8">
          <p className="max-w-lg">
            Resign Je is a joke among friends. Secure the offer letter first, then punch out.
          </p>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-card underline underline-offset-4"
          >
            github.com/khrnchn/resign-je
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
