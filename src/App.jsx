import React, { useState } from 'react';
import { Terminal, User, Mail, Code, Folder, ChevronRight, Circle, Github, Linkedin, Twitter, GitBranch, Bug, Check, Wifi, Palette } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Contact from './pages/Contact';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentTheme, setCurrentTheme] = useState('dracula');
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const themes = {
    dracula: {
      name: 'Dracula',
      bg: 'bg-[#282a36]',
      sidebar: 'bg-[#21222c]',
      explorer: 'bg-[#21222c]',
      accent: 'border-[#ff79c6]',
      statusBar: 'bg-[#191a21]',
      statusBarHover: 'bg-[#2d2f3b]',
      text: 'text-[#f8f8f2]',
      activeText: 'text-[#f8f8f2]',
      secondaryText: 'text-[#6272a4]',
      border: 'border-[#191a21]',
      tabActive: 'bg-[#282a36]',
      tabInactive: 'text-[#6272a4]',
      tabBg: 'bg-[#191a21]',
      highlightText: 'text-[#ff79c6]',
      menuBg: 'bg-[#21222c]',
      menuHover: 'hover:bg-[#2d2f3b]'
    },
    atomOneDark: {
      name: 'Atom One Dark',
      bg: 'bg-[#282c34]',
      sidebar: 'bg-[#21252b]',
      explorer: 'bg-[#21252b]',
      accent: 'border-[#528bff]',
      statusBar: 'bg-[#1d1f23]',
      statusBarHover: 'bg-[#2c313a]',
      text: 'text-[#abb2bf]',
      activeText: 'text-[#d7dae0]',
      secondaryText: 'text-[#6b717d]',
      border: 'border-[#181a1f]',
      tabActive: 'bg-[#282c34]',
      tabInactive: 'text-[#6b717d]',
      tabBg: 'bg-[#1d1f23]',
      highlightText: 'text-[#528bff]',
      menuBg: 'bg-[#21252b]',
      menuHover: 'hover:bg-[#2c313a]'
    },
    tokyoNight: {
      name: 'Tokyo Night',
      bg: 'bg-[#1a1b26]',
      sidebar: 'bg-[#16161e]',
      explorer: 'bg-[#16161e]',
      accent: 'border-[#7aa2f7]',
      statusBar: 'bg-[#15161e]',
      statusBarHover: 'bg-[#1c1d2c]',
      text: 'text-[#a9b1d6]',
      activeText: 'text-[#c0caf5]',
      secondaryText: 'text-[#565f89]',
      border: 'border-[#101014]',
      tabActive: 'bg-[#1a1b26]',
      tabInactive: 'text-[#565f89]',
      tabBg: 'bg-[#15161e]',
      highlightText: 'text-[#7aa2f7]',
      menuBg: 'bg-[#16161e]',
      menuHover: 'hover:bg-[#1c1d2c]'
    },
    githubDark: {
      name: 'GitHub Dark',
      bg: 'bg-[#0d1117]',
      sidebar: 'bg-[#090c10]',
      explorer: 'bg-[#090c10]',
      accent: 'border-[#58a6ff]',
      statusBar: 'bg-[#090c10]',
      statusBarHover: 'bg-[#1f2428]',
      text: 'text-[#c9d1d9]',
      activeText: 'text-[#ffffff]',
      secondaryText: 'text-[#8b949e]',
      border: 'border-[#30363d]',
      tabActive: 'bg-[#0d1117]',
      tabInactive: 'text-[#8b949e]',
      tabBg: 'bg-[#090c10]',
      highlightText: 'text-[#58a6ff]',
      menuBg: 'bg-[#090c10]',
      menuHover: 'hover:bg-[#1f2428]'
    },
    moonlight: {
      name: 'Moonlight',
      bg: 'bg-[#1e2030]',
      sidebar: 'bg-[#191a2a]',
      explorer: 'bg-[#191a2a]',
      accent: 'border-[#82aaff]',
      statusBar: 'bg-[#171722]',
      statusBarHover: 'bg-[#2f334d]',
      text: 'text-[#c8d3f5]',
      activeText: 'text-[#ffffff]',
      secondaryText: 'text-[#7a88cf]',
      border: 'border-[#171722]',
      tabActive: 'bg-[#1e2030]',
      tabInactive: 'text-[#7a88cf]',
      tabBg: 'bg-[#171722]',
      highlightText: 'text-[#82aaff]',
      menuBg: 'bg-[#191a2a]',
      menuHover: 'hover:bg-[#2f334d]'
    }
  };

  const theme = themes[currentTheme];

  const tabs = [
    { id: 'home', name: 'home.jsx', icon: <Code size={16} /> },
    { id: 'about', name: 'about.jsx', icon: <User size={16} /> },
    { id: 'contact', name: 'contact.jsx', icon: <Mail size={16} /> }
  ];

  const ThemeSelector = () => (
    <div className="relative">
      <button
        className={`flex items-center px-2 h-6 ${theme.menuHover}`}
        onClick={() => setShowThemeMenu(!showThemeMenu)}
      >
        <Palette size={14} className="mr-1" />
        <span className="text-xs">Theme</span>
      </button>

      {showThemeMenu && (
        <div className={`absolute bottom-6 left-0 w-48 ${theme.menuBg} rounded-md shadow-lg border ${theme.border} z-50`}>
          {Object.entries(themes).map(([themeId, themeData]) => (
            <button
              key={themeId}
              className={`w-full px-4 py-2 text-left text-sm ${theme.menuHover} ${currentTheme === themeId ? theme.highlightText : theme.text
                }`}
              onClick={() => {
                setCurrentTheme(themeId);
                setShowThemeMenu(false);
              }}
            >
              {themeData.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home theme={theme} />
        );
      case 'about':
        return (
          <About theme={theme} />
        );
      case 'contact':
        return (
          <Contact theme={theme} />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`h-screen flex flex-col ${theme.bg}`}>
      {/* VS Code Header */}
      <div className={`${theme.bg} p-2 flex items-center justify-between border-b ${theme.border}`}>
        <div className="flex items-center space-x-2">
          <Circle size={16} className="text-red-500" />
          <Circle size={16} className="text-yellow-500" />
          <Circle size={16} className="text-green-500" />
        </div>
        <div className={theme.secondaryText}>Portfolio - Visual Studio Code</div>
        <div className="w-16"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`w-12 ${theme.sidebar} border-r ${theme.border} flex flex-col items-center py-4 space-y-4`}>
          {[Folder, Terminal, User].map((Icon, index) => (
            <div key={index} className={`p-2 rounded-md cursor-pointer ${theme.menuHover}`}>
              <Icon className={theme.secondaryText} size={24} />
            </div>
          ))}
        </div>

        {/* File Explorer */}
        <div className={`w-64 ${theme.explorer} border-r ${theme.border}`}>
          <div className={`p-2 ${theme.secondaryText} text-sm`}>
            <div className="flex items-center">
              <ChevronRight size={16} />
              <span>EXPLORER</span>
            </div>
          </div>
          <div className="p-2">
            <div className={`flex items-center ${theme.secondaryText} text-sm mb-2`}>
              <ChevronRight size={16} />
              <span>PORTFOLIO</span>
            </div>
            {tabs.map(tab => (
              <div
                key={tab.id}
                className={`flex items-center p-1 text-sm cursor-pointer rounded-md ${activeTab === tab.id
                  ? `${theme.tabActive} ${theme.activeText} ${theme.menuHover}`
                  : `${theme.tabInactive} ${theme.menuHover}`
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span className="ml-2">{tab.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Editor Area */}
        <div className={`flex-1 flex flex-col ${theme.bg}`}>
          {/* Tabs */}
          <div className={`flex ${theme.tabBg}`}>
            {tabs.map(tab => (
              <div
                key={tab.id}
                className={`px-4 py-2 flex items-center space-x-2 cursor-pointer border-t-2 ${activeTab === tab.id
                  ? `${theme.tabActive} ${theme.activeText} ${theme.accent}`
                  : `${theme.tabInactive} border-transparent`
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span className="text-sm">{tab.name}</span>
              </div>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`h-6 ${theme.statusBar} flex items-center justify-between`}>
        <div className="flex items-center h-full">
          <div className={`flex items-center px-2 h-full ${theme.menuHover}`}>
            <GitBranch size={14} className="mr-1" />
            <span className={`text-xs ${theme.text}`}>main</span>
          </div>
          <div className={`flex items-center px-2 h-full ${theme.menuHover}`}>
            <Bug size={14} className="mr-1" />
            <span className={`text-xs ${theme.text}`}>0</span>
          </div>
        </div>

        <div className="flex items-center h-full">
          <ThemeSelector />
          <div className="flex h-full">
            {[Github, Linkedin, Twitter].map((Icon, index) => (
              <a key={index} className={`flex items-center px-2 h-full ${theme.menuHover}`}>
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;