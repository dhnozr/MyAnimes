import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';

export default function Popular() {
  const { data: popularAnimes } = useQuery({
    queryKey: ['mostPopular'],
    queryFn: () =>
      fetch('https://api.jikan.moe/v4/top/anime?bypopularity')
        .then(data => data.json())
        .then(data => {
          return data.data;
        }),
  });
  console.log(data);
  return (
    <div className='px-4 my-10'>
      <h2 className='my-4 text-3xl'>Most Popular Animes</h2>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
        {popularAnimes.map(anime => (
          <div className='w-44' key={anime?.mal_id}>
            <img className='object-cover w-full h-full' src={anime.images.webp.image_url} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
}
