
import React from 'react';

interface SkillInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const SkillInput: React.FC<SkillInputProps> = ({ value, onChange, onSubmit, isLoading }) => (
  <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="e.g., Data Structures, OOP, DevOps..."
      className="flex-grow bg-slate-800 border border-slate-600 text-white placeholder-slate-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow duration-200"
      disabled={isLoading}
    />
    <button
      type="submit"
      disabled={isLoading}
      className="bg-cyan-600 text-white font-bold rounded-lg px-6 py-3 flex items-center justify-center hover:bg-cyan-500 disabled:bg-slate-700 disabled:cursor-not-allowed transition-colors duration-200"
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Searching...
        </>
      ) : (
        'Find Jobs'
      )}
    </button>
  </form>
);

export default SkillInput;
