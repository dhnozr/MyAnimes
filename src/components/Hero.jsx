import { useQuery } from '@tanstack/react-query';
import bgVideo from '/Chainsaw_Man.mp4';
import { useEffect, useRef } from 'react';
import Popular from './Popular';

export default function Hero() {
  const {
    data: chainsawMan,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['anime'],
    queryFn: () =>
      fetch('https://api.jikan.moe/v4/anime/44511')
        .then(res => res.json())
        .then(data => {
          return data.data;
        }),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  //
  const { data: popularAnimes } = useQuery({
    queryKey: ['recommend'],
    queryFn: () =>
      fetch('https://api.jikan.moe/v4/top/anime?filter=bypopularity&sfw=true')
        .then(res => res.json())
        .then(data => {
          return data.data;
        }),
  });

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperContainer = swiperRef.current;
      const params = {
        grabCursor: true,
        slidesPerView: 8,
        spaceBetween: 20,
        navigation: {
          nextEl: '.property-news-swiper-button-next',
          prevEl: '.property-news-swiper-button-prev',
        },
        paginationClickable: true,
        pagination: {
          el: '.property-news-swiper-paginations',
          dynamicBullets: true,
          clickable: true,
          dynamicMainBullets: 3,
        },
        mousewheel: {
          forceToAxis: true,
        },
        breakpoints: {
          // small screens
          0: {
            slidesPerView: 1,
          },
          380: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // medium screens
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          // normal laptop screens
          1024: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        },
      };
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }
  }, []);

  //

  function truncateText(text, limit) {
    if (text?.length > limit) {
      return text.substring(0, limit) + '...';
    } else {
      return text;
    }
  }

  return (
    <div className='font-roboto'>
      <div className='flex relative h-[450px]'>
        <div>
          <h2 className='absolute text-6xl font-bold text-white top-16 left-6 font-roboto'>{chainsawMan?.title}</h2>
          <p className='absolute text-white top-32 left-8 max-w-96'>{truncateText(chainsawMan?.synopsis, 80)}</p>
          <div className='absolute flex gap-4 top-56 left-8 -mt-7'>
            <button className='text-black bg-white cursor-pointer btn'>Learn More</button>
            <button className='cursor-pointer btn bg-neutral'>To Watch</button>
          </div>
          <div className='absolute text-3xl font-bold text-white bottom-28 left-6'>Popular Animes For You</div>
        </div>
        <video className='flex-1 object-cover' src={bgVideo} autoPlay muted loop></video>
      </div>

      <swiper-container class='slider-1' ref={swiperRef} init='false'>
        {popularAnimes?.map(anime => (
          <swiper-slide class='slide-1' lazy='true' key={anime.mal_id}>
            <div className='relative w-full transition-transform duration-300 hover:scale-110 group '>
              <img
                className='object-cover h-[290px] w-full rounded-2xl '
                src={anime.images.webp.image_url}
                loading='lazy'
                alt=''
              />
              <div className='absolute inset-0 bg-black/30 rounded-2xl'></div>
              <div className='absolute bottom-4 left-2 max-w-[220px] text-white transition-transform duration-300 group-hover:-translate-y-8'>
                <h3>{anime?.title}</h3>
                <div className='flex items-center gap-1 text-xs '>
                  {anime?.year && <p>{anime?.year},</p>}
                  <p>{anime?.genres[0].name}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      <Popular />
    </div>
  );
}
