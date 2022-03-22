import NoIcon from "../../assets/no-icon.png";
import Etherium from "../../assets/etherium.png";

const PairsCard = () => {
  return (
    <div className="flex flex-col space-y-2 hover:bg-[#22272C] py-4 px-6 border-b border-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <div className="flex space-x-2">
            <img src={NoIcon} alt="" className="h-6" />
            <p className="text-white">TERA</p>
            {/* icon */}
          </div>
          <div className="flex space-x-2">
            <img src={Etherium} alt="" className="h-6" />
            <p className="text-white">ETH</p>
            {/* icon */}
          </div>
        </div>
        <div className="flex">
          <p className="text-purple-700">$19.68M</p>
          {/* lock icon */}
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <div className="flex space-x-2">
          <p className="text-[#b9babb]">Liquidity :</p>
          <p className="text-purple-700">$19.68M</p>
        </div>
        <div className="flex items-center text-[#b9babb]">
          <p>(99.9%) next in a year</p>
          {/* icon */}
        </div>
      </div>
    </div>
  );
};

export default PairsCard;
