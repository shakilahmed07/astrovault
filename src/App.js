import { MdKeyboardArrowUp } from "react-icons/md";
import { BsPentagon } from "react-icons/bs";
import Etherium from "./assets/etherium.png"
import Bitcoin from "./assets/bitcoin.png"
import Square from "./assets/square.png"
import WebLogo from "./assets/web-logo.png"
import GameContainer from "./components/gamingnft/GameContainer";
import PresalesContainer from "./components/presales/PresalesContainer";
import UncxMain from "./components/uncxmain/UncxMain";

function App() {
  return (
    <main className='bg-[#151617]'>
      {/* container */}
      <div className="md:py-10 py-5">
        {/* Total Value */}
        <div className="flex md:flex-row flex-col-reverse md:items-center md:justify-around">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center text-center items-center mt-5">
          <BsPentagon className="text-purple-700 mr-2 text-[36px] font-extrabold h-8 -mt-2" />
            <p className="text-purple-700 text-[20px] font-[700]">$487,654,798</p>
            <span className="text-[#b9babb] mx-1 hidden md:inline">-</span>
            <p className="text-[#b9babb] text-[12px] font-[400]">Total Value locked across all AMMS</p>
          </div>
          {/* right side */}
          <div className="text-white flex items-center justify-center space-x-2">
            <div className="flex items-center">
              <img src={Square} alt="" className="h-5 mr-2" />
              <p className="text-[12px] font-[500] text-[#b9babb]">$654.45</p>
              <MdKeyboardArrowUp className="text-[#b9babb]" />
            </div>
            <div className="flex items-center">
              <img src={Etherium} alt="" className="h-5 mr-2" />
              <p className="text-[12px] font-[500] text-[#b9babb]">$2.954</p>
              <MdKeyboardArrowUp className="text-[#b9babb]" />
            </div>
            <div className="flex items-center">
              <img src={Bitcoin} alt="" className="h-5 mr-2" />
              <p className="text-[12px] font-[500] text-[#b9babb]">$41.847</p>
              <MdKeyboardArrowUp className="text-[#b9babb]" />
            </div>
          </div>
        </div>
      </div>
      {/* UNCX Staking */}
      <div className="md:w-9/12 md:mx-auto">
        <div className="flex items-center bg-[#1E2023] md:py-5 py-4 rounded-3xl md:ml-2 mx-2 pl-4">
          <img src={WebLogo} alt="" className="h-[40px] mr-2" />
          <p className="text-[#b9babb] md:text-[16px] text-xs">Earn fees from our ecosystem with <span className="text-purple-700 cursor-pointer">UNCX staking</span></p>
        </div>
      </div>
      {/* Component */}
      <GameContainer />
      <PresalesContainer />
      <UncxMain />
    </main>
  );
}

export default App;
