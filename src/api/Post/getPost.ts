import { axios } from '@/lib/axios';
import { PostType } from '@/types';

export default async function getPosts() {
  const res = await axios.get<PostType[]>('/posts');
  return res.data;
}
