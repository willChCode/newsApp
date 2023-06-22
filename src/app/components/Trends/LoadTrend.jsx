import React from 'react';
import { getTrends } from '../../services/dataFetching';

export default async function LoadTrend() {
  const { articles } = await getTrends();

  return articles.slice(0, 8).map(article => (
    <div className='flex gap-2' key={article.length}>
      <section className='max-w-[16.5rem] trend'>
        <p>{article.author}</p>
        <h1 className='text-white font-bold text-lg truncate overflow-ellipsis'>
          {article.title}
        </h1>
        <p>8010 Tweets</p>
      </section>
      <span>icon</span>
    </div>
  ));
}
