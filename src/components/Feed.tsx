import React from 'react';
import { Post } from './Post';
import { mockPosts } from '../data/mockData';

export function Feed() {
  return (
    <div className="max-w-xl mx-auto px-4 pt-20 pb-8">
      {mockPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}