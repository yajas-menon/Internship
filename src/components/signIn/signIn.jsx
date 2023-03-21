import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import main from "../images/1.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./SignIn.css";
const SignIn = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(true);
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");
  const [button, setButton] = useState("Next");
  let [timer, setTimer] = useState(10);
  let countdown = 0;
  useEffect(() => {
    countdown = setInterval(() => {
      if (timer > 0) {
        timer = timer - 1;
        setTimer(timer);
      }
    }, 1000);
  }, [timer]);
  const set1 = () => {
    setNext1(true);
    setemail("");
    setPass("");
  };

  const Set = () => {
    navigate("/otp");
    localStorage.setItem("a",1);
  };

  const values = (e) => {
    setemail(e.target.value);
    console.log(email);
  };
  const a = () => {
    setButton("Next ->");
  };
  const b = () => {
    setButton("Next");
  };
  const [next1, setNext1] = useState(true);
  const next = () => {
    if (email.length === 0 || pass.length === 0) {
      alert("Please enter Required Details");
      return;
    }
    setNext1(false);
    setTimer(10);
  };

  return (
    <div className="flex h-[100vh] grid-cols-2 md:gap-[1rem] w-full">
      <div className="col-span-1 flex gap-[0.5rem] flex-col w-full items-center justify-center">
        {next1 ? (
          <>
            <p className="md:font-bold lg:pr-[8.8rem] md:py-[0.9rem] text-4xl">
              Welcome to <br /> SystemPackage
            </p>
            <input
              placeholder="Email Id"
              type="text"
              required
              onChange={(e) => values(e)}
              className="hover:border-blue-900 rounded-[12px] text-center text-lg w-[420px] h-[66px] bg-slate-300 focus:border-blue-900 border-[1px]"
            />
            <br />
            <input
              placeholder="Password"
              type="Password"
              required
              onChange={(e) => setPass(e.target.value)}
              className="hover:border-blue-900 mt-0 rounded-[12px] text-center text-lg w-[420px] h-[66px] bg-slate-300 focus:border-blue-900 border-[1px]"
            />
            <button
              onClick={() => next()}
              onMouseEnter={a}
              onMouseLeave={b}
              class="bg-[#0858F7] my-[1.4rem] w-[420px] rounded-[12px] hover:bg-[#0858F7] text-white font-bold py-2 px-4 border-b-4 border-[#0858F7] text-2xl hover:border-[##0858F7]h-[56px] "
            >
              {button}
            </button>
            <p className=" font-bold text-base text-[#0858F7] cursor-pointer">
              Forgot your Password ?
            </p>
            <p className="text-xl my-[1rem]">
              Not a member ?{" "}
              <span className="text-blue-500 cursor-pointer underline">
                Create Account
              </span>
            </p>
          </>
        ) : (
          <div className="">
            <p className="font-bold md:pr-[6.8rem] pl-[2.3rem] md:py-[0.9rem] text-4xl">
              Enter the Verification <br /> code to continue
            </p>
            <p className="text-2xl pl-[2.3rem] md:py-[1rem]">
              We sent to <span className="text-blue-400">{email}</span>. If you{" "}
              <br /> don't see it, check your spam
            </p>
            <div className="gap-[1rem] pl-[2rem] py-[3rem] grid-cols-6 flex">
              <div className="rounded-2xl box flex col-span-1 h-[60px] items-center justify-center cursor-pointer border-[1px] w-[60px] border-blue-500">
                <h2 className="text-white">.</h2>
              </div>
              <div className="rounded-2xl pl-[2rem] flex col-span-1 h-[60px] cursor-pointer border-[1px] w-[60px] border-blue-500"></div>
              <div className="rounded-2xl flex col-span-1 h-[60px] cursor-pointer border-[1px] w-[60px] border-blue-500"></div>
              <div className="rounded-2xl flex col-span-1 h-[60px] cursor-pointer border-[1px] w-[60px] border-blue-500"></div>
              <div className="rounded-2xl flex col-span-1 h-[60px] cursor-pointer border-[1px] w-[60px] border-blue-500"></div>
              <div className="rounded-2xl flex col-span-1 h-[60px] cursor-pointer border-[1px] w-[60px] border-blue-500"></div>
            </div>
            <div className="flex grid-cols-2 w-[30rem]">
              <div className="grid col-span-1 w-full">
                <p
                  className="text-blue-700 pl-[2.3rem] text-2xl cursor-pointer"
                  onClick={() => set1()}
                >
                  Back
                </p>
              </div>
              <div className="col-span-1 w-full grid">
                {timer === 0 ? (
                  <div>
                    <p
                      className="text-2xl ml-[4rem] text-blue-600 cursor-pointer"
                      onClick={() => Set()}
                    >
                      Resend Code
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-2xl">
                      Resend OTP in 00:{timer < 10 ? 0 : null}
                      {timer}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="pt-[2rem]">
              <p className="text-2xl px-[3rem]">
                Not Member ?
                <span className="text-blue-600 underline cursor-pointer">
                  {" "}
                  Create Account
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full items-center justify-center md:mt-[1rem] hidden md:block col-span-1">
        <div>
          <div
            className={!hover ? "hidden transition ease-out delay-600" : null}
          >
            <div className="md:h-[640px]  cursor-pointer abc flex flex-col md:w-[550px] rounded-[3rem] bg-[#053594]">
            <div className=""> 
            <button className="text-white ml-[34.2rem] mt-[18rem] absolute pb-[0.5rem] rounded-[1200px] h-[3rem] w-[3rem] border-white border-[2px] text-center items-center justify-center">
                <RightOutlined />
              </button>
              </div> 
            </div>
            <div className="h-[640px] cursor-pointer abcd absolute flex flex-col w-[550px] rounded-[3rem] bg-[#0646C6]">
              <button className="text-white ml-[34.2rem] mt-[18rem] absolute pb-[0.5rem] rounded-[1200px] h-[3rem] w-[3rem] border-white border-[2px] text-center items-center justify-center">
                <RightOutlined />
              </button>
            </div>
          </div>
          <div
            onMouseEnter={() => setHover(false)}
            onMouseLeave={() => setHover(true)}
            className="cursor-pointer h-[860px] absolute flex flex-col w-[650px] rounded-[3rem] bg-[#0858F7]"
          >
            <div className="">
              <img
                src={main} alt="banner"
                className="bg-[#0858F7] mt-[3.3rem] pl-[3.4rem]"
              />
              <div
                className={
                  hover
                    ? "hidden flex-row absolute"
                    : "flex transition ease-in-out duration-300 flex-row absolute"
                }
              >
                <button className="text-white absolute mb-[2rem] rounded-[1200px] h-[3rem] w-[3rem] border-white border-[2px] text-center items-center justify-center flex">
                  <LeftOutlined />
                </button>

                <button className="text-white absolute ml-[40.5rem] rounded-[1200px] h-[3rem] w-[3rem] border-white border-[2px] text-center items-center justify-center flex">
                  <RightOutlined />
                </button>
              </div>
            </div>

            <div className="flex px-[5rem] gap-[1rem] flex-col">
              <div className="h-[40px] text-semibold text-center items-center rounded-2xl text-white bg-black w-[70px]">
                <p className="justify-center pt-[0.4rem]">NEW</p>
              </div>
              <div className="text-white gap-[1.5rem] flex flex-col text-2xl">
                <p className="font-bold text-4xl">
                  Developer Handoff <br /> Improvements
                </p>
                <p>
                  You'll see a highlight around Symbols on the Canvas and in the
                  Inspector.
                </p>
              </div>
              <div className="flex grid-cols-2 w-full">
                <div className="col-span-1 gap-[1rem] py-[1.9rem] flex flex-row w-full">
                  <span className="dot"></span>
                  <span className="dot1 hover:bg-white bg-blue-400"></span>
                  <span className="dot1 hover:bg-white bg-blue-400"></span>
                  <span className="dot1 hover:bg-white bg-blue-400"></span>
                </div>

                <div className="text-white flex justify-end py-[1rem] w-full text-2xl font-semibold col-span-1">
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
