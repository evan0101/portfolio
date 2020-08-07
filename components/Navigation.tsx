import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  /**
   * Scrolls to an element on the page
   * @param {String} target The ID of the element to scroll to
   */
  const scrollToSection = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    } else if (window) {
      window.scrollTo(0, 0);
    }
  };
  return (
    <nav>
      <div className="container">
        <div className="nav-sections-container">
          <div className="menu">
            <div className="menu-container">
              <div className="flex">
                <a onClick={() => scrollToSection("about")}>About me</a>
                <a onClick={() => scrollToSection("experience")}>Experience</a>
                <a onClick={() => scrollToSection("work")}>My work</a>
              </div>
            </div>
          </div>
          <div className="mobile-menu-button">
            {/* <!-- Mobile menu button --> */}
            <div
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              {mobileMenuOpen ? (
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={(mobileMenuOpen ? " " : "hidden") + " mobile-menu"}>
        <div className="container">
          <div className="mobile-menu-container">
            <a href="#">About me</a>
            <a href="#">Experience</a>
            <a href="#">My work</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
