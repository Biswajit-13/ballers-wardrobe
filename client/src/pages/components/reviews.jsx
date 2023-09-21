import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Reviews = () => {
  return (
    <div>
      <h1 className='flex gap-2 items-center'>
        <AiFillStar className='lg:text-xl text-amber-400  md:text-xl sm:text-md' />
        <AiFillStar className='lg:text-xl text-amber-400  md:text-xl sm:text-md' />
        <AiFillStar className='lg:text-xl text-amber-400  md:text-xl sm:text-md' />
        <AiFillStar className='lg:text-xl text-amber-400  md:text-xl sm:text-md' />
        <AiOutlineStar className='lg:text-xl text-amber-400  md:text-xl sm:text-md' />
        <h2 className='text-txt'>4/5</h2>
      </h1>
      <h2 className='text-hd mt-2'>43 reviews</h2>
      <div className='mt-1 gap-y-2 flex flex-col'>
      <p className='text-txt font-normal text-[14px]'>"I absolutely love this t-shirt! The design is unique, and the fabric is so comfortable." - Sarah C.</p>
      <p className='text-txt font-normal text-[14px]'>"I absolutely love this t-shirt! The design is unique, and the fabric is so comfortable." - Sarah C.</p>
      </div>
      <h3 className='text-[12px] font-semibold mt-2 text-subhd'>read all reviews</h3>
      </div>
  );
}

export default Reviews;
