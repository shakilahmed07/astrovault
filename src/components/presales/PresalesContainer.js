import React from "react";
import PresalesCard from "./PresalesCard";
import { IoIosArrowForward } from "react-icons/io";
import LaikaDoge from "../../assets/laikadoge.jpeg";
import Plot from "../../assets/plot.png";
import WDoge from "../../assets/wdoge.jpg";
import Kanga from "../../assets/kanga.gif";
import MBean from "../../assets/mbean.jpg";
import QNFT from "../../assets/qnft.gif";

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
    images: Plot,
    title: "PLOT",
    day: "in 2 days",
    price: 1600,
  },
  {
    id: 3,
    images: WDoge,
    title: "WDoge",
    day: "in 3 days",
    price: 300,
  },
  {
    id: 4,
    images: Kanga,
    title: "KANGA",
    day: "in 2 days",
    price: 200,
  },
  {
    id: 5,
    images: MBean,
    title: "MBEAN",
    day: "in 3 dyas",
    price: 100,
  },
  {
    id: 6,
    images: QNFT,
    title: "QNFT",
    day: "in 3 days",
    price: 280,
  },
];

const PresalesContainer = () => {
  return (
    <div class className="w-9/12 mx-auto">
      <div className="flex items-center hover:bg-[#1E2023] w-4/12 rounded-full px-2 py-2 cursor-pointer">
        <h3 className="text-white text-[20px] font-[500] mr-1">
          Upcoming Pancakeswap Presales
        </h3>
        <IoIosArrowForward className="text-white w-[13px]" />
      </div>

      {/* cart item */}
      <div className="relative z-10 flex flex-col justify-center">
        <div className="absolute border border-gray-800 w-full -z-10 -mt-[60px]" />
        <div className="columns-6 my-5">
          {presales.map((item) => (
            <PresalesCard key={item} images={item.images} title={item.title} day={item.day} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresalesContainer;
