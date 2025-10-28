import type { JobInfo } from './types';

interface SkillRecord {
    skill: string;
    jobs: string;
    demand: string;
}

export const SKILL_DATA: SkillRecord[] = [
    { skill: 'Data Structures', jobs: 'Software Developer, Backend Developer, Competitive Programmer, SDE (Amazon, Google, etc.), AI Engineer', demand: '🔥 95%' },
    { skill: 'Algorithms', jobs: 'Software Engineer, Machine Learning Engineer, Competitive Programmer, Game Developer, Research Engineer', demand: '🔥 90%' },
    { skill: 'Object-Oriented Programming (OOP)', jobs: 'Software Developer, Backend Developer, Android Developer, Game Developer, QA Automation', demand: '💪 88%' },
    { skill: 'Database Management Systems (DBMS)', jobs: 'Full Stack Developer, Backend Engineer, Data Engineer, Web Developer, Data Analyst', demand: '💾 85%' },
    { skill: 'Operating Systems (OS)', jobs: 'System Software Engineer, DevOps Engineer, Kernel Developer, Cybersecurity Engineer, SRE', demand: '⚙️ 80%' },
    { skill: 'Computer Networks', jobs: 'Network Engineer, Cloud Engineer, Cybersecurity Engineer, DevOps Engineer, SRE', demand: '🌐 78%' },
    { skill: 'Compiler Design', jobs: 'Compiler Developer, Programming Language Engineer, Embedded Systems Engineer, Researcher', demand: '🧩 40%' },
    { skill: 'Software Engineering Principles', jobs: 'Software Developer, QA Engineer, Project Manager, DevOps, Product Engineer', demand: '🧭 95%' },
    { skill: 'Design & Analysis of Algorithms (DAA)', jobs: 'Research Engineer, Competitive Programmer, System Architect, AI/ML Developer', demand: '🧮 85%' },
    { skill: 'Distributed Systems', jobs: 'Cloud Architect, Backend Developer, System Design Engineer, DevOps Engineer', demand: '☁️ 82%' }
];
