
import React from 'react';
import type { JobInfo } from '../types';

interface JobCardProps {
  job: JobInfo;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 transform hover:scale-105 hover:border-cyan-500 transition-all duration-300 shadow-lg">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="flex-1 mb-3 sm:mb-0">
        <h3 className="text-lg font-semibold text-slate-200">{job.jobTitle}</h3>
      </div>
      <div className="flex-shrink-0 bg-cyan-900/50 text-cyan-300 text-sm font-bold px-4 py-2 rounded-full">
        <p>Demand: {job.demand}</p>
      </div>
    </div>
  </div>
);

export default JobCard;
