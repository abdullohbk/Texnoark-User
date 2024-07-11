"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/container/page";
import Image from "next/image";
import Profile from "@/images/profile.svg";
import Profilee from '@/images/profilee.svg'
import { ToastContainer } from "react-toastify";
import AuthStore from "@/store/auth/page";
import Cookies from "js-cookie";

function Page() {
  const {GetUser} = AuthStore()
  const [data, setData]:any = useState([])

  async function GetUserData(){
      const id = Number(Cookies.get('id'))
      const response = await GetUser({id})
      setData(response?.data?.data)
      console.log(response);
  }

  useEffect(() => {
    GetUserData()
  }, [])
  return (
    <div>
      <ToastContainer/>
      <div>
        <Container>
          <p className="flex gap-[10px] mt-[20px]">
            <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
              Bosh sahifa
            </span>
            <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
              Accout
            </span>
          </p>
        </Container>
      </div>

      <div>
        <Container>
          <div className="flex gap-[20px] mt-[24px] max-sm:flex-col max-sm:justify-center">
            <div className="bg-white  w-[380px] py-[44px] px-[30px] rounded-md max-sm:mx-auto ">
              <div className="flex justify-between items-center">
                <Image src={Profile} alt="profile" />
                <div className="mr-[60px]">
                  <h4 className="font-bold text-[18px] ">{data?.first_name} {data?.last_name}</h4>
                  <p>ID: {data?.id}</p>
                </div>
                <Image src={Profilee} alt="profile" />
              </div>
              <div className="mt-[53px]">
                <div className="cursor-pointer flex justify-between items-center py-[14px] px-[20px] bg-[#FF6F14] text-white font-medium rounded-md">
                  <p>Shaxsiy malumotlar</p>
                  <Image src={Profilee} alt="profile" />
                </div>
                <div className="cursor-pointer mt-[8px]  flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
                  <p>Xaridlar tarixi</p>
                  <Image src={Profilee} alt="profile" />
                </div>
                <div className="cursor-pointer mt-[8px]  flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
                  <p>Yoqtirgan mahsulotlar</p>
                  <Image src={Profilee} alt="profile" />
                </div>
                <div className="cursor-pointer mt-[8px]  flex justify-between items-center py-[14px] px-[20px] bg-[#F0F0F0] text-black font-medium rounded-md">
                  <p>To’lovlar tarixi</p>
                  <Image src={Profilee} alt="profile" />
                </div>
              </div>
            </div>
            <div className="bg-white  w-[400px] py-[44px] px-[30px] rounded-md max-sm:mx-auto">
                <h4 className="font-black text-[24px] mb-[24px]">Shaxsiy malumotlar</h4>
                <p className="text-[16px] mb-[20px]">Ismi: <span className="font-bold text-18px">{data?.first_name}</span></p>
                <p className="text-[16px] mb-[20px]">Fafilyasi: <span className="font-bold text-18px">{data?.last_name}</span></p>
                <p className="text-[16px] mb-[20px]">Telfon raqami:: <span className="font-bold text-18px">{data?.phone_number}</span></p>
                <p className="text-[16px] mb-[20px]">Manzili: <span className="font-bold text-18px">Surxandaryo.v/Denov.t/</span></p>
                <p className="text-[16px] mb-[20px]">Aniq manzil: <span className="font-bold text-18px">Yoshlik-1.k/12-honodon</span></p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Page;
