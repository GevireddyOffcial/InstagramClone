export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
}

export interface Post {
  id: string;
  user: User;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  createdAt: string;
}