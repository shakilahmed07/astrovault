import Horse from "../../assets/hourse.svg";
import BlueHorse from "../../assets/blue-horse.svg";
import DocLock from "../../assets/doc-lock.svg";
import Token from "../../assets/token.svg";
import Rocket from "../../assets/rocket.svg";
import PerformingCard from "./PerformingCard";

const UncxMain = () => {
  return (
    <div className="md:w-9/12 md:mx-auto">
      <div className="flex space-x-4 md:py-20">
        <div className="pb-20">
          <div className="flex items-center mx-4">
            <div className="flex md:px-10 px-4 items-center bg-[#1E2023] py-2 rounded-tl-2xl rounded-bl-2xl space-x-2">
              <img src={Horse} alt="" className="h-7" />
              <div className="flex space-x-2">
                <p className="text-white text-[16px] font-[500]">UNCX</p>
                <p className="text-purple-700 text-[16px] font-[500]">$377.06</p>
              </div>
            </div>
            <div className="flex md:px-10 px-4  items-center bg-[#22272C] py-2 rounded-tr-2xl rounded-br-2xl space-x-2 hover:bg-[#1E2023]">
              <img src={BlueHorse} alt="" className="h-7" />
              <div className="flex space-x-2">
                <p className="text-white text-[16px] font-[500]">UNCL</p>
                <p className="text-purple-700 text-[16px] font-[500]">$28.37</p>
              </div>
            </div>
          </div>
          {/* barchart */}
          {/* right div */}
          <div className="py-5">
            <p className="text-white text-center font-[600] text-[20px] mb-2">Recent Top performing ILO's</p>
            {/* component */}
            <PerformingCard />
            <PerformingCard />
            <PerformingCard />
          </div>
        </div>
        {/* right side */}
        <div className="pt-5 w-6/12 -mt-10 hidden md:inline">
          <div className="text-center pb-5 shadow-2xl bg-[#151617]">
            <p className="text-white text-[16px] font-[400]">
              Unicrypt Service
            </p>
            <p className="text-[12px] text-[#b9babb] font-[400]">
              For developers
            </p>
          </div>
          {/* first one */}
          <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-700">
            <div className="mr-2 p-2">
            <img src={DocLock} alt="" className="h-10" />
            </div>
            <div>
              <p className="text-white text-[16px] font-[400]">Documentation</p>
              <p className="text-[#b9babb] text-[12px] font-[400]">Read about all of our services</p>
            </div>
          </div>
          {/* second */}
          <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-700">
            <div className="mr-2 p-2">
            <img src={DocLock} alt="" className="h-10" />
            </div>
            <div>
              <p className="text-white text-[16px] font-[400]">Liquidity Locker</p>
              <p className="text-[#b9babb] text-[12px] font-[400]">Lock Liquidity tokens</p>
            </div>
          </div>
          {/* third */}
          <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-700">
            <div className="mr-2 p-2">
            <img src={DocLock} alt="" className="h-10" />
            </div>
            <div>
              <p className="text-white text-[16px] font-[400]">Token Locker</p>
              <p className="text-[#b9babb] text-[12px] font-[400]">Lock your ERC20 team tokens</p>
              <p className="text-[#b9babb] text-[12px] font-[400]">send tokens to someone else that are locked for a configurable</p>
            </div>
          </div>
          {/* four */}
          <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-700">
            <div className="mr-2 p-2">
            <img src={Token} alt="" className="h-10" />
            </div>
            <div>
              <p className="text-white text-[16px] font-[400]">TOken Minter</p>
              <p className="text-[#b9babb] text-[12px] font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla esse officia, porro facilis consectetur!</p>
            </div>
          </div>
          {/* five */}
          <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4">
            <div className="mr-2 p-2">
            <img src={Rocket} alt="" className="h-10" />
            </div>
            <div>
              <p className="text-white text-[16px] font-[400]">LaunchPad</p>
              <p className="text-[#b9babb] text-[12px] font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum ratione totam consectetur laborum, culpa fugiat ipsum pariatur minima facilis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UncxMain;
