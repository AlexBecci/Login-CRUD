import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="text-zinc-100 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-100 hover:text-white">
          <span className="ml-3 text-xl">WebNotes</span>
        </a>
        <p className="text-sm text-gray-300  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 —
          <a
            href="hhttps://github.com/AlexBecci"
            className="text-gray-300 hover:text-white hover:scale-105 duration-200 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Becci Alex
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            target="_blank"
            href="hhttps://github.com/AlexBecci"
            className="text-gray-300 hover:text-white hover:scale-105 duration-300 cursor-pointer"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="mailto:beccialex2002@gmail.com"
            className="ml-3 text-gray-300 hover:text-white hover:scale-105 duration-300 cursor-pointer"
          >
            <FiMail size={20} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/becci.ale/"
            className="ml-3 text-gray-300 hover:text-white hover:scale-105 duration-300 cursor-pointer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alex-becci-82551a22b/"
            className="ml-3 text-gray-300 hover:text-white hover:scale-105 duration-300 cursor-pointer"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
