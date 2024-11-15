import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML/CSS', level: 90, color: 'from-orange-400 to-red-500' },
  { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
  { name: 'TypeScript', level: 80, color: 'from-blue-400 to-blue-600' },
  { name: 'React', level: 85, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Node.js', level: 80, color: 'from-green-400 to-green-600' },
  { name: 'MongoDB', level: 75, color: 'from-green-500 to-emerald-600' },
  { name: 'Express.js', level: 80, color: 'from-gray-400 to-gray-600' },
  { name: 'Tailwind CSS', level: 85, color: 'from-teal-400 to-teal-600' },
  { name: 'Bootstrap', level: 80, color: 'from-purple-400 to-purple-600' },
  { name: 'Git', level: 75, color: 'from-orange-500 to-red-600' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="terminal">
          <p className="text-gray-400 mb-6">
            <span className="text-green-400">$</span> ./view-skills.sh
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-mono">{skill.name}</span>
                  <span className="text-green-400 font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}