import { useGetPosts } from '@application/hooks/apis/post/get_posts';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Carousel, LoaderScreen } from 'react-native-ui-lib';
import PostItem from '../../components/postItem';

function PostList(): JSX.Element {
  const { data, isLoading } = useGetPosts({
    pagable: {
      pageSize: 10,
    },
  });

  if (isLoading || !data) {
    return <LoaderScreen />;
  }
  return (
    <Carousel horizontal={false}>
      {data.map((d) => {
        return <PostItem key={d.id} data={d} />;
      })}
    </Carousel>
  );
}

export default memo(PostList, isEqual);
