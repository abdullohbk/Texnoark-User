import React from 'react';
import { Carousel } from 'antd';
import Container from '../container/page';
import './style.css';
import Image from 'next/image';
import Img from '@/images/Mask group.png'

function Page({images, position}:any) {
  const datas = images.filter((e:any) => {
    return e?.position == position;
  })
  return (
    <>
    <div>
      <Container>
        <Carousel arrows infinite={true} autoplay={true} className='rounded-lg overflow-hidden custom-carousel'>
              {
                datas?.map((e:any, i:number) => {
                  return <div key={i} className='carousel'>
                      <img src={e?.image} alt='Img' className='w-[100%] h-[100%] object-contain'/>
                  </div>
                })
              }
        </Carousel>
      </Container>
    </div>
  </>
  )
}

export default Page;
