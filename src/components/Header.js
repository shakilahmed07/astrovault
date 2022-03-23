import uniCrypt from "../assets/web-logo.png";
import Etherium from "../assets/etherium.png";
import { MdLocalFireDepartment } from "react-icons/md";
import { RiUserShared2Line } from "react-icons/ri";
import { BiSun } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#1E2023] md:h-[75px] h-[65px] grid md:grid-cols-[250px_1fr_300px] grid-cols-3 md:items-center md:justify-center px-4 top-0 sticky z-[99]">
      {/* logo */}
      <div className="cursor-pointer hidden md:inline">
        <img src={uniCrypt} alt="" width={"80px"} />
      </div>
      {/* menu items */}
      <div className="flex items-center text-[14px] text-white space-x-4">
        <div className="md:flex items-center bg-[#454649] px-[16px] py-2 rounded-full hidden">
          <MdLocalFireDepartment />
          <Link to="/">
          <p className="ml-2 cursor-pointer">DASHBOARD</p>
          </Link>
          
        </div>
        <div className="hover:bg-[#454649] px-[16px] py-2 rounded-full cursor-pointer hidden md:inline">
          <Link to="/browser">
          <p>BROWSER</p>
          </Link>
          
        </div>
        <Link to="/services">
        <p className="hover:bg-[#454649] px-[16px] py-2 rounded-full cursor-pointer hidden md:inline">
          SERVICES
        </p>
        </Link>
        
        <div className="hover:bg-[#454649] px-[16px] py-2 rounded-full cursor-pointer hidden md:inline">
          {/* icon */}
          <Link to="/farms">
          <p>FARMS</p>
          </Link>
        </div>
       
        
        <p className="hover:bg-[#454649] px-[16px] py-2 rounded-full cursor-pointer hidden md:inline">DOCS</p>
        <div className="py-2 rounded-full cursor-pointer flex">
          <GiHamburgerMenu className="h-6 w-6 md:hidden" />
          <FaTelegramPlane className="h-6 w-6 ml-5" />
        </div>
      </div>
      {/* connect wallet */}
      <div className="flex items-center md:justify-center text-white">
        <div className="bg-[#454649] flex items-center md:px-[16px] px-[25px] py-2 rounded-full md:h-[36px] md:min-w-[60px] cursor-pointer">
          <img src={Etherium} alt="" className="w-5 h-5" />
          <p className="mx-2 pr-2">Connect</p>
        </div>
        <div className="ml-4 hover:bg-[#454649] p-[10px] rounded-full cursor-pointer">
          <RiUserShared2Line />
        </div>
        <div className="ml-4 hover:bg-[#454649] p-[10px] rounded-full cursor-pointer">
          <BiSun />
        </div>
      </div>
    </header>
  );
};

export default Header;
