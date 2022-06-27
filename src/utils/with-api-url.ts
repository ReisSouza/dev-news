export default function withApiUrl(url: string) {
  return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_API_URL}${url.startsWith('/') ? url.slice(1) : url}`;
}
