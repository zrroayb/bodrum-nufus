export interface BlogPost {
  id: number;
  title: string;
  content: string;
  summary: string;
  image: string;
  date: string;
  author: string;
}

// Get data from localStorage or use default data
export const BLOG_DATA: BlogPost[] = typeof window !== 'undefined'
  ? JSON.parse(localStorage.getItem('blogData') || '[]') || [
    {
      id: 1,
      title: "Bodrum'da Yaşam",
      content: "Bodrum'da yaşam, eşsiz doğal güzellikleri ve tarihi dokusuyla...",
      summary: "Bodrum'un yaşam tarzı ve kültürü hakkında detaylı bir inceleme",
      image: "https://picsum.photos/seed/blog1/800/400",
      date: "2024-01-15",
      author: "Admin"
    },
    {
      id: 2,
      title: "Mahalle Kültürü",
      content: "Bodrum'un mahalle kültürü, geleneksel değerleri...",
      summary: "Bodrum mahallelerindeki sosyal yaşam ve komşuluk ilişkileri",
      image: "https://picsum.photos/seed/blog2/800/400",
      date: "2024-01-16",
      author: "Admin"
    },
    {
      id: 3,
      title: "Nüfus Değişimi",
      content: "Son yıllarda Bodrum'un nüfus yapısındaki değişimler...",
      summary: "Bodrum'un demografik yapısındaki değişimler ve etkileri",
      image: "https://picsum.photos/seed/blog3/800/400",
      date: "2024-01-17",
      author: "Admin"
    }
  ]
  : []; 