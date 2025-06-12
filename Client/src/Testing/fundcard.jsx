import { useState } from "react";
import donateDirection from "../../../Images/donateDirection.png";
function FundCard() {
  let [warning, setWarning] = useState(null);
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[600px] w-[400px] border-2 border-red-800 rounded-[10px] flex flex-col justify-between items-center px-[15px] py-[20px] bg-blue-950">
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
  );
}

export default FundCard;
