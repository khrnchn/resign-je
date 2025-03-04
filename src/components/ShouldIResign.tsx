import React, { useState, useEffect } from "react";

const getProbabilityMessage = (probability: number, result: "yes" | "no") => {
  if (probability < 0.1)
    return result === "yes"
      ? "🤔 A whisper in the wind... Maybe it's time?"
      : "⛓ Not yet. The chains still hold you back.";
  if (probability < 0.2)
    return result === "yes"
      ? "💭 The thought lingers... You should resign."
      : "🌀 You cling to the past, but for how long?";
  if (probability < 0.35)
    return result === "yes"
      ? "⚖️ The weight of your choice is crushing... Quit before it's too late!"
      : "🪢 Denial grips you tighter. Can you hold on forever?";
  if (probability < 0.5)
    return result === "yes"
      ? "🚪 The exit is right there. Walk through it!"
      : "⚡ Your resolve is crumbling. Do you really want to stay?";
  return result === "yes"
    ? "🔥 The time has come. Escape before you burn out!"
    : "⏳ Fate is inevitable, but you still resist... Why?";
};

const getDenialMessage = (clicks: number) => {
  if (clicks < 15)
    return "😰 You shake your head in disbelief... But deep down, you know you must resign.";
  if (clicks < 25)
    return "😨 You laugh nervously. Maybe if you click again, the answer will change? (It won’t)";
  if (clicks < 40)
    return "😭 Your hands tremble. You refuse to accept it... But you must resign.";
  return "🫥 Silence. You stare at the screen, knowing the truth all along. Resign.";
};

const ShouldIResignGame: React.FC = () => {
  const [probability, setProbability] = useState(() => {
    return parseFloat(localStorage.getItem("probability") || "0.001");
  });
  const [denialClicks, setDenialClicks] = useState(0);
  const [decision, setDecision] = useState<string | null>(null);
  const [totalClicks, setTotalClicks] = useState(() => {
    return parseFloat(localStorage.getItem("totalClicks") || "0");
  });

  const denialLevel =
    denialClicks < 15 ? 1 : denialClicks < 25 ? 2 : denialClicks < 40 ? 3 : 4;

  useEffect(() => {
    localStorage.setItem("probability", probability.toString());
    localStorage.setItem("totalClicks", totalClicks.toString());
  }, [probability, totalClicks]);

  const handleClick = () => {
    setTotalClicks(totalClicks + 1);
    if (probability >= 1) {
      setDenialClicks(denialClicks + 1);
      setProbability(1);
      setDecision("yes");
      return;
    }

    const roll = Math.random();
    if (roll < probability) {
      setDecision("yes");
      setProbability(1);
    } else {
      setDecision("no");
      setProbability(probability * 1.5);
    }
  };

  const handleReset = () => {
    setProbability(0.001);
    setDenialClicks(0);
    setTotalClicks(0);
    setDecision(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4 relative gap-4">
      <h1 className="text-2xl font-bold">Should I Resign?</h1>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg shadow-md hover:bg-yellow-600"
      >
        Click Me
      </button>
      <div className="flex flex-col">
        <h1
          data-denial={denialLevel}
          className="text-5xl data-[denial=2]:text-6xl data-[denial=3]:text-7xl data-[denial=3]:font-bold data-[denial=4]:text-8xl data-[denial=4]:font-bold uppercase"
        >
          {decision}
        </h1>
        {decision && (
          <p className="mt-4 text-lg font-medium">
            {probability >= 1
              ? getDenialMessage(denialClicks)
              : getProbabilityMessage(probability, decision as "yes" | "no")}
          </p>
        )}
      </div>
      <a
        href="https://www.google.com/search?q=resign+letter&oq=resign+letter&sourceid=chrome&ie=UTF-8"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-30 hover:opacity-50"
      >
        Find resign letters
      </a>
      <button
        onClick={handleReset}
        className="absolute bottom-4 right-4 opacity-10 text-gray-400 text-xs hover:text-gray-600"
      >
        {totalClicks}(reset)
      </button>
    </div>
  );
};

export default ShouldIResignGame;
