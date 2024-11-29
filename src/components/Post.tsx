import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import type { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-sm mb-4">
      <div className="flex items-center p-4">
        <img
          src={post.user.avatar}
          alt={post.user.username}
          className="w-8 h-8 rounded-full"
        />
        <span className="ml-3 font-semibold">{post.user.username}</span>
      </div>
      
      <img src={post.imageUrl} alt="" className="w-full" />
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="hover:opacity-70"
            >
              <Heart
                className={`w-6 h-6 ${isLiked ? 'fill-red-500 stroke-red-500' : ''}`}
              />
            </button>
            <button className="hover:opacity-70">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="hover:opacity-70">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button className="hover:opacity-70">
            <Bookmark className="w-6 h-6" />
          </button>
        </div>
        
        <div className="font-semibold mb-2">{post.likes.toLocaleString()} likes</div>
        
        <div className="space-y-2">
          <p>
            <span className="font-semibold mr-2">{post.user.username}</span>
            {post.caption}
          </p>
          {post.comments.map((comment) => (
            <p key={comment.id}>
              <span className="font-semibold mr-2">{comment.user.username}</span>
              {comment.content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}