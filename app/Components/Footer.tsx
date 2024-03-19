"use client";

import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const DesignArray = [
    { name: "Logos" },
    { name: "Flyers" },
    { name: "Banners" },
    { name: "Youtube Banners" },
    { name: "UI/UX Design" },
    { name: "Motion Graphics" },
    { name: "Illustrations" },
    { name: "Infographics" },
]

const PrintingArray = [
    { name: "T Shirt" },
    { name: "Large Format" },
]

const Footer = () => {
    return (
        <>
        <div className="bg-main px-12 max-sm:px-6">
            <div className="footer_upper text-white p-3 py-5 lg:flex-row flex gap-3 md:flex-col max-sm:flex-col">
                <div className="footer_left lg:w-[30%] md:w-full max-sm:w-full">
                    <p className="text-[20px] font-bold">Promax Printing Hub</p>
                    <div className="flex gap-4 mt-2">
                        <FaFacebook size={25}/>
                        <AiFillInstagram size={25}/>
                        <FaXTwitter size={25}/>
                    </div>
                </div>

                <div className="footer_center lg:w-[40%] md:w-full max-sm:w-full flex max-sm:flex-col gap-8 md:mt-[7%] md:gap-[10%]">
                    <div className="center_footer_one">
                        <p className="text-[20px] font-bold my-2">Design</p>

                        <div className="grid grid-cols-2 gap-3">
                            {DesignArray.map((design, index) => (
                                <div key={index} className="">
                                    <p>{design.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="center_footer_two">
                        <p className="text-[20px] font-bold my-2">Printing</p>

                        <div className="grid grid-cols-2 gap-3">
                            {PrintingArray.map((print, index) => (
                                <div key={index} className="">
                                    <p>{print.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer_right lg:w-[30%] md:w-1/2 self-end max-sm:w-full">
                    <form>
                        <input type="text"
                        placeholder="Enter your mail to subscribe to our newsletter"
                        required
                        className="p-2 bg-white rounded-xl outline-none border-none w-full my-5"
                        />
                        <div className="subscribe_button flex justify-end">
                            <button type="submit" className="variant-bg rounded-full p-2 text-white w-[30%]">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="footer_lower py-5">
                <p className="text-[14px] text-center text-white">&copy; 2024. All rights reserved</p>
            </div>

            
        </div>

        <div className="footer_last_note bg-white text-right px-3 py-2 max-sm:mt-[5%] max-sm:text-[8px]">
                <p className="font-semibold">Developed by Elrey @ +2349072033837</p>
        </div>
        </>
    )
}

export default Footer