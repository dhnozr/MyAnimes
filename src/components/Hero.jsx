import { useQuery } from '@tanstack/react-query';
import bgVideo from '/Chainsaw_Man.mp4';

export default function Hero() {
  const {
    data: topAnimeList,
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

  console.log(topAnimeList);

  return (
    <div>
      <div className='flex relative h-[450px]'>
        <div>
          <h2 className='absolute text-4xl font-bold text-white top-1/4 left-6 font-roboto'>{topAnimeList?.title}</h2>
        </div>
        <video className='flex-1 object-cover ' src={bgVideo} autoPlay muted loop></video>
      </div>
      <div></div>
    </div>
  );
}
