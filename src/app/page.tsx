import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center w-full p-6 lg:p-0">
      <div className="flex flex-col justify-center items-start lg:m-12 m-4">
        <h1 className="font-bold text-[32px] lg:text-[44px]">Welcome To Our Website</h1>
        <p className="w-full lg:w-[571px] text-[18px] lg:text-[32px] mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard.
        </p>
        <button className="bg-[#121212] text-[#FFFFFF] w-full lg:w-[237px] h-[48px] lg:h-[66px] text-[20px] lg:text-[28px] mt-4">
          Contact Us
        </button>
      </div>
      <div className="flex justify-center items-center mt-8 lg:mt-0">
        <Image
          src={"/images/figma_image.png"}
          alt="hero_image"
          width={350}
          height={300}
          className="lg:w-[502px] lg:h-[465px] object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
