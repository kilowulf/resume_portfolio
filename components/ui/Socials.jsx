//imports
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// social links
const socials = [
  { icon: <FaGithub />, path: "https://github.com/kilowulf" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/aaron-brown-5481b5a9/"
  }
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
