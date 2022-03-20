import DocLock from "../../assets/doc-lock.svg";
import Token from "../../assets/token.svg";
import Rocket from "../../assets/rocket.svg";

const Services = () => {
  return (
    <div className="bg-[#151617] h-[80vh]">
      <div className="w-4/12 mx-auto">
        <div>
          {/* main file */}
          <ul
            className="
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
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
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
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
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
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
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
              <div className="pt-5 w-6/12 -mt-10 hidden md:inline shadow-lg">
                <div className="text-center py-5 shadow-2xl bg-[#1E2023]">
                  <p className="text-white text-[16px] font-[400]">
                    Our Service
                  </p>
                </div>
                {/* first one */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800">
                  <div className="mr-2 p-2">
                    <img src={DocLock} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      Documentation
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Read about all of our services
                    </p>
                  </div>
                </div>

                {/* third */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800">
                  <div className="mr-2 p-2">
                    <img src={DocLock} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      Token Locker
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Lock your ERC20 team tokens
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      send tokens to someone else that are locked for a
                      configurable
                    </p>
                  </div>
                </div>
                {/* four */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800">
                  <div className="mr-2 p-2">
                    <img src={Token} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      TOken Minter
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum nulla esse officia, porro facilis consectetur!
                    </p>
                  </div>
                </div>
                {/* five */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4">
                  <div className="mr-2 p-2">
                    <img src={Rocket} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      LaunchPad
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam harum ratione totam consectetur laborum, culpa
                      fugiat ipsum pariatur minima facilis.
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
              <div>
                <p className="text-white text-center">Mainnet</p>
                <div className="flex">
                  <div>
                  <div className="pt-5 w-6/12 -mt-10 hidden md:inline shadow-lg">
                <div className="text-center py-5 shadow-2xl bg-[#1E2023]">
                  <p className="text-white text-[16px] font-[400]">
                    Mainnet
                  </p>
                </div>
                {/* third */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800">
                  <div className="mr-2 p-2">
                    <img src={DocLock} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      Token Locker
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Lock your ERC20 team tokens
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      send tokens to someone else that are locked for a
                      configurable
                    </p>
                  </div>
                </div>
                {/* four */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800">
                  <div className="mr-2 p-2">
                    <img src={Token} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      TOken Minter
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum nulla esse officia, porro facilis consectetur!
                    </p>
                  </div>
                </div>
                {/* five */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4">
                  <div className="mr-2 p-2">
                    <img src={Rocket} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      LaunchPad
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam harum ratione totam consectetur laborum, culpa
                      fugiat ipsum pariatur minima facilis.
                    </p>
                  </div>
                </div>
              </div>
                  </div>
                  {/* right side connect wallet */}
                  <div className="bg-red-400">
                    <p>connect</p>
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
              <div className="pt-5 w-6/12 -mt-10 hidden md:inline shadow-lg">
                <div className="text-center py-5 shadow-2xl bg-[#1E2023]">
                  <p className="text-white text-[16px] font-[400]">
                    Mainnet
                  </p>
                </div>
                {/* third */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800">
                  <div className="mr-2 p-2">
                    <img src={DocLock} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      Token Locker
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Lock your ERC20 team tokens
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      send tokens to someone else that are locked for a
                      configurable
                    </p>
                  </div>
                </div>
                {/* four */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4 border-b border-gray-800">
                  <div className="mr-2 p-2">
                    <img src={Token} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      TOken Minter
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum nulla esse officia, porro facilis consectetur!
                    </p>
                  </div>
                </div>
                {/* five */}
                <div className="flex items-center hover:bg-[#22272C] bg-[#1E2023] py-4">
                  <div className="mr-2 p-2">
                    <img src={Rocket} alt="" className="h-10" />
                  </div>
                  <div>
                    <p className="text-white text-[16px] font-[400]">
                      LaunchPad
                    </p>
                    <p className="text-[#b9babb] text-[12px] font-[400]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam harum ratione totam consectetur laborum, culpa
                      fugiat ipsum pariatur minima facilis.
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
