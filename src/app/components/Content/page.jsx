import React from 'react';
// import MenuContent from './MenuContent';
import LoadNews from './LoadNews';

export default function Content() {
  return (
    <div className='contentC border-x-[1px]'>
      <nav className=''>
        <h1 className='text-center py-[1rem] font-bold text-white text-2xl'>
          NEWS
        </h1>
        <ul className='menu-content'>
          <li className='mc-titles'>
            <a className='mc-title'>Home</a>
          </li>
          <li className='mc-titles'>
            <a className='mc-title'>Trends</a>
          </li>
        </ul>
      </nav>
      <div className='content-overflow p-[2rem]'>
        <div className='flex flex-col gap-4'>
          <LoadNews />
        </div>
      </div>
    </div>
  );
}
