import logo from "../assets/react.svg";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex  flex-col justify-center mt-20 gap-7  items-center px-6  bg-black p-10">
      <div className="flex gap-4">
        <img src={logo} alt="logo" />
        <FiInstagram size={30} />
        <FaXTwitter size={30} />
        <MdOutlineMailOutline size={30} />
      </div>
      <p>©{year}. Judah and Nigel</p>
    </div>
  );
}

export default Footer;
