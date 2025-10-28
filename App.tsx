import React, { useState } from 'react';
import { findJobsForSkillLocally } from './services/localJobService';
import type { JobInfo } from './types';
import Header from './components/Header';
import SkillInput from './components/SkillInput';
import JobCard from './components/JobCard';
import LoadingSpinner from './components/LoadingSpinner';
import WelcomeMessage from './components/WelcomeMessage';

const App: React.FC = () => {
  const [skill, setSkill] = useState<string>('');
  const [jobResults, setJobResults] = useState<JobInfo[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchedSkill, setSearchedSkill] = useState<string>('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!skill.trim()) {
      return;
    }
    
    setSearchedSkill(skill);
    setIsLoading(true);
    setJobResults(null);

    // Simulate a network call for better UX
    setTimeout(() => {
        const results = findJobsForSkillLocally(skill);
        setJobResults(results);
        setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col items-center p-4 sm:p-6">
      <div className="w-full max-w-2xl mx-auto">
        <Header />
        <main className="mt-8">
          <SkillInput
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />

          <div className="mt-8 min-h-[300px]">
            {isLoading && <LoadingSpinner />}
            {!isLoading && jobResults === null && <WelcomeMessage />}
            {jobResults && jobResults.length > 0 && (
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold text-center text-cyan-400">
                    Jobs requiring '{searchedSkill}'
                 </h2>
                {jobResults.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            )}
            {jobResults && jobResults.length === 0 && (
                 <div className="text-center text-slate-400 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                    <p>No jobs found for '{searchedSkill}' in our local database. Please try another skill from the list.</p>
                 </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;