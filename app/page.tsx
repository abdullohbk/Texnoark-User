"use client"
import Carusel from '../components/carusel/page'
import { ArrowRightOutlined, BarChartOutlined, HeartOutlined, MenuOutlined, PhoneOutlined } from "@ant-design/icons";
import Container from '../components/container/page'
import './globals.css'
import {Button } from 'antd';
import Image from 'next/image';
import Footer_Banner from '../images/Footer_Banner.png'
import Swiper from '../components/swiper/page'
import useCategoryStore from '@/store/categories/page';
import { useEffect, useState } from 'react';
import Aksiya from "@/images/aksiya.svg";
import Telefon from "@/images/mobile.svg";
import WashingCard from "@/images/washing_machine.svg";
import Desktop from '@/images/desktop.svg'
import Konditseoner from '@/images/konditseoner.svg';
import Link from 'next/link';
import useProductStore from '@/store/products/page';
import { ToastContainer } from 'react-toastify';
import useLikeStore from '@/store/likes/page';
import Cookies from 'js-cookie';
import ADSStore from '@/store/ads/page';




export default function Home() {
  const {categories, getCategories} = useCategoryStore()
  const iconCategory = [Aksiya, Telefon, WashingCard, Desktop, Konditseoner]
  const {products, getProducts, getPopularProducts, popular_products} = useProductStore()
  const {getLikes} = useLikeStore()
  const {banner, getBanner } = ADSStore()


  useEffect(() =>{
    getCategories()
    getProducts()
    const id = Number(Cookies.get('id'))
    getLikes({id})
    getPopularProducts()
    getBanner()
  }, [])
  return (
    <>
    <ToastContainer/>
      <div className="mt-[24px]">
        <Carusel images={banner} position={'1'}/>
      </div>

      <div className='mt-[60px] categ '>
         <Container>
           <div className='flex items-center flex-wrap justify-between gap-[20px] max-2xl:justify-center'>
                {
                  categories.slice(0,5).map((e:any, i:number) => {
                    return (
                      <Link href={'/categories'} key={i} onClick={() => localStorage.setItem('CategoryId', JSON.stringify(e.id))}>
                          <div className='flex items-center justify-between w-[440px] max-lg:w-[300px] max-lg:px-[20px] h-[120px] py-[45px] px-[59px] bg-white rounded-xl cursor-pointer card'>
                          <Image src={iconCategory[i]} alt='Logo' width={30} height={30}/>
                          {e.name}
                          <ArrowRightOutlined />
                      </div>
                      </Link>
                    )
                  })   
                }
               <Link href={'/categories'} onClick={() => localStorage.setItem('CategoryId', JSON.stringify(0))}>
                  <div  className='flex items-center justify-between w-[440px] max-lg:w-[300px] max-lg:px-[20px] h-[120px] py-[45px] px-[59px] bg-white rounded-xl cursor-pointer card'>
                            <MenuOutlined />
                              Hammasi
                              <ArrowRightOutlined />
                    </div>
               </Link>
           </div>
         </Container>
      </div>

      <div className='mt-[64px]'>
        <Container>
           <div className='flex justify-between items-center max-sm:px-[10px]'>
             <h1 className='font-bold text-[32px] max-sm:text-[20px]'>Ommabob mahsulotlar</h1>
             <Button className='btn_all'>Hammasi <ArrowRightOutlined /></Button>
           </div>

           <div className='mt-[24px]'>
              <Swiper data={products}/>
           </div>
        </Container>
      </div>

      <div className='mt-[64px]'>
        <Container>
           <div className='flex justify-between items-center max-sm:px-[10px]'>
             <h1 className='font-bold text-[32px] max-sm:text-[20px]'>Populyarniy mahsulotlar</h1>
             <Button className='btn_all'>Hammasi <ArrowRightOutlined /></Button>
           </div>

           <div className='mt-[24px]'>
           <Swiper data={popular_products}/>
           </div>
        </Container>
      </div>  

      <div className='mt-[64px]'>
        <Container>
           <div className='flex justify-between items-center max-sm:px-[10px]'>
             <h1 className='font-bold text-[32px] max-sm:text-[20px]'>Aksiyadagi mahsulotlar</h1>
             <Button className='btn_all'>Hammasi <ArrowRightOutlined /></Button>
           </div>

           <div className='mt-[24px]'>
           <Swiper data={products}/>
           </div>
        </Container>
      </div>  

      <div className='mt-[67px]'>
        <Container>
          <div>
          <Carusel images={banner} position={'2'}/>
          </div>
        </Container>
      </div>
    </>
  );
}
