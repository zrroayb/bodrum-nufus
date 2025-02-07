export interface DataItem {
  id: number;
  mahalle: string;
  nufus: number;
  hane: number;
  yil: number;
  foto: string;
  aciklama?: string;
  bolge: string;
}

// Get data from localStorage or use default data
export const NUFUS_DATA: DataItem[] = typeof window !== 'undefined'
  ? JSON.parse(localStorage.getItem('nufusData') || '[]') || [
    {
      id: 1,
      mahalle: "Kumbahçe",
      nufus: 2500,
      hane: 850,
      yil: 2023,
      foto: "https://picsum.photos/seed/kumbahce/800/600",
      aciklama: "Kumbahçe mahallesi, Bodrum'un merkezi mahallelerinden biridir.",
      bolge: "Merkez"
    },
    {
      id: 2,
      mahalle: "Tepecik",
      nufus: 3200,
      hane: 1100,
      yil: 2023,
      foto: "https://picsum.photos/seed/tepecik/800/600",
      aciklama: "Tepecik mahallesi, yüksek konumu ile bilinir.",
      bolge: "Merkez"
    },
    {
      id: 3,
      mahalle: "Gümbet",
      nufus: 4800,
      hane: 1600,
      yil: 2023,
      foto: "https://picsum.photos/seed/gumbet/800/600",
      aciklama: "Gümbet, turistik özellikleri ile öne çıkan bir mahalledir.",
      bolge: "Merkez"
    },
  ]
  : []; 