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
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  console.log(data);
  return (
    <div className='px-4 my-10'>
      <h2 className='my-4 text-3xl'>Most Popular Animes</h2>
      <div className='grid justify-center grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
        {popularAnimes?.map(anime => (
          <div
            className='relative h-56 text-white transition-transform duration-300 w-44 hover:scale-110 group'
            key={anime?.mal_id}
          >
            <img className='object-cover w-full h-full rounded-xl' src={anime.images.webp.image_url} alt='' />
            <div className='absolute inset-0 bg-black/20 rounded-xl'></div>
            <div className='absolute transition-transform duration-300 bottom-4 left-2 group-hover:-translate-y-8'>
              <h3>{anime?.title}</h3>
              <div className='flex items-center gap-1 text-xs '>
                {anime?.year && <p>{anime?.year},</p>}
                <p>{anime?.genres[0].name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
