import Image from "next/image";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <p className="contactSection-name">Connect</p>
      <div className="connection-wrapper">
        <a href="https://www.linkedin.com/in/muftau/" target="_blank" rel="noopener noreferrer" className="connection-sites">
          <Image
            src={`/images/icons/down.png`}
            width={100}
            height={100}
            alt="down icon"
            className="contact-indicatorIcon"
          />
          Linkedin
        </a>
        <a href="https://x.com/muftau_dev" target="_blank" rel="noopener noreferrer" className="connection-sites">
          <Image
            src={`/images/icons/down.png`}
            width={100}
            height={100}
            alt="down icon"
            className="contact-indicatorIcon"
          />
          Twitter
        </a>
        <div className="conection-links">
          <p className="key">Email</p>
          <a href="mailto:muftau201@gmail.com" className="value">
            muftau201@gmail.com
          </a>
        </div>
        <a href="https://medium.com/@muftaudeenjimoh" target="_blank" rel="noopener noreferrer" className="connection-sites">
          <Image
            src={`/images/icons/down.png`}
            width={100}
            height={100}
            alt="down icon"
            className="contact-indicatorIcon"
          />
          Medium
        </a>
        <a href="https://github.com/Exclusiveideas" target="_blank" rel="noopener noreferrer" className="connection-sites">
          <Image
            src={`/images/icons/down.png`}
            width={100}
            height={100}
            alt="down icon"
            className="contact-indicatorIcon"
          />
          GitHub
        </a>
        <div className="conection-links">
          <p className="key">Phone</p>
          <a href="tel:+234 913 889 3875" className="value">
            +234 913 889 3875
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
