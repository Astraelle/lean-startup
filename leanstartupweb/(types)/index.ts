// types/index.ts

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Post {
  _id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
}

