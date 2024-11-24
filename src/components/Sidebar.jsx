import React from 'react';
import { Folder, Terminal, User } from 'lucide-react';

const Sidebar = ({ theme }) => (
  <div className={`w-12 ${theme.sidebar} border-r ${theme.border} flex flex-col items-center py-4 space-y-4`}>
    {[Folder, Terminal, User].map((Icon, index) => (
      <div key={index} className={`p-2 rounded-md cursor-pointer ${theme.menuHover}`}>
        <Icon className={theme.secondaryText} size={24} />
      </div>
    ))}
  </div>
);

export default Sidebar;