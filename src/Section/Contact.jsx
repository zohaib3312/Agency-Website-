import React from 'react'
import { call, fb, insta, map, sms, twitter, yt } from '../assets/icons'
import Cube from '../assets/images/cube.png'

const Contact = () => {
  return (

<>

    <section id='contact' className='w-full bg-slate-200 flex flex-col lg:flex-grow gap-10 h-fit p-4 lg:p-20 justify-center items-center'>
      <div className='flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-20  '>
        <div className='flex justify-center items-start  flex-col gap-4 w-full'>

          <h1 className='text-green-800 font-bold text-[35px]'>Contact info</h1>
          <div id='phone' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600 ' >
            <span className='bg-green-400  p-3 rounded-full '><img src={call} alt="call icon " width={22} height={22} />
            </span>+92 315-6113665

          </div>
          <div id='mail' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600 ' >
            <span className='bg-green-400  p-3 rounded-full '><img src={sms} alt="call icon " width={22} height={22} />
            </span> Za809475@gmail.com

          </div>
          <div id='address' className='flex justify-center items-center gap-4 text-lg font-semibold text-gray-600 ' >
            <span className='bg-green-400  p-3 rounded-full '><img src={map} alt="call icon " width={22} height={22} />
            </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit

          </div>

          <div id='logos' className='flex  justify-center items-center gap-4 mt-10 '>
            <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'>
              <img src={fb} alt="facebook" width={25} height={25} />
            </span>
            <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'>
              <img src={insta} alt="facebook" width={25} height={25} />
            </span>
            <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'>
              <img src={yt} alt="facebook" width={25} height={25} />
            </span>
            <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'>
              <img src={twitter} alt="facebook" width={25} height={25} />
            </span>
          </div>

        </div>

        <div className='flex flex-col justify-center items-center gap-2 w-full '>
          <input type="text" placeholder='Enter your Name' className='px-4 py-4 w-full border-2 border-green-500 rounded-lg text-[18px]  bg-slate-100 focus:outline-none focus:border-green-600 ' />
          <input type="email" placeholder='Enter your Email' className='px-4 py-4 w-full border-2 border-green-500 rounded-lg text-[18px]  bg-slate-100 focus:outline-none focus:border-green-600 ' />
          <textarea  className='px-4 py-4 w-full border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600 '  name="" id="" cols="30" rows="5" placeholder='Enter your Message' ></textarea>
          <button className='bg-green-700 text-white px-4 py-3 w-full rounded-lg hover:bg-slate-800 cursor-pointer '>Submit</button>
        </div>

      </div>



    </section>


     
    <img src={Cube} alt="" className='w-full absolute top-[3550px]  hidden  xl-block' />
    </>    
  )

}

export default Contact
