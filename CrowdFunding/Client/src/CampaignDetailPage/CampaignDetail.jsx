function CampaignDetail({ props }) {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw] bg-gray-100">
      <div className="flex flex-col  h-[620px] w-[50vw] rounded-[15px] overflow-hidden bg-white">
        <div className="relative h-[55%] w-full text-white">
          <img
            className="object-cover h-full w-full"
            src="https://imgs.search.brave.com/hp1yrhS2XL7VGRUAxyUtwP5FnZGWgONSE4UHOotx6rc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/aXRlcmF0dXJlLWNv/bmNlcHQtd2l0aC1n/bGFzc2VzLWJvb2tf/MjMtMjE0NzY5MDQ5/Mi5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw"
          />
          <div className="absolute bottom-[50px] left-[30px] text-[30px] font-semibold">
            Education Purpose
          </div>
          <div className="absolute bottom-[20px] left-[40px] text-[15px] px-[7px] py-[3px] rounded-[25px] bg-blue-700">
            Education
          </div>
          <div className="absolute bottom-[20px] left-[150px]">Vishnu S</div>
        </div>

        <div className="flex justify-between h-[45%] w-full p-[14px]">
          <div className="flex  flex-col h-full w-[67%] ">
            <div className="flex items-center h-[20%] ">
              <h1 className="text-[20px] font-semibold">About This Campaign</h1>
            </div>
            <div className="h-[40%]   text-[14px] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              Nikola Tesla: A Serbian-American inventor, electrical engineer,
              and mechanical engineer born on July 10, 1856. He is renowned for
              his contributions to alternating current (AC) electricity and the
              Tesla Coil, among other inventions. His legacy is honored by the
              unit of magnetic flux density being named the "tesla"
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
            <div className="flex flex-col items-center justify-center h-[120px] w-[120px] rounded-[50%] bg-red-700 bg-orange-600 text-[24px] font-semibold text-white italic hover:scale-110 duration-200 transition-all ease-in-out transform hover:bg-orange-500">
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
