import { useState, useEffect } from "react";

const getProbabilityMessage = (probability: number, result: "yes" | "no") => {
  if (probability < 0.1)
    return result === "yes"
      ? "Hmm... maybe time to consider lah?"
      : "Not yet lah. Still can tahan a bit more.";
  if (probability < 0.2)
    return result === "yes"
      ? "The feeling is there already... You should resign je."
      : "Still clinging on ah? For how long more?";
  if (probability < 0.35)
    return result === "yes"
      ? "Wah, the stress is killing you! Resign before too late!"
      : "Denial mode activated. Can tahan forever meh?";
  if (probability < 0.5)
    return result === "yes"
      ? "The exit door is there lah! Just walk through!"
      : "Your patience running out already. Really want to stay?";
  return result === "yes"
    ? "Confirm plus chop! Time to resign je!"
    : "Destiny calling already, but you still resist... Why leh?";
};

const getDenialMessage = (clicks: number) => {
  if (clicks < 15)
    return "You geleng kepala in disbelief... But deep down, you know you must resign je.";
  if (clicks < 25)
    return "You ketawa nervously. Maybe if you click again, the answer will change? (Spoiler: It won't lah)";
  if (clicks < 40)
    return "Your hands gementar already. You refuse to accept... But you must resign je.";
  return "Senyap. You pandang screen, knowing the truth all along. Resign je lah.";
};

const sharePhrases = [
  "Wah, I confirm resign je!",
  "Time to lepak and cari new job lah!",
  "Boss bye bye, freedom hello!",
  "Sudah fed up, time to cabut!",
];

const klTime = (date: Date) =>
  date.toLocaleTimeString("en-GB", { timeZone: "Asia/Kuala_Lumpur", hour12: false });

const ShouldIResignGame = ({ hero = false }: { hero?: boolean }) => {
  const [probability, setProbability] = useState(() =>
    parseFloat(localStorage.getItem("probability") || "0.001")
  );
  const [totalClicks, setTotalClicks] = useState(() =>
    parseFloat(localStorage.getItem("totalClicks") || "0")
  );
  const [denialClicks, setDenialClicks] = useState(0);
  const [decision, setDecision] = useState<"yes" | "no" | null>(null);
  const [punches, setPunches] = useState<{ no: number; time: string; yes: boolean }[]>([]);
  const [copied, setCopied] = useState(false);
  const [now, setNow] = useState(new Date());

  const denialLevel = denialClicks < 15 ? 1 : denialClicks < 25 ? 2 : denialClicks < 40 ? 3 : 4;

  useEffect(() => {
    localStorage.setItem("probability", probability.toString());
    localStorage.setItem("totalClicks", totalClicks.toString());
  }, [probability, totalClicks]);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    const yes = probability >= 1 || Math.random() < probability;

    setTotalClicks(totalClicks + 1);
    setPunches([{ no: totalClicks + 1, time: klTime(new Date()), yes }, ...punches].slice(0, 3));
    setDecision(yes ? "yes" : "no");
    if (probability >= 1) setDenialClicks(denialClicks + 1);
    setProbability(yes ? 1 : probability * 1.5);

    if (navigator.vibrate) navigator.vibrate(yes ? [100, 50, 100] : 50);
  };

  const handleReset = () => {
    setProbability(0.001);
    setDenialClicks(0);
    setTotalClicks(0);
    setDecision(null);
    setPunches([]);
  };

  const shareResult = () => {
    const phrase = sharePhrases[Math.floor(Math.random() * sharePhrases.length)];
    if (navigator.share) {
      navigator.share({
        title: "Should I Resign Je?",
        text: `${phrase} Find out if you should resign too at:`,
        url: window.location.origin,
      });
    } else {
      navigator.clipboard.writeText(
        `${phrase} Find out if you should resign too at: ${window.location.origin}`
      );
      setCopied(true);
    }
  };

  const verdictSize = hero
    ? "text-6xl"
    : ["text-7xl", "text-8xl", "text-8xl md:text-9xl", "text-9xl md:text-[10rem]"][denialLevel - 1];

  return (
    <div
      className={
        hero
          ? ""
          : "mx-auto grid max-w-5xl gap-10 px-4 py-10 md:grid-cols-[380px_1fr] md:items-end md:gap-16 md:py-16"
      }
    >
      {!hero && (
        <h1 className="font-display text-6xl font-black uppercase leading-[0.9] md:col-span-2 md:text-8xl">
          Should I resign ah?
        </h1>
      )}

      <div className="relative mx-auto w-full max-w-[380px] pt-[168px]">
        <div key={totalClicks} className={`absolute inset-x-7 top-0 ${totalClicks ? "animate-chunk" : ""}`}>
          <div className="timecard h-[230px] bg-stock px-4 pt-3 text-ink">
            <div className="flex items-baseline justify-between border-b-2 border-ink pb-1">
              <span className="font-display text-lg font-black uppercase tracking-wide">Kad Perakam Waktu</span>
              <span className="pr-3 text-xs font-bold uppercase tracking-wider">Nama: Anda</span>
            </div>
            <div className="grid grid-cols-[3rem_1fr_auto] border-b border-ink/30 py-1 text-xs font-bold uppercase tracking-wider">
              <span>No.</span>
              <span>Masa</span>
              <span>Keputusan</span>
            </div>
            {[0, 1, 2].map((row) => {
              const punch = punches[row];
              return (
                <div
                  key={row}
                  className={`grid h-8 grid-cols-[3rem_1fr_auto] items-center border-b border-ink/30 font-dot text-base font-black ${
                    punch?.yes ? "text-late" : "text-ribbon"
                  }`}
                >
                  {punch && (
                    <>
                      <span>{String(punch.no).padStart(3, "0")}</span>
                      <span>{punch.time}</span>
                      <span className={row === 0 ? "stamp animate-ink text-sm" : "stamp text-sm"}>
                        {punch.yes ? "Resign" : "Tak lagi"}
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          key={`body-${totalClicks}`}
          className={`relative rounded-2xl bg-ink p-5 text-stock shadow-[0_28px_44px_-20px_rgba(21,23,26,0.7)] ${
            totalClicks ? "animate-thud" : ""
          }`}
        >
          <div className="-mt-5 mb-5 h-3 rounded-b-md bg-black" />

          <div className="mb-3 flex items-baseline justify-between">
            <span className="font-display text-xl font-black uppercase tracking-wide text-card">Resign Je</span>
            <span className="text-xs font-bold uppercase tracking-widest text-stock/80">Time recorder RJ-8</span>
          </div>

          <div className="rounded-md bg-card px-4 py-3 text-ink">
            <div className="font-dot text-5xl font-black leading-none">{klTime(now)}</div>
            <div className="mt-2 flex justify-between font-dot text-base font-black uppercase">
              <span>
                {now.toLocaleDateString("en-GB", {
                  timeZone: "Asia/Kuala_Lumpur",
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                })}
              </span>
              <span>Odds {(Math.min(probability, 1) * 100).toFixed(1)}%</span>
            </div>
          </div>

          <button
            onClick={handleClick}
            className="mt-4 w-full rounded-lg border-b-[6px] border-[#7d1208] bg-late py-4 font-display text-3xl font-black uppercase tracking-wide text-stock transition-[transform,border-width] duration-75 hover:brightness-110 active:translate-y-1 active:border-b-2"
          >
            {decision ? "Punch again?" : "Should I resign ah?"}
          </button>

          <div className="mt-3 flex justify-between text-xs font-bold uppercase tracking-widest text-stock/80">
            <span>Punches: {totalClicks}</span>
            <button onClick={handleReset} className="uppercase tracking-widest underline underline-offset-4 hover:text-card">
              Reset
            </button>
          </div>
        </div>
      </div>

      <div aria-live="polite" className={hero ? "mx-auto mt-6 min-h-[9rem] max-w-[380px]" : "min-h-[16rem]"}>
        <p
          className={`font-display font-black uppercase leading-[0.85] transition-[font-size] duration-500 ${verdictSize} ${
            decision === "yes" ? "text-late" : "text-ribbon"
          }`}
        >
          {decision ?? (hero ? "" : "Well?")}
        </p>
        <p className="mt-3 max-w-md text-lg font-medium">
          {decision
            ? probability >= 1 && decision === "yes" && denialClicks > 0
              ? getDenialMessage(denialClicks)
              : getProbabilityMessage(probability, decision)
            : "Punch the clock. Every no makes the next yes more likely, same like real life."}
        </p>

        {decision === "yes" && (
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              onClick={shareResult}
              className="bg-ink px-5 py-3 font-display text-xl font-bold uppercase tracking-wide text-card hover:bg-ribbon hover:text-stock"
            >
              {copied ? "Copied. Go paste." : "Share my freedom"}
            </button>
            <a
              href="https://www.google.com/search?q=resignation+letter+malaysia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4 hover:text-ribbon"
            >
              Cari resignation letter templates
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShouldIResignGame;
