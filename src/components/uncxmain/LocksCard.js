import Etherium from "../../assets/etherium.png"
import NoIcon from "../../assets/no-icon.png"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

const LocksCard = () => {
  return (
    <div className='bg-[#1E2023] hover:bg-gray-800 p-4 shadow-md border-b border-gray-800'>
        <div className='flex items-center justify-between'>
            <div className="space-y-2">
                <div className="flex items-center space-x-1">
                    <img src={Etherium} alt="" className="h-6" />
                    <p className="text-white font-[500]">ETH</p>
                    <MdKeyboardArrowUp className="text-[#b9babb]" />
                    <img src={NoIcon} alt="" className="h-6" />
                    <p className="text-white font-[500]">Para</p>
                    <MdKeyboardArrowUp className="text-[#b9babb]"  />

                </div>
                <div className="flex items-center space-x-1 text-xs">
                    <p className="text-[#b9babb] font-[500]">Liquidity: </p>
                    <p className="text-purple-700">$538k</p>
                </div>

            </div>
            {/* right */}
            <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center text-pink-700 space-x-1">
                    <p>$240k</p>
                    <IoMdLock className="border-2 rounded-full border-pink-700 text-xl p-[1px]" />
                </div>
                <div className="flex items-center text-[#b9babb] text-xs">
                    <p>(98.7%) next in 6 months</p>
                    <MdKeyboardArrowDown />
                </div>
            </div>

        </div>
    </div>
  )
}

export default LocksCard