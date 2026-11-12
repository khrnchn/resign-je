import { useState } from "react";

const Settings = () => {
  const [reminders, setReminders] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [status, setStatus] = useState("");

  const switches = [
    {
      label: "Daily resignation reminders",
      hint: "We don't actually send anything. You already think about it every day.",
      on: reminders,
      toggle: () => setReminders(!reminders),
    },
    {
      label: "Success story notifications",
      hint: "Hear about others who broke free. Usually via the group chat, not us.",
      on: notifications,
      toggle: () => setNotifications(!notifications),
    },
    {
      label: "Night shift mode",
      hint: "Coming soon. For now, everybody works the day shift.",
      on: false,
    },
  ];

  const exportData = () => {
    const data = JSON.stringify(
      {
        probability: localStorage.getItem("probability"),
        totalClicks: localStorage.getItem("totalClicks"),
      },
      null,
      2
    );
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([data], { type: "application/json" }));
    link.download = "liberation-data.json";
    link.click();
    URL.revokeObjectURL(link.href);
    setStatus("Exported. Two whole numbers, all yours.");
  };

  const resetCounter = () => {
    localStorage.removeItem("probability");
    localStorage.removeItem("totalClicks");
    setStatus("Punch counter reset. The clock forgives, your boss won't.");
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:py-16">
      <h1 className="font-display text-7xl font-black uppercase leading-[0.85] md:text-9xl">Settings</h1>
      <p className="mt-3 text-xl font-medium">Customize your liberation experience.</p>

      <ul className="mt-10 border-t-2 border-ink">
        {switches.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-6 border-b border-ink/30 py-5">
            <div>
              <div className="text-lg font-bold">{item.label}</div>
              <div className="text-ink/75">{item.hint}</div>
            </div>
            <button
              role="switch"
              aria-checked={item.on}
              aria-label={item.label}
              disabled={!item.toggle}
              onClick={item.toggle}
              className={`relative h-9 w-[4.5rem] shrink-0 border-2 border-ink font-display text-sm font-black uppercase disabled:opacity-50 ${
                item.on ? "bg-ink text-card" : "bg-stock text-ink"
              }`}
            >
              <span
                className={`absolute inset-y-1 w-7 transition-[left] duration-200 ${
                  item.on ? "left-[2.4rem] bg-card" : "left-1 bg-ink"
                }`}
              />
              <span className={`absolute top-1/2 -translate-y-1/2 ${item.on ? "left-2" : "right-2"}`}>
                {item.on ? "On" : "Off"}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <h2 className="mt-14 font-display text-4xl font-black uppercase leading-none">Your data</h2>
      <p className="mt-2 text-ink/75">
        Everything lives in this browser: your punch count and your odds. That's the whole database.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="https://github.com/khrnchn/resign-je"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink px-5 py-3 font-display text-xl font-bold uppercase tracking-wide text-card hover:bg-ribbon hover:text-stock"
        >
          Add my resignation
        </a>
        <button
          onClick={exportData}
          className="border-2 border-ink px-5 py-3 font-display text-xl font-bold uppercase tracking-wide hover:bg-ink hover:text-card"
        >
          Export my liberation data
        </button>
        <button
          onClick={resetCounter}
          className="border-2 border-late px-5 py-3 font-display text-xl font-bold uppercase tracking-wide text-late hover:bg-late hover:text-stock"
        >
          Reset punch counter
        </button>
      </div>
      <p aria-live="polite" className="mt-4 min-h-[1.75rem] font-bold text-ribbon">
        {status}
      </p>
    </div>
  );
};

export default Settings;
