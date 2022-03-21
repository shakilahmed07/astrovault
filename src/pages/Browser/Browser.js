import React from "react";
import PresalesCard from "../../components/presales/PresalesCard";
import LaikaDoge from "../../assets/laikadoge.jpeg";
import Kanga from "../../assets/kanga.gif";
import PerformingCard from "../../components/uncxmain/PerformingCard";
import { Link } from "react-router-dom";

const presales = [
  {
    id: 1,
    images: LaikaDoge,
    title: "LaikaDoge",
    day: "in a day",
    price: 300,
  },

  {
    id: 2,
    images: Kanga,
    title: "KANGA",
    day: "in 2 days",
    price: 200,
  },
];

const Browser = () => {
  return (
    <div className="bg-[#151617] h-[90vh]">
      <div className="w-8/12 mx-auto">
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
                tokens
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
                pairs
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
              <div className="pt-5 w-6/12 -mt-10 hidden md:inline shadow-lg">
                <div className="py-5 shadow-2xl bg-[#1E2023]">
                  <p className="text-white text-[16px] font-[400]">
                    All Tokens
                  </p>
                  {/* adding tokens */}
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
                <p className="text-white text-center">$190.47M</p>
              </div>
            </div>
            {/* launchpad */}
            <div
              className="tab-pane fade"
              id="tabs-messagesJustify"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabJustify"
            >
              <div className="pt-5 -mt-10 hidden md:inline shadow-lg">
                <div className="py-5 shadow-2xl bg-[#1E2023]">
                  <div className="flex justify-between items-center">
                    <p className="text-white ml-4">LAUNCHPAD</p>
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-800 px-2 rounded-full"
                      />
                      {/* icon */}
                    </div>
                    {/* link add */}
                    <Link to="/services">
                    <p className="text-white bg-orange-400 mr-4 rounded-full px-2 cursor-pointer">
                      Create Launch
                    </p>
                    </Link>
                    
                  </div>
                  {/* agin tab bar */}
                  <div>
                    <ul
                      class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
                      id="tabs-tabFill"
                      role="tablist"
                    >
                      <li
                        class="nav-item flex-auto text-center"
                        role="presentation"
                      >
                        <a
                          href="#tabs-homeFill"
                          class="
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
                          id="tabs-home-tabFill"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-homeFill"
                          role="tab"
                          aria-controls="tabs-homeFill"
                          aria-selected="true"
                        >
                          upcoming
                        </a>
                      </li>
                      <li
                        class="nav-item flex-auto text-center"
                        role="presentation"
                      >
                        <a
                          href="#tabs-profileFill"
                          class="
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
                          id="tabs-profile-tabFill"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-profileFill"
                          role="tab"
                          aria-controls="tabs-profileFill"
                          aria-selected="false"
                        >
                          Live
                        </a>
                      </li>
                      <li
                        class="nav-item flex-auto text-center"
                        role="presentation"
                      >
                        <a
                          href="#tabs-messagesFill"
                          class="
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
                          id="tabs-messages-tabFill"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-messagesFill"
                          role="tab"
                          aria-controls="tabs-messagesFill"
                          aria-selected="false"
                        >
                          Success
                        </a>
                      </li>
                    </ul>
                    <div class="tab-content" id="tabs-tabContentFill">
                      <div
                        class="tab-pane fade show active"
                        id="tabs-homeFill"
                        role="tabpanel"
                        aria-labelledby="tabs-home-tabFill"
                      >
                        <div>
                          {/* reusable */}
                          <div className="flex text-[#b9babb] justify-between">
                            <p className="ml-4">2 Presales</p>
                            <div className="flex items-center space-x-4 mr-4">
                              <div>
                                <p>Profit</p>
                                {/* icon */}
                              </div>
                              <div>
                                {/* icon */}
                                <p>KYC only</p>
                              </div>
                              <p>?</p>
                            </div>
                          </div>
                          {/* component */}
                          <div>
                            <div>
                              {/* cart item */}
                              <div className="relative z-10 flex flex-col justify-center">
                                <div className="absolute border border-gray-800 w-full -z-10 -mt-[60px] hidden md:inline" />
                                <div className="md:columns-2 columns-3 my-5">
                                  {presales.map((item) => (
                                    <PresalesCard
                                      key={item}
                                      images={item.images}
                                      title={item.title}
                                      day={item.day}
                                      price={item.price}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="columns-2">
                              <PerformingCard />
                              <PerformingCard />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="tabs-profileFill"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tabFill"
                      >
                        Tab 2 content fill
                      </div>
                      <div
                        class="tab-pane fade"
                        id="tabs-messagesFill"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tabFill"
                      >
                        Tab 3 content fill
                      </div>
                    </div>
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

export default Browser;
