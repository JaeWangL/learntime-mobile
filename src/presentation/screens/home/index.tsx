import BaseLayout from '@presentation/layouts/base';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Carousel } from 'react-native-ui-lib';
import Post from './components/post';

function HomeScreen(): JSX.Element {
  return (
    <BaseLayout>
      <Carousel horizontal={false}>
        <Post
          data={{
            id: '1',
            title: 'dasd',
            likes: 1232,
            photoUrls: [
              'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            ],
            location: {
              latitude: 0,
              longitude: 0,
              address_name: 'dasd',
              address_1depth_name: 'dasd',
              address_2depth_name: 'dasd',
              address_3depth_name: 'e2',
              address_4depth_detail: 'ads',
            },
          }}
        />
        <Post
          data={{
            id: '1',
            title: 'dasd',
            likes: 1232,
            photoUrls: [
              'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            ],
            location: {
              latitude: 0,
              longitude: 0,
              address_name: 'dasd',
              address_1depth_name: 'dasd',
              address_2depth_name: 'dasd',
              address_3depth_name: 'e2',
              address_4depth_detail: 'ads',
            },
          }}
        />
        <Post
          data={{
            id: '1',
            title: 'dasd',
            likes: 1232,
            photoUrls: [
              'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
            ],
            location: {
              latitude: 0,
              longitude: 0,
              address_name: 'dasd',
              address_1depth_name: 'dasd',
              address_2depth_name: 'dasd',
              address_3depth_name: 'e2',
              address_4depth_detail: 'ads',
            },
          }}
        />
      </Carousel>
    </BaseLayout>
  );
}

export default memo(HomeScreen, isEqual);
