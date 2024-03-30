import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function TopManga() {
  const { data } = useQuery({
    queryKey: ['topManga'],
    queryFn: () =>
      fetch('https://api.jikan.moe/v4/top/manga')
        .then(res => res.json())
        .then(data => data.data),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  console.log(data);
  return (
    <div className='px-4 my-4'>
      <h2 className='mb-4 text-3xl'>Top Manga</h2>
      <div className='grid justify-center grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
        {data?.map(manga => (
          <div
            className='relative h-56 text-white transition-transform duration-300 w-44 hover:scale-110 group'
            key={manga?.mal_id}
          >
            <img className='object-cover w-full h-full rounded-xl' src={manga?.images.webp.image_url} alt='' />
            <div className='absolute inset-0 bg-black/20 rounded-xl'></div>
            <div className='absolute transition-transform duration-300 bottom-4 left-2 group-hover:-translate-y-8'>
              <h3>{manga?.title}</h3>
              <div className='flex items-center gap-1 text-xs '>
                {manga?.year && <p>{manga?.year},</p>}
                <p>{manga?.genres[0].name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
