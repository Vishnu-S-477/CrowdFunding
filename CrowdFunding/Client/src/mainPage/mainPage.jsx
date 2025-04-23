import { useNavigate } from "react-router-dom";
function MainPage() {
  const navigate = useNavigate();
  const goToUploadPage = () => {
    navigate("/upload");
  };
  const getData = () => {
    getJsonData();
  };
  const getJsonData = () => {
    const getResult = async () => {
      let serverResponse = await fetch(
        "http://localhost:3000/api/getMainJson",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ operation: "getJSONData" }),
        }
      );
      let standardData = await serverResponse.json();
      console.log(standardData);
    };
    getResult();
  };

  return (
    <div className="h-[auto] w-[100vw]">
      <div className="flex  h-[50px] w-[100vw] border-[1px] border-grey-300 shadow-md rounded-[5px]">
        <div className="flex items-center h-full w-[30%] border-1px border-red-500 text-blue-500 text-[23px] font-bold">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIv7Ia8VnUq8SHg9JE1nzn7QkRwWBQO_5CDw&s"
            style={{ height: "45px" }}
          />
          CrowdFunding
        </div>
        <div className="flex h-full w-[40%] border-1px border-red-600"></div>
        <div className="flex items-center justify-center h-full w-[30%] border-1px border-red-7 00">
          <button
            className="h-[30px] w-[150px] text-white text-[15px] bg-blue-500 rounded-[15px] mr-[10px]"
            onClick={goToUploadPage}
          >
            Create Campaign
          </button>
          <img
            src="https://imgs.search.brave.com/MZ_Ut0GeOk3FyhdbaO0oxhXaS3wH5uJb47uFSMrIjO8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMjU5Ni9Q/TkcvOTYvaGFtYnVy/Z2VyX2J1dHRvbl9t/ZW51X2ljb25fMTU1/Mjk2LnBuZw"
            style={{ height: "25px" }}
            onClick={getData}
          />
        </div>
      </div>
      <div className="h-[auto] w-[full] grid grid-cols-4  gap-x-[30px] gap-y-[30px] px-[50px] py-[40px]">
        <div className="flex flex-col h-[330px] w-[300px] rounded-[10px] border-[2px] border-gray-200 shadow-md ">
          <div className="flex relative h-[50%] w-[100%]">
            <div className="flex items-center justify-center absolute top-2 right-2 h-[25px] w-[auto] bg-blue-700 rounded-[13px] p-[8px]">
              <h4 className="text-white text-[14px] font-bold">Education</h4>
            </div>
            <img
              src="https://imgs.search.brave.com/DXyrqk1lnVF4ArRrR0YcbCogVVe2eDKW_EVwONzR7B4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc"
              className="h-[100%] w-[100%] object-cover rounded-tl-[10px] rounded-tr-[10px]"
            />
          </div>
          <div className="flex flex-col justify-between h-[50%] w-full p-[15px] pb-[25px]">
            <h1 className="text-[25px] font-bold">Title</h1>
            <p className="text-[13px] text-gray-700 truncate  ">
              This is Description this is Description overflow-hidden: Hides any
              content that overflows the container.
            </p>
            <div className="flex align-center justify-between h-[30px] w-full">
              <h1 className="text-[14px] text-black font-bold">
                $50000/$100000
              </h1>
              <h1 className="text-[14px] text-blue-700 font-bold  ">50%</h1>
            </div>
            <div className="flex bg-gray-300 h-[8px] w-full rounded-[8px] overflow-hidden">
              <div className="h-[100%] w-[50%] bg-blue-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
