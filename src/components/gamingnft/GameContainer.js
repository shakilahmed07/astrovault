import React from "react";
import GameCard from "./GameCard";
import BabyDoge from "../../assets/baby_doge.png";
import Graph from "../../assets/graph.png";
import Vempire from "../../assets/vempire.png";
import Quantum from "../../assets/quantum.png";

const gamingNft = [
  {
    id: 1,
    images: BabyDoge,
    title: "BABY DOGE",
    price: 1652,
  },
  {
    id: 2,
    images: Graph,
    title: "GRAPH LINQ",
    price: 29,
  },
  {
    id: 3,
    images: Vempire,
    title: "vEMPIRE",
    price: 19,
  },
  {
    id: 4,
    images: Quantum,
    title: "Project Quantum",
    price: 105,
  },
];

const GameContainer = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="ml-2 py-5">
        <div className="space-y-2">
          <h3 className="text-white text-[20px] font-[500]">
            Recent Gaming, NFT, and Other Launches
          </h3>
          <p className="text-[#68D67C] text-[12px] font-[400]">
            Profit shown as ATH
          </p>
        </div>
        <div className="columns-4 py-5">
            {
                gamingNft.map((item) => (
                <GameCard key={item} images={item.images} title={item.title} price={item.price} />
                ))
            }
          
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
