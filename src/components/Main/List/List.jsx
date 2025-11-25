import usePosts from '../../../hooks/usePosts';
import style from './List.module.css';
import ListLoader from './ListLoader';
import Post from './Post';
export const List = () => {
  // const postsData = [
  //   {
  //     thumbnail: 'https://picsum.photos/200/300?random=1',
  //     title: 'Sunset Over the Ocean',
  //     author: 'WaveRider92',
  //     ups: 57,
  //     date: '2022-03-14T18:30:00.000Z',
  //   },
  //   {
  //     thumbnail: 'https://picsum.photos/200/300?random=2',
  //     title: 'Mountain Adventure',
  //     author: 'HikerTom',
  //     ups: 89,
  //     date: '2022-06-22T10:15:00.000Z',
  //   },
  //   {
  //     thumbnail: 'https://picsum.photos/200/300?random=3',
  //     title: 'City Lights at Night',
  //     author: 'UrbanExplorer',
  //     ups: 34,
  //     date: '2022-09-05T22:45:00.000Z',
  //   },
  //   {
  //     thumbnail: 'https://picsum.photos/200/300?random=4',
  //     title: 'Deep Forest',
  //     author: 'NatureLover',
  //     ups: 76,
  //     date: '2022-07-19T07:20:00.000Z',
  //   },
  //   {
  //     thumbnail: 'https://picsum.photos/200/300?random=5',
  //     title: 'Vintage Car Show',
  //     author: 'RetroFan88',
  //     ups: 102,
  //     date: '2022-05-11T14:05:00.000Z',
  //   },
  //   {
  //     thumbnail: 'https://picsum.photos/200/300?random=6',
  //     title: 'Astronomy Wonders',
  //     author: 'StarGazer',
  //     ups: 95,
  //     date: '2022-12-03T21:55:00.000Z',
  //   },
  //   {
  //     thumbnail: 'https://picsum.photos/200/300?random=7',
  //     title: 'Snowy Peaks',
  //     author: 'ColdTraveler',
  //     ups: 63,
  //     date: '2022-01-29T05:40:00.000Z',
  //   },
  //   {
  //     thumbnail: 'https://picsum.photos/200/300?random=8',
  //     title: 'Desert Mirage',
  //     author: 'SandWalker',
  //     ups: 48,
  //     date: '2022-08-17T13:10:00.000Z',
  //   },
  // ].map(assignId);
  const [posts, loading] = usePosts();
  console.log('loading: ', loading);

  return (
    <ul className={style.list}>
      {loading ? <ListLoader/> :
        posts.map(({data}) => <Post key={data.id} postData={data}/>)}
    </ul>
  );
};
