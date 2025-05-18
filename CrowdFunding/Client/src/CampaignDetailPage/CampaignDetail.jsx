import React from "react";
import { useSearchParams } from "react-router-dom";

function CampaignDetail() {
  const [searchParam] = useSearchParams();
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw] bg-gray-100 pt-[100px]">
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
            <div className="flex flex-col items-center justify-center h-[115px] w-[115px] rounded-[50%] bg-red-700 bg-orange-600 text-[24px] font-semibold text-white italic hover:scale-110 duration-200 transition-all ease-in-out transform hover:bg-orange-500 cursor-pointer">
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
