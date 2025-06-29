import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto rounded-lg shadow-lg">
      {/* Left side - Contact Form */}
      <motion.form
        className="flex-1 max-w-md w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-md"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Name</span>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Email</span>
          <input
            type="email"
            placeholder="Your Email"
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700 dark:text-gray-300">Message</span>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-semibold py-2 rounded-md hover:bg-pink-600 transition-colors"
        >
          Send Message
        </button>
      </motion.form>

      {/* Right side - Contact Information */}
      <motion.div
        className="flex-1 max-w-md w-full bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Contact Information
        </h2>

        <div className="space-y-5 text-gray-700 dark:text-gray-300 text-lg">
          <div>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              your.email@example.com
            </a>
          </div>

          <div>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+1234567890"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              +1 234 567 890
            </a>
          </div>

          <div>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:underline"
            >
              +1 234 567 890
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
