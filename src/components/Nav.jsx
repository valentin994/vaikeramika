import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Nav() {
  const [darkMode, setDarkMode] = useState(false);
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

  return (
    <div className="flex justify-evenly dark:text-lightbg">
      <div className="felx p-8 m-4">
        <h1 className="text-4xl text-primary">VAI</h1>
      </div>
      <ul className="flex p-4 m-4">
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
      <div className="p-8 m-8">
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
    </div>
  );
}
export default Nav;
