import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import donateDirection from "../../../Images/donateDirection.png";

function CampaignDetail() {
  const [searchParam] = useSearchParams();
  let [warning, setWarning] = useState(null);
  let [donateCard, setDonateCard] = useState(false);

  const showDonateCard = () => {
    setDonateCard(!donateCard);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw] bg-gray-100 pt-[100px] relative">
      {donateCard == true ? (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center fixed z-[5] bg-white bg-opacity-75 top-[20px]">
          <div className="h-[590px] w-[400px] border-2 border-red-800 rounded-[10px] flex flex-col justify-between items-center px-[15px] py-[20px] bg-blue-950 relative">
            <div
              className="absolute top-[-24px] right-[-20px] h-[25px] w-[25px] rounded-[50%] bg-red-700 text-white text-[20px] flex items-center justify-center hover:bg-red-500 cursor-pointer"
              onClick={showDonateCard}
            >
              x
            </div>
            <div className="flex items-center justify-center text-[30px] font-bold text-white">
              Donate
            </div>
            <div className="flex items-center justify-between w-[100%] relative ">
              <img
                src={donateDirection}
                className="absolute h-[60px] w-[60px] top-[10px] right-[160px]"
              />
              <div className="flex flex-col w-[50%] items-center justify-between">
                <img
                  className="border-2 border-white h-[80px] w-[80px] rounded-[50%] object-cover mb-[5px]"
                  src="https://imgs.search.brave.com/bhkFZKyzmusTKy4NX1rt7Cu5yOaVovZUfFTiY5PA5Ts/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmRh/d24uY29tL2xhcmdl/LzIwMjUvMDUvMDUx/NDE5NTc4OTVmMmQ4/LmpwZz9yPTE0MzIz/NA"
                />
                <p className="text-white">Trisha</p>
              </div>
              <div className="flex flex-col w-[50%] items-center justify-between">
                <img
                  className="border-2 border-white h-[80px] w-[80px] rounded-[50%] object-cover mb-[5px]"
                  src="https://imgs.search.brave.com/bhkFZKyzmusTKy4NX1rt7Cu5yOaVovZUfFTiY5PA5Ts/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmRh/d24uY29tL2xhcmdl/LzIwMjUvMDUvMDUx/NDE5NTc4OTVmMmQ4/LmpwZz9yPTE0MzIz/NA"
                />
                <p className="text-white">Ane De Armas</p>
              </div>
            </div>
            <div className="flex items-center justify-between w-[100%]">
              <div className="text-white">Account Balance</div>
              <div className="text-white">$55555</div>
            </div>
            <div className="flex items-center justify-between w-[100%]">
              <div className="text-white">Minimum Donation Amount</div>
              <div className="text-white">$1000</div>
            </div>
            <div className="flex items-center justify-between w-[100%]">
              <div className="text-white">Transaction Fee</div>
              <div className="text-white">$5</div>
            </div>
            <input
              placeholder="Enter Donation Amount (RUPEES)"
              type="number"
              className="h-[40px] w-[100%] rounded-[5px]  border-2  border-white border-opacity-20 bg-blue-950 p-[15px] text-white text-[20px] focus:outline-none focus:border-white"
            />
            <div className="text-yellow-500 w-[100%]">
              {warning == null
                ? `Note : Maximum Donatable Amount => $${500} `
                : "that"}
            </div>
            <button className="w-[100%] h-[45px] bg-yellow-500 text-[20px] font-extrabold rounded-[10px] hover:bg-yellow-400">
              Donate Now
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col  h-[543px] w-[50vw] rounded-[15px] overflow-hidden bg-white">
        <div className="relative h-[55%] w-full text-white">
          <img
            className="object-cover   h-full w-full bg-black"
            src={searchParam.get("campaignUrl") || "noUrl"}
          />
          <div className="absolute bottom-[50px] left-[30px] text-[30px] font-semibold">
            {searchParam.get("title") || "no title"}
          </div>
          <div className="absolute bottom-[20px] left-[40px] text-[15px] px-[7px] py-[3px] rounded-[25px] bg-blue-700">
            {searchParam.get("category") || "no category"}
          </div>
          <div className="absolute bottom-[20px] left-[150px]">Vishnu S</div>
        </div>

        <div className="flex justify-between h-[45%] w-full p-[14px]">
          <div className="flex  flex-col h-full w-[67%] ">
            <div className="flex items-center h-[20%] ">
              <h1 className="text-[20px] font-semibold">About This Campaign</h1>
            </div>
            <div className="h-[40%]   text-[14px] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {searchParam.get("description")}
            </div>
            <div className="flex items-center justify-between h-[40%]  px-[20px] py-[15px] bg-gray-200 mt-[10px] rounded-[10px]">
              <div className="flex flex-col justify-center items-center h-full w-[30%] bg-white rounded-[10px]">
                <h1 className="text-blue-700 font-semibold text-[20px]">
                  $25000
                </h1>
                <h3 className="text-[14px]">Raised of $50000</h3>
              </div>
              <div className="flex flex-col justify-center items-center h-full w-[30%] bg-white rounded-[10px]">
                <h1 className="text-blue-700 font-semibold text-[20px]">
                  $25000
                </h1>
                <h3 className="text-[14px]">Raised of $50000</h3>
              </div>
              <div className="flex flex-col justify-center items-center h-full w-[30%] bg-white rounded-[10px]">
                <h1 className="text-blue-700 font-semibold text-[20px]">
                  $25000
                </h1>
                <h3 className="text-[14px]">Raised of $50000</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between h-full w-[30%]  px-[10px] py-[14px] bg-gray-100 rounded-[10px]">
            <h1 className="text-[20px] font-semibold">Make a Donation</h1>
            <div
              className="flex flex-col items-center justify-center h-[115px] w-[115px] rounded-[50%] bg-red-700 bg-orange-600 text-[24px] font-semibold text-white italic hover:scale-110 duration-200 transition-all ease-in-out transform hover:bg-orange-500 cursor-pointer"
              onClick={showDonateCard}
            >
              <h1>Donate</h1>
              <h1>Now</h1>
            </div>
            <div className="text-[12px] text-gray-700">
              Camaign Started On 00-00-0000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetail;
