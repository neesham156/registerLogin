import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { FaUser } from "react-icons/fa";

import { BsEye, BsEyeSlash } from "react-icons/Bs";
import Link from "next/link";
import axios from "axios";
const bcrypt = require("bcryptjs");

export default function index() {
  const [type, setType] = useState("password");
const [data,setData]=useState({
  name:"",
  username:"",
  email:"",
  password:"",
  confirm_password:"",
})
console.log("data",data)
const handleSubmit=async(val:any)=>{

  axios.post(`http://localhost:3080/register`,val).then((res)=>console.log(res)
  ).catch((err)=>{
    console.log("error",err)

  })



}
  return (
    <div className="">
      <div className="bg-black flex justify-center min-h-screen p-2  items-center  ">
        <div className="bg-[#282828] rounded-xl   p-8  flex  md:w-4/12 flex-col items-center relative">
          <div className="absolute bg-white  bg-opacity-40 rounded-full w-28 h-28 top-[-60px]  flex justify-center items-center">
            <i>
              <FaUser className="w-16 h-16 z-50 text-[#282828] transition-all duration-700 " />
            </i>
          </div>
          <div className="flex flex-col w-full  items-center pt-8 ">
            <div className="flex justify-start w-full">
              <p className="text-white ">Name</p>
            </div>
            <div className="pt-1  w-full">
              <input
                type="text"
                required
                value={data.name}
                className="bg-opacity-20 bg-white border-none outline-none rounded-lg text-[#eff1f6bf]  p-2 w-full"
                onChange={(e)=>setData({
                  name:e.target.value,
                 
  username:data.username,
  email:data.email,
  password:data.password,
  confirm_password:data.confirm_password
                })}
              />
            </div>
            <div className="flex justify-start w-full pt-6">
              <p className="text-white ">Userame</p>
            </div>
            <div className="pt-1  w-full">
              <input
                type="text"
                required
                value={data.username}
                className="bg-opacity-20 bg-white border-none outline-none rounded-lg text-[#eff1f6bf]  p-2 w-full"
                onChange={(e)=>setData({
                  name:data.name,
                  username:e.target.value,
                  email:data.email,
                  password:data.password,
                  confirm_password:data.confirm_password
                })}
              />
            </div>
            <div className="flex justify-start w-full pt-6">
              <p className="text-white ">Email</p>
            </div>
            <div className="pt-1  w-full">
              <input
                type="email"
                required
                value={data.email}
                className="bg-opacity-20 bg-white border-none outline-none rounded-lg text-[#eff1f6bf]  p-2 w-full"
                onChange={(e)=>setData({
                  name:data.name,
                  username:data.username,
                  email:e.target.value,
                  password:data.password,
                  confirm_password:data.confirm_password
                })}
              />
            </div>
            <div className="flex justify-start w-full pt-6">
              <p className="text-white ">Password</p>
            </div>
            <div className="pt-1  w-full ">
              <input
                type={type}
                name="password"
                required
                value={data.password}
                className="bg-opacity-20 bg-white border-none outline-none rounded-lg text-[#eff1f6bf]  p-2 w-full"
                onChange={(e)=>setData({
                  name:data.name,
                  username:data.username,
                  email:data.email,
                  password:e.target.value,
                  confirm_password:data.confirm_password
                })}
                
              />
              {type == "text" ? (
                <i
                  className="relative text-white left-[245px] md:left-[370px] xl:left-[410px] top-[-27px] cursor-pointer  "
                  onClick={() => setType("password")}
                >
                  <BsEyeSlash />
                </i>
              ) : (
                <i
                  className="relative text-white left-[245px] md:left-[370px] xl:left-[410px]  top-[-27px] cursor-pointer"
                  onClick={() => setType("text")}
                >
                  <BsEye />
                </i>
              )}
            </div>
            <div className="flex justify-start w-full pt-2">
              <p className="text-white ">Confirm Password</p>
            </div>
            <div className="pt-1  w-full ">
              <input
                type="password"
                name="password"
                required
                value={data.confirm_password}
                className="bg-opacity-20 bg-white border-none outline-none rounded-lg text-[#eff1f6bf]  p-2 w-full"
                onChange={(e)=>setData({
                  name:data.name,
                  username:data.username,
                  email:data.email,
                  password:data.password,
                  confirm_password:e.target.value
                })}
              />
            </div>

            <div className="pt-4">
              <Button color="green" className="px-6 py-3" onClick={()=>handleSubmit(data)}>
                Submit
              </Button>
            </div>
          </div>

          <div className="pt-8 leading-3 flex flex-wrap gap-2 justify-center items-center">
            <p className="text-[#eff1f6bf]">Already Account ?</p>
            <Link href="/login">
              <span className="text  cursor-pointer text-[#E91E63] ">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
