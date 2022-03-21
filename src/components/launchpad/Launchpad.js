import WhiteHorse from "../../assets/white-horse.png";
import Rocket from "../../assets/rocket.svg";
import { Link } from "react-router-dom";

const Launchpad = () => {
  return (
    <div className="bg-[#151617] h-screen">
      <div>
        {/* ul */}
        <ul
          className="
            w-4/12 mx-auto
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
"
          id="tabs-tabJustify"
          role="tablist"
        >
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-homeJustify"
              className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      
      px-6
      py-3
      my-2
      
      active
    "
              id="tabs-home-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-homeJustify"
              role="tab"
              aria-controls="tabs-homeJustify"
              aria-selected="true"
            >
              Services
            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-profileJustify"
              className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      
      px-6
      py-3
      my-2
      
    "
              id="tabs-profile-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profileJustify"
              role="tab"
              aria-controls="tabs-profileJustify"
              aria-selected="false"
            >
              Minter
            </a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a
              href="#tabs-messagesJustify"
              className="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
     
      px-6
      py-3
      my-2
      
    "
              id="tabs-messages-tabJustify"
              data-bs-toggle="pill"
              data-bs-target="#tabs-messagesJustify"
              role="tab"
              aria-controls="tabs-messagesJustify"
              aria-selected="false"
            >
              Launchpad
            </a>
          </li>
        </ul>
        {/* ul end */}
        <div className="pt-10">
          <div className="py-1 mb-2 rounded-full shadow-2xl flex items-center justify-center bg-gray-800 w-2/12 mx-auto">
            <img src={WhiteHorse} alt="" className="h-6" />
            <p className="text-[16px] font-[400] ml-2 text-white">Uniswap V2</p>
          </div>
          <div className="bg-[#1E2023] pb-10 rounded-2xl shadow-lg w-4/12 mx-auto">
            <p className="text-white text-[16px] font-[400] text-center py-4">
              Select an lio type
            </p>
            {/* four */}
            <Link to="/services/launchpad/create">
              <div className="flex items-center hover:bg-[#22272C] rounded-2xl py-2 mx-8 my-2 cursor-pointer">
                <div className="mr-2 p-2">
                  <img src={Rocket} alt="" className="h-[60px]" />
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex items-center">
                    <p className="text-white mr-2 font-[600]">Fair sale</p>
                    <p className="text-pink-700">**NEW: Whitelist</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-[500]">
                      Round 0: -{" "}
                      <span className="text-[#b9babb] ">
                        20% Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus
                      </span>
                    </p>
                    <p className="text-white font-[500]">
                      Round 0: -{" "}
                      <span className="text-pink-700 ">
                        79% Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus
                      </span>
                    </p>
                    <p className="text-white font-[500]">
                      Round 1: -{" "}
                      <span className="text-[#b9babb] ">
                        (2 hours) exclusively for UNCX and UNCL holders
                      </span>
                    </p>
                    <p className="text-white font-[500]">
                      Round 2: -{" "}
                      <span className="text-[#b9babb] ">Open to everyone</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* five */}
            <div className="flex items-center hover:bg-[#22272C] rounded-2xl py-2 mx-8 my-2 cursor-pointer">
              <div className="mr-2 p-2">
                <img src={Rocket} alt="" className="h-[50px]" />
              </div>
              <div className="text-xs space-y-1">
                <div className="flex items-center">
                  <p className="text-white mr-2 font-[600]">Type 2:</p>
                  <p className="text-pink-700">New format</p>
                </div>
                <p className="text-white font-[500]">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launchpad;
