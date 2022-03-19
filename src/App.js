import { MdKeyboardArrowUp } from "react-icons/md";
import { BsPentagon } from "react-icons/bs";
import Etherium from "./assets/etherium.png"
import Bitcoin from "./assets/bitcoin.png"
import Square from "./assets/square.png"
import Hourse from "./assets/hourse.svg"
import GameContainer from "./components/gamingnft/GameContainer";
import PresalesContainer from "./components/presales/PresalesContainer";

function App() {
  return (
    <main className='bg-[#151617] h-screen'>
      {/* container */}
      <div className="py-10">
        {/* Total Value */}
        <div className="flex items-center justify-around">
          <div className="flex items-center justify-center">
            <BsPentagon className="text-[#68D67C] mr-2 text-[36px] font-extrabold h-8 -mt-2" />
            <p className="text-[#68D67C] text-[20px] font-[700]">$487,654,798</p>
            <span className="text-[#b9babb] mx-1">-</span>
            <p className="text-[#b9babb] text-[12px] font-[400]">Total Value locked across all AMMS</p>
          </div>
          {/* right side */}
          <div className="text-white flex space-x-2">
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
      <div className="w-9/12 mx-auto">
        <div className="flex items-center bg-[#1E2023] py-5 rounded-3xl ml-2 pl-4">
          <img src={Hourse} alt="" className="h-[30px] mr-2" />
          <p className="text-[#b9babb] text-[16px]">Earn fees from our ecosystem with <span className="text-[#68D67C] cursor-pointer">UNCX staking</span></p>
        </div>
      </div>
      {/* Game Container Component */}
      <GameContainer />
      {/* presales component */}
      <PresalesContainer />
    </main>
  );
}

export default App;
