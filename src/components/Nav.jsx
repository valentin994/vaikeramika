import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Nav() {
  const [darkMode, setDarkMode] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleNavbar = () => {
    setNavbarOpen((prevMode) => !prevMode);
    console.log(navbarOpen);
  };
  return (
    <div className="flex justify-between md:justify-evenly dark:text-lightbg">
      <div className="flex p-2 m-2 md:p-8 md:m-4">
        <h1 className="text-4xl text-primary">VAI</h1>
      </div>
      <ul className="hidden w-full md:flex md:w-auto p-4 m-4">
        <li className="p-4 m-4">
          <Link to="/" className="text-xl hover:text-primary">
            Početna
          </Link>
        </li>
        <li className="p-4 m-4">
          <Link to="/" className="text-xl hover:text-primary">
            Galerija
          </Link>
        </li>
        <li className="p-4 m-4">
          <Link to="/" className="text-xl hover:text-primary">
            Kontakt
          </Link>
        </li>
        <li className="p-4 m-4">
          <Link to="/" className="text-xl hover:text-primary">
            O nama
          </Link>
        </li>
      </ul>

      <div className="hidden md:block md:p-8 md:m-8">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onClick={toggleDarkMode}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        </label>
      </div>

      <div
        className="flex md:hidden w-full items-center justify-end"
        onClick={toggleNavbar}
      >
        <div className="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl p-2">
          <div className="space-y-2">
            <span
              className={`block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out ${
                navbarOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block h-1 origin-center rounded-full bg-orange-500 transition-transform ease-in-out ${
                navbarOpen ? "w-10 -translate-y-1.5 -rotate-45" : "w-8"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav;
