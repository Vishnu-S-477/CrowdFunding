function MyAccount() {
  return (
    <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between h-[100vh] w-[100vw] bg-gray-100 px-[30px] pt-[75px] pb-[10px]">
      <div className="flex flex-col justify-between  h-[85%] w-[48%]   bg-gray-100 mr-[20px]">
        <div className="hover:scale-105 transition-all ease-in-out duration-300 flex flex-col items-center justify-between h-[58%] w-full shadow-md  p-[15px] bg-white rounded-[15px]">
          <img
            className="hover:scale-105 transition-all ease-in-out duration-300   h-[150px] w-[150px] object-cover rounded-full"
            src="https://imgs.search.brave.com/w2HND3H2u2ORdvuYc96qSZUj_BxcJM2mKSEhQ2E_04I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQxLzcxLzkz/LzM2MF9GXzc0MTcx/OTM5NF9DOUJQM1li/aVhTSjdXc3BTREx0/S2RZeFpLS1dsZjBK/ei5qcGc"
          />
          <h1 className="text-[25px] text-black font-bold">Vishnu S</h1>
          <h4 className="font-medium">vishnus082005@gmail.com</h4>
        </div>
        <div className="hover:scale-105 transition-all ease-in-out duration-300 flex flex-col justify-between bg-gradient-to-r from-blue-500 to-purple-500 h-[35%] w-full shadow-md p-[7px] rounded-[15px]">
          <h1 className="text-[21px] text-white font-semibold">
            Account Balance
          </h1>
          <h1 className="text-[30px] text-white font-bold">$12,345.67</h1>
          <h1 className="text-[15px] text-white font-regular">
            Account Number : 6380013622638001362263800136226380013622
          </h1>
        </div>
      </div>

      <div className=" hover:scale-105 transition-all ease-in-out duration-300   flex flex-col justify-between h-[50%] w-[48%] border-[1px]  bg-white rounded-[15px] shadow-lg p-[20px]">
        <div className="h-[15%] font-semibold text-[20px]">
          Personal Details
        </div>
        <div className="flex h-[85%] flex-col justify-between pl-[15px]">
          <div>
            <h3 className="mb-[5px] text-gray-700">Phone Number</h3>
            <h3>6380013622</h3>
          </div>
          <div>
            <h3 className="mb-[5px] text-gray-700">Email Address</h3>
            <h3>vishnus082005@gmail.com</h3>
          </div>
          <div>
            <h3 className="mb-[5px] text-gray-700">Account Number</h3>
            <h3>6380013622638001362263800136226380013622</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyAccount;
