import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/Tfi";
import { BsEye, BsEyeSlash } from "react-icons/Bs";
import Link from "next/link";
import axios from "axios";

export default function index() {
  const [type, setType] = useState("password");
  const[data,setData]=useState({
    email:"",
    password:""
  })
  const handleSubmit=async(val:any)=>{
console.log(val)
    axios.post(`http://localhost:3080/login`,val).then((res)=>console.log(res)
    ).catch((err)=>{
      console.log("error",err)
  
    })
  }

  return (
    <div className="">
    <div className="bg-black flex justify-center min-h-screen p-4  items-center  ">
      <div className="bg-[#282828] rounded-xl   p-12  flex md:w-5/12 lg:w-4/12 flex-col items-center relative">
        <div className="absolute bg-white  bg-opacity-40 rounded-full w-28 h-28 top-[-60px]  flex justify-center items-center">
          <i>
            <FaUser className="w-16 h-16 z-50 text-[#282828] transition-all duration-700 " />
          </i>
        </div>
        <div className="flex flex-col w-full  items-center pt-8 ">
          <div className="flex justify-start w-full">
            <p className="text-white ">Email</p>
          </div>
          <div className="pt-1  w-full">
            <input
              type="email"
              required
            
              className="bg-opacity-20 bg-white border-none outline-none rounded-lg text-[#eff1f6bf]  p-2 w-full"
              onChange={(e)=>setData({
                email:e.target.value,
                password:data.password
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
                email:data.email,
                password:e.target.value
              })}/>
            {type == "text" ? (
              <i
                className="relative text-white left-[245px] md:left-[210px] xl:left-[380px] top-[-25px] cursor-pointer "
                onClick={() => setType("password")}
              >
                <BsEyeSlash />
              </i>
            ) : (
              <i
                className="relative text-white left-[245px] md:left-[210px] xl:left-[380px]  top-[-25px] cursor-pointer"
                onClick={() => setType("text")}
              >
                <BsEye />
              </i>
            )}
          </div>
          <div className=" w-full text-[#eff1f6bf]   flex justify-end">
            <p className="cursor-pointer hover:text-white">Forgot password?</p>
          </div>
          <div className="pt-4">
            <Button color="green" className="px-6 py-3" 
          onClick={()=>handleSubmit(data)}>
              Submit
            </Button>
          </div>
        </div>

        <div className="w-full flex items-center  py-4">
          <hr className="w-5/12" />
          <p className="text-[#eff1f6bf] w-2/12 flex justify-center ">OR</p>
          <hr className="w-5/12" />
        </div>
        <div className="w-full flex justify-center gap-4">
          <p className="bg-white bg-opacity-20  w-12 h-12 flex justify-center items-center rounded-full cursor-pointer hover:shadow-inner hover:shadow-gray-100">
            <i>
              <FcGoogle />
            </i>
          </p>
          <p className="bg-white bg-opacity-20  w-12 h-12 flex justify-center items-center rounded-full cursor-pointer hover:shadow-inner hover:shadow-gray-100 text-[#eff1f6bf]">
            <i>
              <TfiLinkedin />
            </i>
          </p>
        </div>
        <div className="pt-8 leading-3 flex flex-wrap gap-2 justify-center items-center">
          <p className="text-[#eff1f6bf]">
            Have not account yet?
            
          </p>
          <Link href="/signup">
          <span className="text  cursor-pointer hover:text-[#E91E63] text-pink-800 ">
              Create Account
            </span>
            </Link>
        </div>
        
      </div>
     
    </div>
    </div>
  );
}
