import Axios from 'axios';
import { stringify } from 'qs';
import { API_URL, NEXT_PUBLIC_API_URL } from '@/config/env/server';

// Server only
export const axios = Axios.create({
  baseURL: API_URL || NEXT_PUBLIC_API_URL,
  paramsSerializer: stringify,
});

// Client only
export const api = Axios.create({
  baseURL: '/api',
  paramsSerializer: stringify,
});
