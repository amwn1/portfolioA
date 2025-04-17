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
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* ── Left column: contact info + heading ── */}
        <div className="flex flex-col space-y-12 md:w-1/2">

          {/* Contact info (added top margin mt-8) */}
          <div className="mt-24 flex flex-col space-y-4 font-kadwa text-white text-l">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              <span>aman33malik@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
              <span>+91 9150434145</span>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              <span>linkedin.com/in/aman33</span>
            </div>
          </div>

   
          <h2 className="  font-kalnia text-4xl uppercase leading-tight text-white">
            " Get in touch with me "
          </h2>
        </div>

        {/* ── Right column: form ── */}
        <div className="md:w-1/2 w-full">
          <form className="bg-white p-8 shadow-md text-black flex flex-col space-y-6">
            <h3 className="font-kalnia text-2xl">Contact form</h3>

            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border-b border-gray-400 focus:outline-none py-2"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-b border-gray-400 focus:outline-none py-2"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="block font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-400 focus:outline-none p-2"
              />
            </div>

            <button
              type="submit"
              className="self-start bg-[#000B58] text-white px-6 py-2"
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
