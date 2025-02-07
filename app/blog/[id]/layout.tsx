export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    // Add more IDs as needed
  ];
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 