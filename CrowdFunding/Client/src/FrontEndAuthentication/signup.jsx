import { use, useEffect, useState } from "react";

function Signup() {
  const [nameStatus, setNameStatus] = useState(null);
  const [phoneStatus, setPhoneStatus] = useState(null);
  const [accountIdStatus, setAccountIdStatus] = useState(null);
  const [gmailIdStatus, setGmailIdStatus] = useState(null);
  const [password1Status, setPassword1Status] = useState(null);
  const [password2Status, setPassword2Status] = useState(null);

  const [nameAcknow, setNameAcknow] = useState("");
  const [phoneAcknow, setPhoneAcknow] = useState("");
  const [accountIdAcknow, setAccountIdAcknow] = useState("");
  const [gmailIdAcknow, setGmailIdAcknow] = useState("");
  const [password1Acknow, setPassword1Acknow] = useState("");
  const [password2Acknow, setPassword2Acknow] = useState("");

  const [userName, setUserName] = useState(null);

  useEffect(() => {
    let activateTimer;

    if (userName != null) {
      activateTimer = setTimeout(() => {
        const validateUserName = () => {
          if (userName.length == 0) {
            setNameStatus(false);
            setNameAcknow("Enter Name");
          } else {
            setNameStatus(true);
            setNameAcknow("Validated");
          }
        };
        validateUserName();
      }, 300);
    }
    return () => {
      clearTimeout(activateTimer);
    };
  }, [userName]);

  const [phoneNumber, setPhoneNumber] = useState(null);
  useEffect(() => {
    let activateTimer;

    if (phoneNumber != null) {
      activateTimer = setTimeout(() => {
        if (phoneNumber.length == 0) {
          setPhoneStatus("zero");
          setPhoneAcknow("Enter Phone Number");
        } else if (phoneNumber.length >= 10 && phoneNumber.length <= 13) {
          let result = apiCall("existPhoneNumber", phoneNumber);

          if (result == "notExist") {
            setPhoneStatus(true);
            setPhoneAcknow("Validated");
          } else {
            setPhoneStatus(false);
            setPhoneAcknow("Phone Number Aready Exist");
          }
        } else {
          setPhoneStatus("invalid");
          setPhoneAcknow("Enter Valid Phone Number");
        }
      }, 300);
    }
    return () => {
      clearTimeout(activateTimer);
    };
  }, [phoneNumber]);

  const [accountId, setAccountId] = useState(null);
  useEffect(() => {
    let activateTimer;

    if (accountId != null) {
      activateTimer = setTimeout(() => {
        if (accountId.length == 0) {
          setAccountIdStatus("zero");
          setAccountIdAcknow("Enter Account Id");
        } else if (accountId.length == 40) {
          let result = apiCall("existAccountId", accountId);

          if (result == "notExist") {
            setAccountIdStatus(true);
            setAccountIdAcknow("Validated");
          } else {
            setAccountIdStatus(false);
            setAccountIdAcknow("Account Id Already Exist");
          }
        } else {
          setAccountIdStatus("invalid");
          setAccountIdAcknow("Enter Valid Account Number");
        }
      }, 300);
    }
    return () => {
      clearTimeout(activateTimer);
    };
  }, [accountId]);

  const [gmailId, setGmailId] = useState(null);
  useEffect(() => {
    let activateTimer;

    if (gmailId != null) {
      activateTimer = setTimeout(() => {
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|googlemail)\.com$/;
        if (gmailId.length == 0) {
          setGmailIdStatus("zero");
          setGmailIdAcknow("Enter Gmail Id");
        } else {
          if (gmailRegex.test(gmailId)) {
            let result = apiCall("existGmailId", gmailId);
            if (result == "notExist") {
              setGmailIdStatus(true);
              setGmailIdAcknow("Validated");
            } else {
              setGmailIdStatus(false);
              setGmailIdAcknow("Gmail Id Already Exist");
            }
          } else {
            setGmailIdStatus("invalid");
            setGmailIdAcknow("Enter Valid Gmail Id");
          }
        }
      }, 300);
    }
    return () => {
      clearTimeout(activateTimer);
    };
  }, [gmailId]);

  const [password1, setPassword1] = useState(null);

  useEffect(() => {
    let activateTimer;

    if (password1 != null) {
      activateTimer = setTimeout(() => {
        if (password1.length == 0) {
          setPassword1Status("zero");
          setPassword1Acknow("Enter Password");
        } else if (password1.length >= 8 && password1.length <= 16) {
          setPassword1Status(true);
          setPassword1Acknow("Validated");
        } else {
          setPassword1Status("invalid");
          setPassword1Acknow("Password atleast 8 letters");
        }
      }, 300);
    }
    return () => {
      clearTimeout(activateTimer);
    };
  }, [password1]);
  const [password2, setPassword2] = useState(null);
  useEffect(() => {
    let activateTimer;

    if (password2 != null) {
      activateTimer = setTimeout(() => {
        if (password2.length == 0) {
          setPassword2Status("zero");
          setPassword2Acknow("Enter Password");
        } else if (password2.length >= 8 && password2.length <= 16) {
          if (password1 == password2) {
            setPassword2Status(true);
            setPassword2Acknow("Validated");
          } else {
            setPassword2Status(false);
            setPassword2Acknow("Password Mismatch");
          }
        } else {
          setPassword2Status("invalid");
          setPassword2Acknow("Password atlest 8 character");
        }
      }, 300);
    }
    return () => {
      clearTimeout(activateTimer);
    };
  }, [password2]);

  const apiCall = async (type, input) => {
    let serverResposnse = await fetch("http://localhost:3000/api/server", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: input,
        type: type,
        operation: "SignupValidation",
      }),
    });
    //let standardResponse = await serverResposnse.json();
    //setPhoneStatus(standardResponse.status);
  };

  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="flex flex-col h-[550px] w-[340px] rounded-b-[10px]  border border-gray-200 shadow-md">
        <div className="flex flex-col bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-center h-[22%] text-white rounded-t-[10px]">
          <div className="font-extrabold   text-2xl text-sans">
            CrowdFunding Platform
          </div>
          <div className="text-base">create your account</div>
        </div>
        <div className="flex flex-col justify-between items-center h-[78%] p-5 text-sm">
          <div className="flex flex-col w-[100%]">
            <input
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className={`border-${
                nameStatus == null
                  ? "grey"
                  : nameStatus == false
                  ? "red"
                  : "blue"
              }-500 border-2 p-1 rounded-[7px] focus:outline-none focus:ring-0`}
              placeholder="Enter Your Name"
            ></input>
            <h5 className="ml-[10px] mt-[3px]">{nameAcknow}</h5>
          </div>

          <div className="flex flex-col w-[100%]">
            <input
              type="number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              className={`border-${
                phoneStatus == null
                  ? "grey"
                  : phoneStatus == false
                  ? "blue"
                  : "red"
              }-500 border-2 p-1 rounded-[7px] focus:outline-none focus:ring-0`}
              placeholder="Enter Phone Number"
            ></input>

            <h5 className="ml-[10px] mt-[3px]">{phoneAcknow}</h5>
          </div>

          <div className="flex flex-col w-[100%]">
            <input
              type="text"
              className={`border-2 border-${
                accountIdStatus == null
                  ? "grey"
                  : accountIdStatus == false
                  ? "blue"
                  : "red"
              }-500 rounded-[7px] p-1 focus:outline-none focus:ring-0`}
              placeholder="Enter Account Id"
              onChange={(e) => {
                setAccountId(e.target.value);
              }}
            ></input>
            <h5 className="ml-[10px] mt-[3px]">{accountIdAcknow}</h5>
          </div>

          <div className="flex flex-col w-[100%]">
            <input
              type="text"
              onChange={(e) => {
                setGmailId(e.target.value);
              }}
              className={`border-2 border-${
                gmailIdStatus == null
                  ? "grey"
                  : gmailIdStatus == false
                  ? "blue"
                  : "red"
              }-500 rounded-[7px] p-1 focus:outline-none focus:ring-0`}
              placeholder="Enter Gmail Id"
            ></input>
            <h5 className="ml-[10px] mt-[3px]">{gmailIdAcknow}</h5>
          </div>

          <div className="flex flex-col w-[100%]">
            <input
              type="password"
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
              className={`border-2 border-${
                password1Status == null
                  ? "grey"
                  : password1Status == "zero" || password1Status == "invalid"
                  ? "red"
                  : "blue"
              }-500 rounded-[7px] p-1 focus:outline-none focus:ring-0`}
              placeholder="Enter Password"
            ></input>
            <h5 className="ml-[10px] mt-[3px]">{password1Acknow}</h5>
          </div>

          <div className="flex flex-col w-[100%]">
            <input
              type="password"
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
              className={`border-2 border-${
                password2Status == null
                  ? "grey"
                  : password2Status == "zero" ||
                    password2Status == "invalid" ||
                    password2Status == false
                  ? "red"
                  : "blue"
              }-500 rounded-[7px] p-1 focus:outline-none focus:ring-0`}
              placeholder="Re Enter Password"
            ></input>
            <h5 className="ml-[10px] mt-[3px]">{password2Acknow}</h5>
          </div>

          <button className="bg-gradient-to-r from-blue-500 to-purple-500 h-[9%] w-[100%] rounded-[20px] text-white font-bold">
            Sign Up
          </button>
          <div className="">
            Already have an account?
            <span className="font-bold text-purple-800 ml-[5px] cursor-pointer">
              Login here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
