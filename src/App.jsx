import React, { useState } from 'react';
import { Terminal, User, Mail, Code, Folder, ChevronRight, Circle, Github, Linkedin, Twitter, GitBranch, Bug, Check, Wifi, Palette } from 'lucide-react';
import Home from './pages/Home';

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
    }
  };

  const theme = themes[currentTheme];

  const tabs = [
    { id: 'home', name: 'home.jsx', icon: <Code size={16} /> }
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