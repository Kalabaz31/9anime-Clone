import React, { useState, useEffect } from "react";
import { RiLockFill, RiUser3Fill, RiCloseFill, RiMailFill } from "react-icons/ri";

import iconLogin from "../assets/images/icon-login2.png";
import iconRegister from "../assets/images/icon-register.png";
import iconForgot from "../assets/images/icon-forgot.png";

const AuthForm = ({ setShowForm, showForm }) => {
  const [register, setFormType] = useState(0);

  return (
    <div className={showForm ? "bg-black/50 min-h-screen absolute flex justify-center items-center -bottom-5 -left-5 -right-5 -top-5" : "hidden"}>
      <div onClick={() => setShowForm(false)} className="absolute -bottom-5 -left-5 -right-5 -top-5 w-full h-full"></div>

      {register === 0 ? (
        <div className="justify-end max-w-[30rem] md:min-w-[42rem] h-90 flex bg-zinc-100 rounded-lg p-3 relative">
          <img src={iconLogin} alt="chopper" className=" hidden md:flex w-2/5 h-full absolute -left-3 bottom-0" />
          <RiCloseFill onClick={() => setShowForm(false)} fontSize={26} className="text-zinc-900 absolute right-4" />
          <div className="flex flex-col gap-5 items-center w-full md:w-3/5 h-full py-2 px-4 ">
            <div className="flex flex-col gap-2 text-center ">
              <h1 className="text-2xl font-bold text-violet-900 ">Member Login</h1>
              <p className="text-center text-sm text-zinc-600">9anime - a better place to watch anime online for free!</p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="relative flex w-full items-center">
                <input type="text" placeholder="Username or email" className="text-xs text-violet-800 w-full bg-violet-200 py-2 px-4 outline-none" />
                <RiUser3Fill fontSize={18} className="text-violet-900 absolute right-3" />
              </div>

              <div className="relative flex w-full items-center">
                <input type="password" placeholder="Password" className="text-xs text-violet-800 w-full bg-violet-200 py-2 px-4 outline-none" />
                <RiLockFill fontSize={18} className="text-violet-900 absolute right-3" />
              </div>

              <div className="flex flex-row w-full justify-between">
                <p className="text-zinc-600 text-xs">Remember me</p>
                <button onClick={() => setFormType(2)} className="text-violet-900 text-xs">
                  Forgot password?
                </button>
              </div>

              <button type="button" className="w-full text-lg bg-violet-900 rounded-lg p-3 ">
                Login
              </button>

              <div className="flex flex-row w-full justify-center gap-2">
                <p className="text-zinc-600 text-xs"> Don't have an account? </p>
                <button onClick={() => setFormType(1)} className="text-violet-900 text-xs cursor-auto">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : register === 1 ? (
        <div className="justify-end max-w-[28rem] md:min-w-[42rem] h-90 flex bg-zinc-100 rounded-lg p-3 relative">
          <img src={iconRegister} alt="chopper" className=" hidden md:flex w-2/5 h-full absolute -left-3 bottom-0" />
          <RiCloseFill onClick={() => setShowForm(false)} fontSize={26} className="text-zinc-900 absolute right-4" />
          <div className="flex flex-col gap-5 items-center w-full md:w-3/5 h-full py-2 px-4 ">
          <div className="flex flex-col gap-2 text-center ">
              <h1 className="text-2xl font-bold text-violet-900 ">Register</h1>
              <p className="text-center text-sm text-zinc-600">When becoming members of the site, you could use the full range of functions.</p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="relative flex w-full items-center">
                <input type="text" placeholder="Your Name" className="text-xs text-violet-800 w-full bg-violet-200 py-2 px-4 outline-none" />
                <RiUser3Fill fontSize={18} className="text-violet-900 absolute right-3" />
              </div>

              <div className="relative flex w-full items-center">
                <input type="text" placeholder="Email" className="text-xs text-violet-800 w-full bg-violet-200 py-2 px-4 outline-none" />
                <RiMailFill fontSize={18} className="text-violet-900 absolute right-3" />
              </div>

              <div className="relative flex w-full items-center">
                <input type="password" placeholder="Your Password" className="text-xs text-violet-800 w-full bg-violet-200 py-2 px-4 outline-none" />
                <RiLockFill fontSize={18} className="text-violet-900 absolute right-3" />
              </div>

              <div className="relative flex w-full items-center">
                <input type="password" placeholder="Repeat your password" className="text-xs text-violet-800 w-full bg-violet-200 py-2 px-4 outline-none" />
                <RiLockFill fontSize={18} className="text-violet-900 absolute right-3" />
              </div>

              <button type="button" className="w-full text-lg bg-violet-900 rounded-lg p-3 ">
                Register
              </button>

              <div className="flex flex-row w-full justify-center gap-2">
                <p className="text-zinc-600 text-xs">Already have an account? </p>
                <button onClick={() => setFormType(0)} className="text-violet-900 text-xs cursor-auto">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="justify-end max-w-[28rem] md:min-w-[42rem] h-90 flex bg-zinc-100 rounded-lg p-3 relative">
          <img src={iconForgot} alt="chopper" className=" hidden md:flex w-2/5 h-full absolute -left-3 bottom-0" />
          <RiCloseFill onClick={() => setShowForm(false)} fontSize={26} className="text-zinc-900 absolute right-4" />
          <div className="flex flex-col gap-5 items-center  w-full md:w-3/5 h-full py-2 px-4 ">
            <div className="flex flex-col gap-2 text-center ">
              <h1 className="text-2xl font-bold text-violet-900 ">Reset Password</h1>
              <p className="text-center text-sm text-zinc-600">We will send an email to your box, just follow that link to set your new password.</p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="relative flex w-full items-center">
                <input type="text" placeholder="Username or email" className="text-xs text-violet-800 w-full bg-violet-200 py-2 px-4 outline-none" />
                <RiUser3Fill fontSize={18} className="text-violet-900 absolute right-3" />
              </div>

              <button type="button" className="w-full text-lg bg-violet-900 rounded-lg p-3 ">
                Reset
              </button>

              <div className="flex flex-row w-full justify-center gap-2">
                <button onClick={() => setFormType(0)} className="text-violet-900 text-xs cursor-auto">
                  Back to Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
