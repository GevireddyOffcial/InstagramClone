import { Post, User } from '../types';

export const currentUser: User = {
  id: '1',
  username: 'johndoe',
  fullName: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
};

export const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      id: '2',
      username: 'photography_lover',
      fullName: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    imageUrl: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=600&fit=crop',
    caption: 'Beautiful sunset at the beach 🌅',
    likes: 234,
    comments: [
      {
        id: '1',
        user: currentUser,
        content: 'Amazing shot! 📸',
        createdAt: '2024-03-10T15:30:00Z',
      },
    ],
    createdAt: '2024-03-10T14:20:00Z',
  },
  {
    id: '2',
    user: {
      id: '3',
      username: 'traveler',
      fullName: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
    },
    imageUrl: 'https://images.unsplash.com/photo-1682687221038-404670f09ef1?w=600&h=600&fit=crop',
    caption: 'Exploring new places 🌎',
    likes: 456,
    comments: [],
    createdAt: '2024-03-10T12:15:00Z',
  },
];