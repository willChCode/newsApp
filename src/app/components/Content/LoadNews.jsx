import React from 'react';
import Image from 'next/image';
import { getTrends } from '../../services/dataFetching';

export default async function LoadNews() {
  const { articles } = await getTrends();

  return articles.slice(0, 2).map(article => (
    <div
      key={article.length}
      className=' flex flex-col justify-center items-center gap-4'>
      <h2 className='font-bold text-[#1a8cd8] text-lg text-center'>
        {article.title}
      </h2>

      <Image
        className='img-new'
        alt='article'
        src={article.urlToImage}
        width={450}
        height={420}
      />
      <span>
        <p className='italic placeholder-gray-500 font-bold'>
          · {article.author}
        </p>
        {article.description}
      </span>
    </div>
  ));
}
