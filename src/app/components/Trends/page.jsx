import React from 'react';
import LoadTrend from './LoadTrend';
import { FiSearch } from 'react-icons/fi';

export default function Trends() {
  // const data = await getData();
  // console.log(data);

  return (
    <div className=' tendenciaC '>
      {/* SEARCH */}
      <form className=' form-search'>
        <input
          placeholder='Search'
          type='search'
          className='input-search py-2 pl-10 pr-4 rounded-lg ml-[45px]'
        />
        <FiSearch className='icon ' />
      </form>
      {/* TRENDS */}
      <div className='overflow-main px-3 py-6'>
        <div className='bg-[#25272B] rounded-lg px-4 py-2 flex flex-col gap-4'>
          <h1 className='font-bold text-lg text-white'>Tendencias para ti</h1>
          <LoadTrend />
        </div>
      </div>
    </div>
  );
}
