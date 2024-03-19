"use client";

import { BiSolidPhoneCall } from "react-icons/bi";
const Nav = () => {
    return (
        <div className="w-full flex justify-between ">
            <div className="nav_left flex justify-between items-center xl:w-[65%] lg:w-[65%] max-sm:w-[70%] max-sm:px-[4%] bg-main px-[10%] text-white py-4">
                <p><a href="/">Home</a></p>
                <p><a href="/">About</a></p>
                <p><a href="/">Contact</a></p>

                <div className="bg-white rounded-full px-3 p-2 cursor-pointer">
                    <p className="text_bg"><a href="/order">Order Now</a></p>
                </div>
            </div>

            <div className="nav_right flex gap-4 items-center xl:w-[65%] lg:w-[35%] md:w-[45%] max-sm:flex-col max-sm:items-center max-sm:w-[30%] justify-center py-4">
                <BiSolidPhoneCall />
                <p className="text_bg">+234 705 233 8627</p>
            </div>
        </div>
    )
}

export default Nav