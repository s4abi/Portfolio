import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Let’s Work Together
            </h3>

            <p className="text-gray-400">
              I’m open to internships, collaborations, and freelance
              opportunities. Feel free to reach out!
            </p>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-xl" />
              <span>sahibthakur31@gmail.com</span>
            </div>

            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/s4abi"
                className="text-2xl hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkdin.com/sahib_thakur/4098"
                className="text-2xl hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <form className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg">

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-md font-medium transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
