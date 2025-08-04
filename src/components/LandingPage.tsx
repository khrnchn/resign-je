import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDevelopers } from "../lib/hooks";

const LandingPage: React.FC = () => {
  const [resignationCount, setResignationCount] = useState(0);
  const { developers } = useDevelopers("");

  useEffect(() => {
    const totalResignations = developers.reduce((sum, dev) => sum + dev.resignation_count, 0);
    setResignationCount(totalResignations);
  }, [developers]);

  const successStories = [
    {
      name: "Ahmad Rizal",
      role: "Ex-Senior Dev at Genting Digital",
      quote: "Wah, best decision ever lah! Now I freelance from mamak, earning 3x more. Syok sendiri!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Siti Nurhaliza (not the singer)",
      role: "Former Tech Lead at Maybank",
      quote: "Boss always micromanage until I stress gila. After resign, I sleep better, family happy!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lim Wei Ming",
      role: "Ex-Full Stack Dev at AirAsia",
      quote: "Started my own kedai kopi with WiFi. Now all the developers come work here. Untung besar!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const resignationSigns = [
    "You dread Monday mornings like eating durian",
    "Boss micromanage until you rasa nak pengsan",
    "Work-life balance? What balance? Everyday OT sampai malam",
    "Office politics more drama than Astro Prima",
    "Gaji peanuts but workload like gajah",
    "No growth opportunities, stuck like LRT during peak hour",
    "Crunch time every day, weekend also kena work",
    "Your brilliant ideas kena ignore, but ang moh consultant same idea suddenly genius"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-yellow-400">
              🇲🇾 Resign Je
            </h1>
            <p className="text-lg text-purple-300">Malaysia's #1 Resignation Encouragement Platform</p>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-400 to-blue-400 bg-clip-text text-transparent">
            Sudah Fed Up Ke?
          </h2>
          <p className="text-xl md:text-2xl text-purple-300 mb-8 max-w-2xl mx-auto">
            Join <span className="text-yellow-400 font-bold">{resignationCount.toLocaleString()}</span> Malaysian developers who said "Cukup lah!" to toxic workplaces
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/should-i-resign"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold text-lg rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              🤔 Should I Resign Ah?
            </Link>
            <Link
              to="/hall-of-fame"
              className="px-8 py-4 bg-purple-700/50 backdrop-blur-sm border border-purple-400 text-white font-semibold text-lg rounded-full hover:bg-purple-600/50 transition-all duration-200"
            >
              🏆 Hall of Fame Developers
            </Link>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-400">{resignationCount}</div>
              <div className="text-purple-300">Total "Bye Boss!" Messages</div>
            </div>
            <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400">{developers.length}</div>
              <div className="text-purple-300">Developers Yang Dah Bebas</div>
            </div>
            <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-pink-400">∞</div>
              <div className="text-purple-300">Mamak Sessions Ahead</div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            🌟 Success Stories from Fellow Malaysians
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index} 
                className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transform transition-all duration-300 hover:shadow-xl hover:bg-purple-700/50 group"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-12 h-12 rounded-full mr-4 ring-2 ring-purple-400/50 group-hover:ring-yellow-400/50 transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-yellow-300 transition-colors">{story.name}</div>
                    <div className="text-sm text-purple-300">{story.role}</div>
                  </div>
                </div>
                <p className="text-purple-200 italic leading-relaxed">"{story.quote}"</p>
                <div className="mt-4 flex items-center text-xs text-purple-400">
                  <span className="material-icons text-sm mr-1">verified</span>
                  Verified Success Story
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signs You Should Quit */}
      <div className="py-16 px-4 bg-purple-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            🚨 Signs You Should Resign Je
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resignationSigns.map((sign, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-purple-800/50 backdrop-blur-sm rounded-xl hover:bg-purple-700/50 transition-all duration-300 hover:scale-102 hover:shadow-lg group"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'slideInLeft 0.5s ease-out forwards'
                }}
              >
                <span className="text-red-400 mr-3 group-hover:animate-bounce text-xl">⚠️</span>
                <span className="group-hover:text-white transition-colors">{sign}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-purple-300 mb-4">Sounds familiar ah? Time to lepak and think properly lah!</p>
            <Link
              to="/should-i-resign"
              className="inline-block px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-colors"
            >
              🔥 Should I Resign Or Not Ah?
            </Link>
          </div>
        </div>
      </div>

      {/* Resignation Toolkit */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            🛠️ Your Resignation Toolkit
          </h2>
          <p className="text-xl text-purple-300 mb-8">
            Everything you need to say "Bye boss!" properly
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://www.google.com/search?q=resignation+letter+template"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-purple-800/50 backdrop-blur-sm rounded-2xl hover:scale-105 transform transition-all duration-300 block group hover:shadow-xl hover:bg-purple-700/50"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s forwards' }}
            >
              <div className="text-3xl mb-3 group-hover:animate-bounce">📝</div>
              <div className="font-semibold group-hover:text-yellow-300 transition-colors">Resignation Letters</div>
              <div className="text-sm text-purple-300 group-hover:text-purple-200 transition-colors">Professional templates</div>
            </a>
            <a
              href="https://www.google.com/search?q=salary+negotiation+tips"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-purple-800/50 backdrop-blur-sm rounded-2xl hover:scale-105 transform transition-all duration-300 block group hover:shadow-xl hover:bg-purple-700/50"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards' }}
            >
              <div className="text-3xl mb-3 group-hover:animate-bounce">💰</div>
              <div className="font-semibold group-hover:text-yellow-300 transition-colors">Negotiation Guide</div>
              <div className="text-sm text-purple-300 group-hover:text-purple-200 transition-colors">Get what you deserve</div>
            </a>
            <a
              href="https://www.google.com/search?q=freelancing+for+developers"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-purple-800/50 backdrop-blur-sm rounded-2xl hover:scale-105 transform transition-all duration-300 block group hover:shadow-xl hover:bg-purple-700/50"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.3s forwards' }}
            >
              <div className="text-3xl mb-3 group-hover:animate-bounce">🚀</div>
              <div className="font-semibold group-hover:text-yellow-300 transition-colors">Freelance Guide</div>
              <div className="text-sm text-purple-300 group-hover:text-purple-200 transition-colors">Be your own boss</div>
            </a>
            <a
              href="https://www.google.com/search?q=developer+interview+preparation"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-purple-800/50 backdrop-blur-sm rounded-2xl hover:scale-105 transform transition-all duration-300 block group hover:shadow-xl hover:bg-purple-700/50"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.4s forwards' }}
            >
              <div className="text-3xl mb-3 group-hover:animate-bounce">🎯</div>
              <div className="font-semibold group-hover:text-yellow-300 transition-colors">Interview Prep</div>
              <div className="text-sm text-purple-300 group-hover:text-purple-200 transition-colors">Land your dream job</div>
            </a>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 px-4 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Your Freedom Menanti You
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Don't tahan anymore lah! Life too short to be miserable at work. Time to cari better opportunity!
          </p>
          <Link
            to="/should-i-resign"
            className="inline-block px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold text-xl rounded-full hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            🚀 Resign Je Lah!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;