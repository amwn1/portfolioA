// src/components/Contact.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#000B58] w-full px-6 pt-0 pb-12 md:pb-20"
    >
      {/* Custom CSS for button hover effect (same as in Project.tsx) */}
      <style>{`
        .custom-button {
          position: relative;
          overflow: hidden;
          transition: transform 300ms ease, color 300ms ease, border-color 300ms ease;
          --slide-duration: 0ms;
          font-family: "kalnia", serif !important;
        }
        .custom-button:hover {
          --slide-duration: 300ms;
        }
        .custom-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: white;
          z-index: -1;
          transition: transform var(--slide-duration) ease-in;
        }
        .custom-button-left::before {
          transform: translateX(-100%);
        }
        .custom-button-right::before {
          transform: translateX(100%);
        }
        .custom-button:hover::before {
          transform: translateX(0);
        }
        .custom-button:hover {
          color: black !important;
          background-color: white !important;
          border: 2px solid black !important;
          transform: scale(1.05);
        }
      `}</style>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* ── Left column: title + contact info ── */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="mt-24 mr-8 mb-3 -ml-3 font-kalnia text-[3.375rem] uppercase leading-tight text-white">
            Get in touch with me
          </h2>

          <div className="mt-24 flex flex-col space-y-4 font-kadwa text-white text-[1.125rem]">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aman33malik@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                aman33malik@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
              <span>+91 9150434145</span>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              <a
                href="https://www.linkedin.com/in/aman-malik-871941178/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Aman Malik
              </a>
            </div>
          </div>
        </div>

        {/* ── Right column: form ── */}
        <div className="md:w-1/2 w-full">
          <form className="bg-white p-8 shadow-md text-black flex flex-col space-y-8">
            <h3 className="font-kalnia text-2xl">Contact form</h3>

            {/* Name input with placeholder and Kalnia font */}
            <div>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="font-kalnia w-full border-b border-gray-400 focus:outline-none py-2"
                onFocus={e => (e.currentTarget.placeholder = '')}
                onBlur={e => (e.currentTarget.placeholder = 'Name')}
              />
            </div>

            {/* Email input with placeholder and Kalnia font */}
            <div>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="font-kalnia w-full border-b border-gray-400 focus:outline-none py-2"
                onFocus={e => (e.currentTarget.placeholder = '')}
                onBlur={e => (e.currentTarget.placeholder = 'Email')}
              />
            </div>

            {/* Message textarea with Kalnia label */}
            <div className="flex flex-col space-y-4">
              <label htmlFor="message" className="block font-kalnia font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-400 focus:outline-none p-2 font-kalnia"
              />
            </div>

            <button
              type="submit"
              className="self-start font-kalnia bg-[#000B58] text-white px-6 py-2 border-2 border-[#000B58] custom-button custom-button-left"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
