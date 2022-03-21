import Etherium from "../../assets/etherium.png";
const LaunchpadDetails = () => {
  return (
    <div className="bg-[#151617] h-screen">
        <div className="w-10/12 mx-auto">
          <div className="flex justify-between pt-10">
            <div className="w-5/12 mx-auto text-center">
              <div className="bg-gradient-to-r from-cyan-800 to-blue-400 rounded-lg">
                <div className="space-y-2 py-[30px]">
                  <p className="text-white text-[16px] font-[500] pl-5">
                    BOOST YOUR PRESALE SCORE
                  </p>
                  <p className="text-white text-[16px] font-[400] pl-5 bg-black w-10/12 mx-auto rounded-full py-1">
                    Mint a safe token (EMT)
                  </p>
                </div>
                {/* third */}
                <div className=" pl-5 pb-[30px]">
                  <div className="space-y-3">
                    <p className="text-white text-[16px] font-[700]">
                      Highly recommended. Now with no zero flat rate fees!
                    </p>
                    <p className="text-white text-[12px] pr-6 pb-5">
                      Conducting a presale with an ENMT token means you get an
                      automatic token audit for free, and an additional green
                      badge on the presale. Give investors security and peace of
                      mind with a secure non mintable token contract.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mt-5 items-center justify-center space-x-2 border-2 rounded-full py-1 cursor-pointer">
                <img src={Etherium} alt="" className="h-4" />
                <p className="text-[#b9babb]">Connect your wallet</p>
              </div>
            </div>

            {/* right side connect wallet */}
            <div className="w-5/12 mx-auto">
              <p className="text-[#b9babb] pb-5">Create your presale</p>
              <div className="flex items-center justify-center space-x-2 border-2 rounded-full py-1 mr-4 cursor-pointer">
                <img src={Etherium} alt="" className="h-4" />
                <p className="text-[#b9babb]">Create your wallet to continue</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default LaunchpadDetails;
