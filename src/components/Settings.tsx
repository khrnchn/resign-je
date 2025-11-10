import React, { useState } from "react";

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [resignationReminders, setResignationReminders] = useState(true);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">⚙️ Settings</h1>
        <p className="text-purple-300">Customize your liberation experience</p>
      </div>

      <div className="space-y-6">
        {/* Liberation Preferences */}
        <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="material-icons mr-2">psychology</span>
            Liberation Preferences
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Daily Resignation Reminders</div>
                <div className="text-sm text-purple-300">Get motivated to quit every day</div>
              </div>
              <button
                onClick={() => setResignationReminders(!resignationReminders)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  resignationReminders ? 'bg-yellow-400' : 'bg-purple-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    resignationReminders ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Success Story Notifications</div>
                <div className="text-sm text-purple-300">Hear about others who broke free</div>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications ? 'bg-yellow-400' : 'bg-purple-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="material-icons mr-2">palette</span>
            Appearance
          </h2>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Dark Mode</div>
              <div className="text-sm text-purple-300">Switch to dark theme (coming soon)</div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                darkMode ? 'bg-yellow-400' : 'bg-purple-600'
              }`}
              disabled
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="material-icons mr-2">account_circle</span>
            Account Actions
          </h2>
          
          <div className="flex gap-2">
            <button className="w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
              🎉 Add My Resignation Story
            </button>
            
            <button className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              📊 Export My Liberation Data
            </button>
            
            <button className="w-full md:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
              🔄 Reset Resignation Counter
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-900/30 border border-red-500/50 backdrop-blur-sm rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-red-400">
            <span className="material-icons mr-2">warning</span>
            Danger Zone
          </h2>
          
          <div className="space-y-4">
            <div className="text-sm text-red-300 mb-4">
              Warning: These actions cannot be undone and may affect your liberation journey.
            </div>
            
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
              🗑️ Delete All Data
            </button>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-6 text-center">
          <div className="text-2xl mb-2">💪</div>
          <div className="text-lg font-semibold mb-2">
            "The only way to do great work is to love what you do."
          </div>
          <div className="text-purple-300">
            - Steve Jobs (who also quit his job to start Apple)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;