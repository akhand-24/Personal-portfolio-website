import React,{useState ,useEffect} from 'react'
import { FiMenu,FiX } from 'react-icons/fi'
import { FaGithub,FaLinkedin } from 'react-icons/fa'


function Navbar() {

    const menuItems = [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "work", label: "Projects" },
      { id: "education", label: "Education" },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    const handleMenuItemClick = (sectionId) => {
      setActiveSection(sectionId);
      setIsOpen(false);

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-black/30 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center ">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Akhand</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Awasthi</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        <ul className="hidden md:flex text-gray-300 space-x-8">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec] " : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/akhand-24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/akhand-awasthi-b05b31293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-[#8245ec] text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer text-[#8245ec]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  className={`cursor-pointer hover:text-[#8245ec]${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                  key={item.id}
                >
                  <button onClick={handleMenuItemClick}>{item.label} </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar
