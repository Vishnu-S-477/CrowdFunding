import { useEffect, useState } from "react";

function Login() {
  const [identifierStatus, setIdentifierStatus] = useState(null);
  const [passwordStatus, setPasswordStatus] = useState(null);
  const [identifierAcknow, setIdentifierAcknow] = useState(null);
  const [passwordAcknow, setPasswordAcknow] = useState(null);

  const [identifier, setIdentifier] = useState(null);

  useEffect(() => {
    if (identifier == null) {
      return;
    }
    let timer = setTimeout(() => {
      const validateIdentifier = async () => {
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|googlemail)\.com$/;
        const phoneRegex = /^(\+91)?[6-9][0-9]{9}$/;

        if (identifier.length == 0) {
          setIdentifierStatus("zero");
          setIdentifierAcknow("Enter Identifier");
        } else if (phoneRegex.test(identifier)) {
          let result = await apiCall("phoneNumber");
          if (result == "exist") {
            setIdentifierStatus(true);
            setIdentifierAcknow("Verified");
          } else {
            setIdentifierStatus(false);
            setIdentifierAcknow("Invalid identifier");
          }
        } else if (gmailRegex.test(identifier)) {
          let result = await apiCall("gmailId");
          if (result == "exist") {
            setIdentifierStatus(true);
            setIdentifierAcknow("Verified");
          } else {
            setIdentifierStatus(false);
            setIdentifierAcknow("Invalid identifier");
          }
        } else {
          setIdentifierStatus("invalid");
          setIdentifierAcknow("Invalid Format");
        }
      };
      validateIdentifier();
      return () => {
        clearTimeout(timer);
      };
    }, 300);
  }, [identifier]);

  const [password, setPassword] = useState(null);

  useEffect(() => {
    if (password == null) {
      return;
    }
    const validatePassword = () => {
      if (password.length == 0) {
        setPasswordStatus("zero");
        setPasswordAcknow("Enter The Password");
      } else if (password.length >= 8 && password.length <= 16) {
        setPasswordStatus(true);
        setPasswordAcknow("Format matched");
      } else {
        setPasswordStatus("invalid");
        setPasswordAcknow("Password 8 to 16 Character");
      }
    };
    validatePassword();
  }, [password]);

  const apiCall = async (type) => {
    let serverResposnse = await fetch(
      "http://localhost:3000/api/loginValidation",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          identifier,
        }),
      }
    );
    let standardResponse = await serverResposnse.json();
    return standardResponse.status;
  };

  const loginApiCall = async () => {
    let type;
    const phoneRegex = /^(\+91)?[6-9][0-9]{9}$/;
    if (phoneRegex.test(identifier)) {
      type = "phoneNumber";
    } else {
      type = "gmailId";
    }
    let serverResposnse = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, identifier, password }),
    });
  };
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <div className="flex flex-col h-[330px] w-[340px] rounded-b-[10px]  border border-gray-200 shadow-md">
        <div className="flex flex-col bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-center h-[22%] text-white rounded-t-[10px]">
          <div className="font-extrabold   text-2xl text-sans">
            CrowdFunding Platform
          </div>
          <div className="text-base">Login your account</div>
        </div>
        <div className="flex flex-col justify-between items-center h-[78%] p-5 text-sm">
          <div className="flex flex-col w-[100%]">
            <input
              type="string"
              className={`border-${
                identifierStatus == null
                  ? "grey"
                  : identifierStatus == "zero" ||
                    identifierStatus == "invalid" ||
                    identifierStatus == false
                  ? "red"
                  : "blue"
              }-500 border-2 p-1 rounded-[7px] focus:outline-none focus:ring-0`}
              placeholder="Gmail or PhoneNumber"
              onChange={(e) => {
                setIdentifier(e.target.value);
              }}
            ></input>

            <h5 className="ml-[10px] mt-[3px]">{identifierAcknow}</h5>
          </div>

          <div className="flex flex-col w-[100%]">
            <input
              type="password"
              className={`border-2 border-${
                passwordStatus == null
                  ? "grey"
                  : passwordStatus == "zero" || passwordStatus == "invalid"
                  ? "red"
                  : "blue"
              }-500 rounded-[7px] p-1 focus:outline-none focus:ring-0`}
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <h5 className="ml-[10px] mt-[3px]">{passwordAcknow}</h5>
          </div>

          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-[15%] w-[100%] rounded-[20px] text-white font-bold"
            onClick={loginApiCall}
          >
            Login
          </button>
          <div className="">
            New User
            <span className="font-bold text-purple-800 ml-[5px] cursor-pointer">
              Signup here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
