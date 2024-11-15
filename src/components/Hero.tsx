import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = '> const developer = "Vignesh Ramalingam";';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="terminal max-w-4xl w-full mx-auto">
        <div className="flex items-center gap-2 mb-4 text-gray-400">
          <Terminal className="w-5 h-5" />
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="font-mono">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">portfolio</span> = {"{"}
          </div>

          <div className="pl-8 space-y-2">
            <p className="typing-cursor">{text}</p>
            <p>
              <span className="text-purple-400">role:</span>{" "}
              <span className="text-yellow-300">"MERN Stack Developer"</span>,
            </p>
            <p>
              <span className="text-purple-400">status:</span>{" "}
              <span className="text-yellow-300">"Available for opportunities"</span>
            </p>
          </div>

          <div className="font-mono">{"}"}</div>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 px-6 py-2 rounded-md font-mono text-sm hover:bg-green-500/30 transition-colors"
            whileHover={{ x: 5 }}
          >
            <span className="text-gray-400">$</span> ./contact.sh <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}