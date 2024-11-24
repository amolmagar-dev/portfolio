import React from 'react';
import { User, ChevronRight } from 'lucide-react';

const About = ({ theme }) => (
  <div className="p-6">
    <h2 className={`text-2xl font-bold mb-4 ${theme.activeText}`}>About Me</h2>

    <div className={`mb-8 ${theme.text}`}>
      <h3 className={`text-xl font-semibold mb-3 ${theme.highlightText}`}>Work Experience</h3>

      <div className="mb-6">
        <h4 className="font-medium">SMART SHIP HUB DIGITAL INDIA PVT - (SDE2)</h4>
        <p className="text-sm opacity-80">May 2022 - Present</p>
        <ul className="mt-2 space-y-2">
          <li className="flex items-center">
            <ChevronRight size={16} className={theme.highlightText} />
            <span>Developed vessel voyage management platform</span>
          </li>
          <li className="flex items-center">
            <ChevronRight size={16} className={theme.highlightText} />
            <span>Created online vessel audit system</span>
          </li>
          <li className="flex items-center">
            <ChevronRight size={16} className={theme.highlightText} />
            <span>Built document management system with offline sync</span>
          </li>
          <li className="flex items-center">
            <ChevronRight size={16} className={theme.highlightText} />
            <span>Implemented CII monitoring and Advanced Pattern Recognition</span>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-medium">DIGLILEARNING TECH PRIVATE LIMITED - (Internship)</h4>
        <p className="text-sm opacity-80">Nov 2021 - Apr 2022</p>
        <ul className="mt-2 space-y-2">
          <li className="flex items-center">
            <ChevronRight size={16} className={theme.highlightText} />
            <span>Collaborated on React projects with responsive interfaces</span>
          </li>
          <li className="flex items-center">
            <ChevronRight size={16} className={theme.highlightText} />
            <span>Implemented Redux Toolkit for state management</span>
          </li>
          <li className="flex items-center">
            <ChevronRight size={16} className={theme.highlightText} />
            <span>Integrated Material UI components</span>
          </li>
        </ul>
      </div>
    </div>

    <div className={`mb-8 ${theme.text}`}>
      <h3 className={`text-xl font-semibold mb-3 ${theme.highlightText}`}>Education</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">Master of Computer Application</h4>
          <p className="text-sm opacity-80">Chandigarh University, Punjab • May 2023 - May 2025</p>
        </div>
        <div>
          <h4 className="font-medium">Bachelor of Computer Applications</h4>
          <p className="text-sm opacity-80">BAMU University, Aurangabad • Aug 2018 - Aug 2021</p>
        </div>
      </div>
    </div>

    <div className={`${theme.text}`}>
      <h3 className={`text-xl font-semibold mb-3 ${theme.highlightText}`}>Technical Skills</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium mb-2">Frontend</h4>
          <ul className="space-y-1">
            <li className="flex items-center">
              <ChevronRight size={16} className={theme.highlightText} />
              React & Redux Toolkit
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} className={theme.highlightText} />
              Material UI
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} className={theme.highlightText} />
              Responsive Design
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Backend</h4>
          <ul className="space-y-1">
            <li className="flex items-center">
              <ChevronRight size={16} className={theme.highlightText} />
              Node.js & Express
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} className={theme.highlightText} />
              PostgreSQL & MongoDB
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} className={theme.highlightText} />
              RESTful APIs
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;