import { SKILL_DATA } from '../constants';
import type { JobInfo } from '../types';

export const findJobsForSkillLocally = (skill: string): JobInfo[] => {
  const normalizedSkill = skill.trim().toLowerCase();

  const foundSkill = SKILL_DATA.find(
    (record) => record.skill.toLowerCase() === normalizedSkill
  );

  if (!foundSkill) {
    return [];
  }

  const jobTitles = foundSkill.jobs.split(',').map((job) => job.trim());

  return jobTitles.map((jobTitle) => ({
    jobTitle: jobTitle,
    demand: foundSkill.demand,
  }));
};
