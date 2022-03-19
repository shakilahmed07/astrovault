import uniCrypt from "../assets/Unicrypt_Logo_Horizontal_For_Dark_BG.png";
import Etherium from "../assets/etherium.png";
import { MdLocalFireDepartment } from "react-icons/md";
import { RiUserShared2Line } from "react-icons/ri";
import { BiSun } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#1E2023] h-[80px] grid grid-cols-[250px_1fr_300px] items-center justify-center px-4 top-0 sticky z-[99]">
      {/* logo */}
      <div className="w-[220px] cursor-pointer">
        <img src={uniCrypt} alt="" />
      </div>
      {/* menu items */}
      <div className="flex items-center text-[14px] text-white space-x-4">
        <div className="flex items-center bg-[#454649] px-[16px] py-2 rounded-full">
          <MdLocalFireDepartment />
          <p className="ml-2 cursor-pointer">DASHBOARD</p>
        </div>
        <div className="hover:bg-[#454649] px-[16px] py-2 rounded-full cursor-pointer">
          <p>BROWSER</p>
        </div>
        <p className="hover:bg-[#454649] px-[16px] py-2 rounded-full cursor-pointer">
          SERVICES
        </p>
        <div className="hover:bg-[#454649] px-[16px] py-2 rounded-full cursor-pointer">
          {/* icon */}
          <p>FARMS</p>
        </div>
        <p className="hover:bg-[#454649] px-[16px] py-2 rounded-full cursor-pointer">DOCS</p>
        <div className="hover:bg-[#454649] px-4 py-2 rounded-full cursor-pointer">
          <FaTelegramPlane className="h-6 w-6" />
        </div>
      </div>
      {/* connect wallet */}
      <div className="flex items-center justify-center text-white">
        <div className="bg-[#454649] flex items-center px-[16px] py-2 rounded-full h-[36px] min-w-[60px] cursor-pointer">
          <img src={Etherium} alt="" className="w-5 h-5" />
          <p className="ml-2">Connect</p>
        </div>
        <div className="ml-4 hover:bg-[#454649] p-[10px] rounded-full cursor-pointer">
          <RiUserShared2Line />
        </div>
        <div className="ml-4 cursor-pointer">
          <BiSun />
        </div>
      </div>
    </header>
  );
};

export default Header;
