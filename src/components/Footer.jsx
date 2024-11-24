import React from 'react'
import { Github, Linkedin, Twitter, GitBranch, Bug } from 'lucide-react';
import ThemeSelector from './ThemeSelector';


function Footer({ theme, setShowThemeMenu, setCurrentTheme, themes, currentTheme }) {
  return (
    <>
      <div className={`h-6 ${theme.statusBar} flex items-center justify-between`}>
        <div className="flex items-center h-full">
          <div className={`flex items-center px-2 h-full ${theme.menuHover}`}>
            <GitBranch size={14} className={`mr-1 ${theme.text}`} />
            <span className={`text-xs ${theme.text}`}>main</span>
          </div>
          <div className={`flex items-center px-2 h-full ${theme.menuHover}`}>
            <Bug size={14} className={`mr-1 ${theme.text}`} />
            <span className={`text-xs ${theme.text}`}>0</span>
          </div>
        </div>

        <div className="flex items-center h-full">
          <ThemeSelector theme={theme} setShowThemeMenu={setShowThemeMenu} setCurrentTheme={setCurrentTheme} themes={themes} currentTheme={currentTheme} />
          <div className="flex h-full">
            {[Github, Linkedin, Twitter].map((Icon, index) => (
              <a key={index} className={`flex items-center px-2 h-full ${theme.menuHover}`}>
                <Icon size={14} className={`mr-1 ${theme.text}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer