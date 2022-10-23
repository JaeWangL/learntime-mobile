import type { CursorPaginationDTO } from '../pagination_models';
import type { PostInfoDTO } from './dtos';

export function getPosts(): CursorPaginationDTO<PostInfoDTO> {
  return {
    content: [
      {
        id: '1',
        title: 'dasd',
        likes: 1232,
        photoUrls: [
          'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        ],
        provider: {
          id: '1',
          name: 'Test',
          profileUrl:
            'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
          isOfficial: true,
        },
        location: {
          latitude: 0,
          longitude: 0,
          address_name: 'dasd',
          address_1depth_name: 'dasd',
          address_2depth_name: 'dasd',
          address_3depth_name: 'e2',
          address_4depth_detail: 'ads',
        },
      },
      {
        id: '2',
        title: 'dasd',
        likes: 1232,
        photoUrls: [
          'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        ],
        provider: {
          id: '1',
          name: 'Test',
          profileUrl:
            'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
          isOfficial: true,
        },
        location: {
          latitude: 0,
          longitude: 0,
          address_name: 'dasd',
          address_1depth_name: 'dasd',
          address_2depth_name: 'dasd',
          address_3depth_name: 'e2',
          address_4depth_detail: 'ads',
        },
      },
      {
        id: '3',
        title: 'dasd',
        likes: 1232,
        photoUrls: [
          'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        ],
        provider: {
          id: '1',
          name: 'Test',
          profileUrl:
            'https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
          isOfficial: true,
        },
        location: {
          latitude: 0,
          longitude: 0,
          address_name: 'dasd',
          address_1depth_name: 'dasd',
          address_2depth_name: 'dasd',
          address_3depth_name: 'e2',
          address_4depth_detail: 'ads',
        },
      },
    ],
    pageable: {
      pageNumber: 0,
      pageSize: 10,
    },
    first: true,
    last: false,
  };
}
