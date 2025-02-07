'use client';

import { Box, Container, Typography, Chip, Divider, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { BlogPost } from '../../data/blogData';
import ReachUs from '../../components/ReachUs';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BlogPostContent({ id }: { id: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem('blogData');
        const blogData = savedData ? JSON.parse(savedData) : [];
        const foundPost = blogData.find((p: BlogPost) => p.id.toString() === id);
        setPost(foundPost || null);
      }
    } catch (error) {
      console.error('Error loading blog post:', error);
      setPost(null);
    }
  }, [id]);

  const handleBack = () => {
    router.push('/blog');
  };

  if (!post) {
    return (
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Blog yazısı bulunamadı.
            </Typography>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={handleBack}
              variant="contained"
              sx={{ mt: 2 }}
            >
              Blog Sayfasına Dön
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  // Rest of your component remains the same...
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Back Button */}
      <Container maxWidth="md" sx={{ pt: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
          sx={{ mb: 2 }}
        >
          Geri Dön
        </Button>
      </Container>

      {/* Hero Image */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '400px' },
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.8)',
          }}
        />
      </Box>

      {/* Content */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 4 }}>
          <Chip
            label={new Date(post.date).toLocaleDateString('tr-TR')}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              mb: 2,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 3,
            }}
          >
            {post.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Box
              component="img"
              src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                mr: 2,
              }}
              alt={post.author}
            />
            <Typography variant="subtitle1" color="text.secondary">
              {post.author}
            </Typography>
          </Box>

          <Typography
            variant="subtitle1"
            sx={{
              fontSize: '1.2rem',
              color: 'text.secondary',
              mb: 4,
              fontStyle: 'italic',
            }}
          >
            {post.summary}
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'text.primary',
              '& p': {
                mb: 2,
              },
            }}
          >
            {post.content}
          </Typography>
        </Box>
      </Container>

      <ReachUs />
    </Box>
  );
} 