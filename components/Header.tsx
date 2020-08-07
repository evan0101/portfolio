import Pillars from "./Pillars";
import Block from "components/Block";

const Header = () => {
  return (
    <div className="header">
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />

      <div className="container">
        <div className="header-container">
          <div className="heading-text">
            <h1>👋</h1>
            <h1>Hey there, my name is Evan. I develop and design things.</h1>
            <h3>Full Stack Web Developer</h3>
            <div id="contact">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div id="contact-text">
                Contact me <a href="mailto:evanm@gmail.com">evanm@gmail.com</a>
              </div>
            </div>
          </div>
          <Pillars />
        </div>
      </div>
    </div>
  );
};
export default Header;
