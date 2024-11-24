import React from 'react'
import { Palette } from 'lucide-react';


const ThemeSelector = ({ setShowThemeMenu, setCurrentTheme, theme, showThemeMenu, themes , currentTheme}) => (
    <div className="relative">
        <button
            className={`flex items-center px-2 h-6 ${theme.menuHover}`}
            onClick={() => setShowThemeMenu(!showThemeMenu)}
        >
            <Palette size={14} className={`mr-1 ${theme.text}`} />
            <span className={`text-xs  ${theme.text}`}>Theme</span>
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


export default ThemeSelector