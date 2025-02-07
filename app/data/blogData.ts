export interface BlogPost {
  id: number;
  title: string;
  content: string;
  summary: string;
  image: string;
  date: string;
  author: string;
}

export const INITIAL_BLOG_DATA: BlogPost[] = [
  {
    id: 1,
    title: "Bodrum'da Yaşam",
    content: "Bodrum'da yaşam, eşsiz doğal güzellikleri ve tarihi dokusuyla...",
    summary: "Bodrum'un yaşam tarzı ve kültürü hakkında detaylı bir inceleme",
    image: "https://picsum.photos/seed/blog1/800/400",
    date: "2024-01-15",
    author: "Admin"
  }
];

export const getBlogData = (): BlogPost[] => {
  if (typeof window !== 'undefined') {
    const savedData = localStorage.getItem('blogData');
    return savedData ? JSON.parse(savedData) : INITIAL_BLOG_DATA;
  }
  return INITIAL_BLOG_DATA;
}; 