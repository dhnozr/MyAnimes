import { useQuery } from '@tanstack/react-query';
import bgVideo from '/Chainsaw_Man.mp4';
import { useEffect, useRef } from 'react';

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
    const swiperContainer = swiperRef.current;
    const params = {
      grabCursor: true,
      slidesPerView: 1,
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
        380: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        // medium screens
        768: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        // normal laptop screens
        1024: {
          slidesPerView: 6,
          spaceBetween: 60,
        },
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div>
      <div className='flex relative h-[450px]'>
        <div>
          <h2 className='absolute text-4xl font-bold text-white top-1/4 left-6 font-roboto'>{chainsawMan?.title}</h2>
        </div>
        <video className='flex-1 object-cover' src={bgVideo} autoPlay muted loop></video>
      </div>
      <swiper-container class='slider-1' ref={swiperRef} init='false'>
        {popularAnimes?.map(anime => (
          <swiper-slide class='slide-1' lazy='true' key={anime.mal_id}>
            <img
              className='object-fill h-[250px] rounded-2xl'
              src={anime.images.webp.image_url}
              loading='lazy'
              alt=''
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
