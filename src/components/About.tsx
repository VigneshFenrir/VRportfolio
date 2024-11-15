import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="terminal"
        >
          <div className="mb-6">
            <span className="text-blue-400">class</span>{" "}
            <span className="text-yellow-300">Developer</span> {"{"}
          </div>

          <div className="pl-8 space-y-6">
            <div>
              <span className="text-purple-400">constructor</span>() {"{"}
              <div className="pl-8 text-gray-300">
                <p>this.name = "Vignesh Ramalingam";</p>
                <p>this.company = "Maatson Maritime";</p>
                <p>this.role = "MERN Stack Developer";</p>
              </div>
              {"}"}
            </div>

            <div>
              <span className="text-purple-400">getExpertise</span>() {"{"}
              <div className="pl-8 grid grid-cols-2 gap-4 my-4">
                {[
                  { icon: Code2, text: "Frontend Dev" },
                  { icon: Server, text: "Backend Systems" },
                  { icon: Database, text: "Database Design" },
                  { icon: Globe, text: "DevOps" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 p-3 rounded border border-gray-700 flex items-center gap-3"
                  >
                    <item.icon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              {"}"}
            </div>
          </div>

          <div>{"}"}</div>
        </motion.div>
      </div>
    </section>
  );
}
