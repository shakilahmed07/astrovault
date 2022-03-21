import DocLock from "../../assets/doc-lock.svg";
import Token from "../../assets/token.svg";
import Drum from "../../assets/drum.png";
import WhiteHorse from "../../assets/white-horse.png";
import Rocket from "../../assets/rocket.svg";
import Etherium from "../../assets/etherium.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-[#151617] h-screen">
      <div className="">
          {/* main file */}
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
          <div className="tab-content" id="tabs-tabContentJustify">
            <div
              className="tab-pane fade show active"
              id="tabs-homeJustify"
              role="tabpanel"
              aria-labelledby="tabs-home-tabJustify"
            >
              {/* services */}
              <div className="shadow-lg w-4/12 mx-auto">
                <div className="text-center py-5 shadow-2xl bg-[#1E2023]">
                  <p className="text-white text-[16px] font-[400]">
                    Our Service
                  </p>
                </div>
                {/* first one */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800 cursor-pointer">
                  <div className="mr-2 p-2">
                    <img src={Token} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      Token Minter
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      ENMT tokens are fully ERC20 compliant Non-Mintable Tokens.
                      Use the Unicrypt Token
                    </p>
                  </div>
                </div>

                {/* third */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800 cursor-pointer">
                  <div className="mr-2 p-2">
                    <img src={Rocket} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      Launchpad
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Raise capitial to kick start your blockchain project
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Decentralised presale service
                    </p>
                  </div>
                </div>
                {/* four */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800 cursor-pointer">
                  <div className="mr-2 p-2">
                    <img src={DocLock} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      Token Minter
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      ENMT tokens are fully ERC20 compliant Non-Mintable Tokens.
                      Use the Unicrypt Token
                    </p>
                  </div>
                </div>
                {/* five */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800 cursor-pointer">
                  <div className="mr-2 p-2">
                    <img src={DocLock} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      Token Minter
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      ENMT tokens are fully ERC20 compliant Non-Mintable Tokens.
                      Use the Unicrypt Token
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tabs-profileJustify"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabJustify"
            >
              {/* middle Minter */}
              <div className="w-10/12 mx-auto">
                <div className="py-1 mb-2 rounded-full shadow-2xl flex items-center justify-center bg-gray-800 w-2/12 mx-auto">
                  <img src={Etherium} alt="" className="h-6" />
                  <p className="text-[16px] font-[400] ml-2 text-white">
                    Mainnet
                  </p>
                </div>
                <div className="flex justify-between mt-10">
                  <div className="shadow-lg w-5/12 mx-auto">
                    <div className="py-5 shadow-2xl bg-[#1E2023]">
                      <p className="text-white text-[16px] font-[400] pl-5">
                        ENMT Token Minter
                      </p>
                    </div>
                    {/* third */}
                    <div className=" bg-[#1E2023] py-4 border-b border-gray-800 pl-5">
                      <div>
                        <p className="text-white text-[12px] pr-6 text-justify">
                          NMT tokens are fully ERC20 compliant Non-Mintable
                          Tokens. Use the Unicrypt Token factory to mint your
                          very own token at the click of a button. Your ENMT
                          token will be shown favourably in the Unicrypt browser
                          and bypass the need for an audit on the token contract
                          itself, as well as when using our ILO dapp. Anyone can
                          query our ENMT token mint factory with your token
                          address to see your new token is a valid, safe, and
                          ERC20 compliant token.
                        </p>
                        <p className="text-white text-center py-5 text-[16px] font-[400]">
                          ENMT Token specs
                        </p>
                        <p className="text-white text-[14px]">
                          No mint function
                        </p>
                        <p className="text-white text-[14px]">
                          No owner / admin functions
                        </p>
                        <p className="text-white text-[14px]">
                          No unsafe code in the token contract itself
                        </p>
                        <p className="text-white text-[14px]">
                          Fully ERC20 compliant
                        </p>
                        <p className="text-white text-[14px] pb-10">
                          Fully decentralised
                        </p>
                      </div>
                      <div className="space-y-5">
                        <div className="border-2 rounded-full py-1 mr-4">
                          <p className="text-[#b9babb] text-center">
                            Create your own token
                          </p>
                        </div>
                        <div className="flex items-center justify-center space-x-2 border-2 rounded-full py-1 mr-4 cursor-pointer">
                          <img src={Etherium} alt="" className="h-4" />
                          <p className="text-pink-700">Create your own token</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* right side connect wallet */}
                  <div className="w-5/12 mx-auto">
                    <div className="border-2 rounded-full py-1 mr-4 mb-5 cursor-pointer">
                      <p className="text-[#b9babb] text-center">
                        Create your own token
                      </p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 border-2 rounded-full py-1 mr-4 cursor-pointer">
                          <img src={Etherium} alt="" className="h-4" />
                          <p className="text-pink-700">Create your own token</p>
                        </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tabs-messagesJustify"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabJustify"
            >
              {/* launchpad */}
              <div className="pt-5 w-6/12 -mt-10 hidden md:inline">
                <div className="py-1 mb-2 rounded-full shadow-2xl flex items-center justify-center bg-gray-800 w-2/12 mx-auto">
                  <img src={Etherium} alt="" className="h-6" />
                  <p className="text-[16px] font-[400] ml-2 text-white">
                    Mainnet
                  </p>
                </div>
                <div className="bg-[#1E2023] pb-10 rounded-2xl shadow-lg w-4/12 mx-auto">
                  <div className="flex flex-col items-center justify-center py-4">
                    <img src={Rocket} alt="" className="h-[50px]" />
                    <p className="text-white text-[16px] font-[400] text-center">
                      Launchpad
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Lock your ERC20 team tokens
                    </p>
                  </div>
                  {/* four */}
                  <Link to="/services/launchpad">
                  <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] shadow-2xl rounded-2xl py-2 mx-8 my-2">
                    <div className="mr-2 p-2">
                      <img src={WhiteHorse} alt="" className="h-10" />
                    </div>
                    <div>
                      
                      <p className="text-white text-[16px] font-[400]">
                        Uniswap V2
                      </p>
                      
                      <p className="text-[#b9babb] text-[12px] font-[400]">
                        Mainnet
                      </p>
                    </div>
                  </div>
                  </Link>
                  {/* five */}
                  <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] shadow-2xl rounded-2xl py-2 mx-8 my-2">
                    <div className="mr-2 p-2">
                      <img src={Drum} alt="" className="h-10" />
                    </div>
                    <div>
                      <p className="text-white text-[16px] font-[400]">
                        Uniswap V1
                      </p>
                      <p className="text-[#b9babb] text-[12px] font-[400]">
                        Mainnet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Services;
