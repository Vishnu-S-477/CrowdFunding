import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const navigate = useNavigate();
  const campaignNameRef = useRef();
  const descriptionRef = useRef();
  const amountRef = useRef();
  const categoryRef = useRef();
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
  let file = null;

  const storeFile = (e) => {
    file = e.target.files[0];
  };

  const getPresignedUrl = async () => {
    let serverResponse = await fetch(
      "http://localhost:3000/api/uploadPreSignedUrl",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          operation: "getUploadPresignedUrl",
          name: randomNumber + file.name,
          type: file.type,
        }),
      }
    );

    let standardData = await serverResponse.json();
    let preSignedUrl = standardData.url;
    createCampaign(preSignedUrl);
  };

  const goToMain = () => {
    navigate("/main");
  };

  const createCampaign = async (preSignedUrl) => {
    const uploadRes = await fetch(preSignedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });
    if (uploadRes.ok) {
      console.log("save process started");
      createCampaignApiCall();
    }
  };

  const createCampaignApiCall = async () => {
    console.log("tri");
    const campaignProfileName = randomNumber + file.name;
    const campaignCategory = categoryRef.current.value;
    const campaignTitle = campaignNameRef.current.value;
    const campaignDescription = descriptionRef.current.value;
    const campaignTotalAmount = amountRef.current.value;

    const createCampaign = async () => {
      const serverResponse = await fetch(
        "http://localhost:3000/api/createCampaign",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            campaignProfileName,
            campaignCategory,
            campaignTitle,
            campaignDescription,
            campaignTotalAmount,
          }),
        }
      );

      const standardResponse = await serverResponse.json();
      const result = standardResponse.status;
      if (result == "campaignCreatedSuccessfully") {
        navigate("/main");
      } else {
        alert("something went wrong plaese upload later");
      }
    };
    createCampaign();
  };

  return (
    <div className="flex items-center  justify-center  h-[100vh] w-[100vw]">
      <div className="flex flex-col justify-between  items-center h-[550px] w-[500px] pt-[20px] pb-[20px] pl-[2px] pr-[2px]  box-border border-[2px] border-gray-200 shadow-md rounded-[2px]">
        <h1 className="text-2xl font-semibold">Create Campaign</h1>

        <input
          className="h-[40px] w-full border-[2px] border-grey-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[5px]"
          placeholder="Campaign Title"
          ref={campaignNameRef}
        ></input>

        <textarea
          className="w-full focus:outline-none border-[1px] border-grey-300  focus:ring-2 focus:ring-blue-500 rounded-[5px]"
          id="comment"
          name="comment"
          rows="5"
          cols="40"
          placeholder="Write your Campaign Desdcription."
          ref={descriptionRef}
        ></textarea>

        <input
          className="w-full h-[40px] focus:outline-none focus:ring-2  focus:ring-blue-500 border-[1px] border-grey-300 rounded-[5px ]"
          placeholder="Target Amount (INR)"
          ref={amountRef}
        ></input>

        <div className="flex flex-col justify-between border-[2px] border-grey-700 rounded-[5px] h-[90px] w-full p-[2px]">
          <h2 className="text-normal text-[15px] ml-[5px] mb-[5px] ">
            Upload Campaign Photo
          </h2>
          <input type="file" onChange={storeFile}></input>
        </div>

        <select
          id="category"
          name="category"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ref={categoryRef}
        >
          <option value="">Choose Category</option>
          <option value="technology">🧠 Technology</option>
          <option value="health">❤️ Health & Medical</option>
          <option value="creative">🎨 Creative Arts</option>
          <option value="business">🚀 Startups & Business</option>
          <option value="education">🏫 Education</option>
          <option value="games">🎮 Games</option>
          <option value="fashion">👗 Fashion & Design</option>
          <option value="social">🤝 Social Causes</option>
          <option value="travel">✈️ Travel & Adventure</option>
          <option value="memorial">🕊️ Memorial & Funeral</option>
        </select>

        <div className="flex justify-between w-full pr-[3px]">
          <button
            className="border-[1px] bg-blue-500 h-[45px] w-[150px] text-white rounded-[7px]"
            onClick={goToMain}
          >
            Back
          </button>
          <button
            className="border-[1px] bg-blue-500 h-[45px] w-[150px] text-white rounded-[7px]"
            onClick={getPresignedUrl}
          >
            Create Campaign
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;
