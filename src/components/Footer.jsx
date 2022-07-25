import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Phone, Pinterest, Twitter } from "@material-ui/icons";
import React from 'react'

function Footer() {

    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'
  return <div className='flex items-center justify-around p-2'>
    <div className='flex-1 flex flex-col flex-wrap p-2'>
        {/* to store the information*/}
        <h1 className='text-[25px]'>
            shop.com
        </h1>
        <p >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Deserunt iste nesciunt earum quo, voluptate tenetur ab quaerat aspernatur a temporibus ipsam, tempora quia iusto,
          velit officiis praesentium vitae expedita fugiat?

        </p>
        <div className='flex-item-center justify-center mt-3 self-start'>
            <div className={socialStyle +  ' bg-blue-700'}>
                <Facebook/>
            </div>
            <div className={socialStyle +  ' bg-orange-500'}>
                <Instagram/>
            </div>
            <div className={socialStyle +  ' bg-sky-400'}>
                <Twitter/>
            </div>
            <div className={socialStyle +  ' bg-red-600'}>
                <Pinterest/>
            </div>
        </div>
    </div>
    <div className='flex-1 flex-col p-2'>
        <div className='flex m-3'>
            <LocationOnOutlined/>
            <p className='pl-3'> DELHI</p>
        </div>
        <div>
            <div className='flex m-3'>
                <LocalPhoneOutlined/>
                <p className='pl-3'>234xxxxx</p>
            </div>
            <div className='flex m-3'>
                <EmailOutlined/>
                <p className='pl-3'>shop@gmail.com</p>
            </div>
        </div>
        {/* contact information*/}
    </div>
    </div>;
  
}

export default Footer