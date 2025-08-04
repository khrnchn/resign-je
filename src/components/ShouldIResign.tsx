import React, { useState, useEffect } from "react";

const getProbabilityMessage = (probability: number, result: "yes" | "no") => {
  if (probability < 0.1)
    return result === "yes"
      ? "🤔 Hmm... maybe time to consider lah?"
      : "⛓ Not yet lah. Still can tahan a bit more.";
  if (probability < 0.2)
    return result === "yes"
      ? "💭 The feeling is there already... You should resign je."
      : "🌀 Still clinging on ah? For how long more?";
  if (probability < 0.35)
    return result === "yes"
      ? "⚖️ Wah, the stress is killing you! Resign before too late!"
      : "🪢 Denial mode activated. Can tahan forever meh?";
  if (probability < 0.5)
    return result === "yes"
      ? "🚪 The exit door is there lah! Just walk through!"
      : "⚡ Your patience running out already. Really want to stay?";
  return result === "yes"
    ? "🔥 Confirm plus chop! Time to resign je!"
    : "⏳ Destiny calling already, but you still resist... Why leh?";
};

const getDenialMessage = (clicks: number) => {
  if (clicks < 15)
    return "😰 You geleng kepala in disbelief... But deep down, you know you must resign je.";
  if (clicks < 25)
    return "😨 You ketawa nervously. Maybe if you click again, the answer will change? (Spoiler: It won't lah)";
  if (clicks < 40)
    return "😭 Your hands gementar already. You refuse to accept... But you must resign je.";
  return "🫥 Senyap. You pandang screen, knowing the truth all along. Resign je lah.";
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
    
    // Add haptic feedback for mobile devices
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    if (probability >= 1) {
      setDenialClicks(denialClicks + 1);
      setProbability(1);
      setDecision("yes");
      
      // Trigger confetti animation for "yes" result
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
      }
      return;
    }

    const roll = Math.random();
    if (roll < probability) {
      setDecision("yes");
      setProbability(1);
      
      // Trigger confetti animation for "yes" result
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
      }
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

  const shareResult = () => {
    const malaysianPhrases = [
      "Wah, I confirm resign je!",
      "Time to lepak and cari new job lah!",
      "Boss bye bye, freedom hello!",
      "Sudah fed up, time to cabut!"
    ];
    const phrase = malaysianPhrases[Math.floor(Math.random() * malaysianPhrases.length)];
    
    if (navigator.share) {
      navigator.share({
        title: 'Should I Resign Je?',
        text: `${phrase} Find out if you should resign too at:`,
        url: window.location.origin
      });
    } else {
      navigator.clipboard.writeText(`${phrase} Find out if you should resign too at: ${window.location.origin}`);
      alert('Result copied to clipboard!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4 relative gap-6">
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Should I Resign Ah?</h1>
        {probability > 0.001 && (
          <div className="bg-purple-800/50 rounded-full px-4 py-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              Resignation probability: {Math.round(probability * 100)}%
            </div>
          </div>
        )}
      </div>
      
      <button
        onClick={handleClick}
        className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
      >
        {decision ? "Click Again?" : "Click Me"}
      </button>
      
      <div className="flex flex-col items-center min-h-[200px]">
        {decision === "yes" && (
          <div className="animate-bounce mb-2">
            🎉🎊✨
          </div>
        )}
        
        <h1
          data-denial={denialLevel}
          className={`text-5xl data-[denial=2]:text-6xl data-[denial=3]:text-7xl data-[denial=3]:font-bold data-[denial=4]:text-8xl data-[denial=4]:font-bold uppercase transition-all duration-500 ${
            decision === "yes" ? "text-green-400 animate-pulse" : decision === "no" ? "text-red-400" : ""
          }`}
        >
          {decision}
        </h1>
        
        {decision && (
          <div className="mt-6 max-w-md">
            <p className="text-lg font-medium mb-4">
              {probability >= 1
                ? getDenialMessage(denialClicks)
                : getProbabilityMessage(probability, decision as "yes" | "no")}
            </p>
            
            {decision === "yes" && (
              <button
                onClick={shareResult}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors transform hover:scale-105"
              >
                🚀 Share My Freedom!
              </button>
            )}
          </div>
        )}
      </div>
      <a
        href="https://www.google.com/search?q=resignation+letter+malaysia&oq=resignation+letter+malaysia&sourceid=chrome&ie=UTF-8"
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-30 hover:opacity-50"
      >
        Cari resignation letter templates
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
