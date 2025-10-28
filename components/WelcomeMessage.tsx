
import React from 'react';

const WelcomeMessage: React.FC = () => {
    const skills = [
        'Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'
    ];

    return (
        <div className="text-center p-6 border-2 border-dashed border-slate-700 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-300">Welcome!</h2>
            <p className="mt-2 text-slate-400">
                Ready to explore career paths? Just type a skill into the search bar above and hit "Find Jobs".
            </p>
            <div className="mt-6">
                <h3 className="text-slate-400 font-semibold mb-3">Try one of these:</h3>
                <div className="flex flex-wrap justify-center gap-2">
                    {skills.map(skill => (
                        <span key={skill} className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WelcomeMessage;
