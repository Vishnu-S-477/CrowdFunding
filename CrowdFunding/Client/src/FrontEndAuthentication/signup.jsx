import { use, useEffect, useState } from "react";

function Signup() {
  const [userName, setUserName] = useState(null);

  useEffect(()=>{
    if(userName){
      setTimeout(()=>{
        
      },2000);
    }
  },[userName]);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const validatePhoneNumber = () => {};

  const [accountNumber, setAccountNumber] = useState(null);
  const validateAccountNumber = () => {};

  const [gmailId, setGmailId] = useState(null);
  const validateGmailId = () => {};

  const [password1, setPassword1] = useState(null);
  const validatePassword1 = () => {};

  const [password2, setPassword2] = useState(null);
  const validatePassword2 = () => {};

  return (
    <div class="flex h-[100vh] w-[100vw] items-center justify-center">
      <div class="flex flex-col h-[550px] w-[340px] rounded-b-[10px]  border border-gray-200 shadow-md">
        <div class="flex flex-col bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-center h-[22%] text-white rounded-t-[10px]">
          <div class="font-extrabold   text-2xl text-sans">
            CrowdFunding Platform
          </div>
          <div class="text-base">create your account</div>
        </div>
        <div class="flex flex-col justify-between items-center h-[78%] p-5 text-sm">
          <div class="flex flex-col w-[100%]">
            <input
              type="text"
              class="border-blue-500 border-2 p-1 rounded-[7px] focus:outline-none focus:ring-0"
              placeholder="Enter Your Name"
            ></input>
            <h5 class="ml-[10px] mt-[3px]"></h5>
          </div>

          <div class="flex flex-col w-[100%]">
            <input
              type="number"
              class="border-2 border-blue-500 rounded-[7px] p-1 focus:outline-none focus:ring-0"
              placeholder="Enter Phone Number"
            ></input>
            <h5 class="ml-[10px] mt-[3px]"></h5>
          </div>

          <div class="flex flex-col w-[100%]">
            <input
              type="text"
              class="border-2 border-blue-500 rounded-[7px] p-1 focus:outline-none focus:ring-0"
              placeholder="Enter Account Id"
            ></input>
            <h5 class="ml-[10px] mt-[3px]"></h5>
          </div>

          <div class="flex flex-col w-[100%]">
            <input
              type="text"
              class="border-2 border-blue-500 rounded-[7px] p-1 focus:outline-none focus:ring-0"
              placeholder="Enter Gmail Id"
            ></input>
            <h5 class="ml-[10px] mt-[3px]"></h5>
          </div>

          <div class="flex flex-col w-[100%]">
            <input
              type="password"
              class="border-2 border-blue-500 rounded-[7px] p-1 focus:outline-none focus:ring-0"
              placeholder="Enter Password"
            ></input>
            <h5 class="ml-[10px] mt-[3px]"></h5>
          </div>

          <div class="flex flex-col w-[100%]">
            <input
              type="password"
              class="border-2 border-blue-500 rounded-[7px] p-1 focus:outline-none focus:ring-0"
              placeholder="Re Enter Password"
            ></input>
            <h5 class="ml-[10px] mt-[3px]"></h5>
          </div>

          <button class="bg-gradient-to-r from-blue-500 to-purple-500 h-[9%] w-[100%] rounded-[20px] text-white font-bold">
            Sign Up
          </button>
          <div class="">
            Already have an account?
            <span class="font-bold text-purple-800 ml-[5px] cursor-pointer">
              Login here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
