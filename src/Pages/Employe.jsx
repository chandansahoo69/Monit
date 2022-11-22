import React, { useState } from "react";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { BsFileEarmarkSpreadsheet, BsFillKeyFill } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { CgLoadbarDoc } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { AiFillBank, AiFillHome, AiFillLeftCircle } from "react-icons/ai";
import Calendar from "../components/Calendar";

const Employe = () => {
  const [toggle, setToggle] = useState(false);

  const toggleProfile = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-between shadow-md py-4 px-6 pl-20 rounded-2xl">
          <h1 className="text-heading font-bold text-3xl font-sans">Monit</h1>
          <div>
            <img
              onClick={toggleProfile}
              className="h-12 w-12 rounded-full border-gray-500 cursor-pointer border-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd256TcC6vcaQ99TYzoP0pBbch9_Q-bbrmw&usqp=CAU"
              alt="user"
            />
            {toggle && (
              <div className="absolute top-0 right-0 z-50 rounded-b-xl bg-purple-300 shadow-lg">
                <div className="bg-blue-200 rounded-b-xl shadow-md flex flex-col p-4 gap-4">
                  <AiFillLeftCircle
                    color="white"
                    className="cursor-pointer"
                    onClick={toggleProfile}
                  />
                  <div className="flex pb-2">
                    <div className="">
                      <img
                        className="h-24 w-24 rounded-full border-gray-500 border-2"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOd256TcC6vcaQ99TYzoP0pBbch9_Q-bbrmw&usqp=CAU"
                        alt="user"
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="">
                        <h1 className="font-semibold">User Name</h1>
                        {/* <span class="h-10 w-full bg-pink-600"></span> */}
                        <p className="text-sm">Designation</p>
                      </div>
                      <button className="py-1 px-4 bg-blue-600 rounded-full text-white shadow-md">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start p-5 gap-3">
                  <button className="flex items-center gap-2 cursor-pointer">
                    <BsFillKeyFill />
                    <p>Change Password</p>
                  </button>
                  <button className="flex items-center gap-2 cursor-pointer">
                    <IoLogOutOutline />
                    <p>Logout</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4 h-full ">
        <div class="col-start-1 col-end-2 rounded-sm">
          <div className="bg-blue-200 px-6 py-10 h-full">
            <AiFillHome className="h-12 text-white" size={36} />
            <RiProfileLine className="h-12 text-white my-10" size={36} />
            <BsFileEarmarkSpreadsheet
              className="h-12 text-white my-10"
              size={36}
            />
            <AiFillBank className="h-12 text-white my-10" size={36} />
            <MdOutlineFreeCancellation
              className="h-12 text-white my-10"
              size={36}
            />
            <TbCalendarTime className="h-12 text-white my-10" size={36} />
            <CgLoadbarDoc className="h-12 text-white" size={36} />
          </div>
        </div>

        <div class="col-start-3 col-end-12 rounded-sm lg:mt-20 mt-6">
          <div className="bg-blue-500 text-white lg:px-12 px-5 flex justify-between rounded-2xl shadow-lg opacity-90">
            <div className="flex flex-col items-start gap-5 lg:py-4 py-5 text-left">
              <h1 className="font-bold lg:text-xl text-lg">
                Hello Employee Name !
              </h1>
              <p className="">
                It seems like you have a lot of work for today.
                <br /> So let’s start
              </p>
            </div>
            <div className="flex">
              <img
                className="h-36 w-36 lg:block hidden"
                src="https://i.pinimg.com/originals/91/30/da/9130da19ff4982a9f4931b3b14e4d09a.jpg"
                alt="image"
              />
              <div className="text-black lg:px-4 py-2">
                <p className="bg-white lg:text-lg text-sm lg:px-6 px-2 py-1 rounded-2xl shadow-lg">
                  5 july, 2022
                </p>
              </div>
            </div>
          </div>

          <Calendar />

          <div className="flex lg:flex-row flex-col lg:justify-between items-center py-12 gap-3">
            <div className="bg-green-300 rounded-xl p-4 lg:w-5/12 text-left w-full">
              <h1 className="text-lg font-bold">Upcomping Leaves</h1>
              <ul className="list-disc p-4">
                <li>Diwali</li>
                <li>Diwali</li>
                <li>Diwali</li>
                <li>Diwali</li>
                <li>Diwali</li>
              </ul>
            </div>
            <div className="bg-orange-200 rounded-xl p-4 lg:w-5/12 text-left w-full">
              <h1 className="text-lg font-bold">Upcomping Holidays</h1>
              <ul className="list-disc p-4">
                <li>Diwali</li>
                <li>Diwali</li>
                <li>Diwali</li>
                <li>Diwali</li>
                <li>Diwali</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employe;
