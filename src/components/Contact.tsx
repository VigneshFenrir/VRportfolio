import React, { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Terminal } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs
      .send(
        "service_lrnz0fp", // Replace with your service ID
        "template_ett3qih", // Replace with your template ID
        formData,
        "qKqqnXEe1gpTEqm3B" // Replace with your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Please try again later.");
        }
      );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="terminal">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-green-400" />
            <p className="text-gray-400 font-mono">
              <span className="text-green-400">$</span> ./contact.sh
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex justify-center gap-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:vignesh2vicky@gmail.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/vignesh-ramaligam007/",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/VigneshFenrir",
                },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="font-mono text-sm">{item.label}</span>
                </motion.a>
              ))}
            </div>

            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto space-y-4"
            >
              <div className="space-y-2">
                <label className="block text-gray-400 font-mono text-sm">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded focus:outline-none focus:border-green-500 font-mono"
                  placeholder="_"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-400 font-mono text-sm">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded focus:outline-none focus:border-green-500 font-mono"
                  placeholder="_"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-400 font-mono text-sm">
                  Message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded focus:outline-none focus:border-green-500 font-mono"
                  placeholder="_"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 bg-green-500/20 border border-green-500/30 text-green-400 rounded font-mono hover:bg-green-500/30 transition-colors"
              >
                $ send_message.sh
              </motion.button>

              {status && (
                <p
                  className={`text-center mt-4 ${
                    status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
