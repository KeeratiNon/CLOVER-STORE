import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center w-[80%]">
      <footer className="flex flex-col md:flex-row items-center justify-between h-[225px] w-full px-6 max-w-[1280px]">
        <section className="flex flex-col items-center md:items-start gap-2">
          <h2>Design & Deploy By</h2>
          <p className="flex items-center gap-2">
            Popimi :{" "}
            <a
              href="https://github.com/Popimi"
              className="text-blue-500 badge badge-outline"
              target="_blank"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/prathak-t-374389209/"
              className="text-blue-500 badge badge-outline"
              target="_blank"
            >
              linkedin
            </a>
          </p>
          <p className="flex items-center gap-2">
            KeeratiNon :{" "}
            <a
              href="https://github.com/KeeratiNon"
              className="text-blue-500 badge badge-outline"
              target="_blank"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/keeratinon/"
              className="text-blue-500 badge badge-outline"
              target="_blank"
            >
              linkedin
            </a>
          </p>
        </section>
        <div className="p-4">
          <div className="text-2xl">
            <span className="text-green-400">C</span>LOVER
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
