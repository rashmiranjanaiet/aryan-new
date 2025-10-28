
import React from 'react';

const Header: React.FC = () => (
  <header className="text-center">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
      Skill-Based Job Finder
    </h1>
    <p className="mt-2 text-slate-400">
      Enter a technical skill to discover relevant job roles and their market demand.
    </p>
  </header>
);

export default Header;
