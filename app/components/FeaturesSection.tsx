'use client';

import { Box, Container, Typography, Grid, Paper, IconButton, LinearProgress, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { commonStyles } from '../theme';
import { BlogPost } from '../data/blogData';
import Link from 'next/link';

const carouselItems = [
  {
    image: 'https://picsum.photos/id/28/1200/800',
    title: 'Bodrum Manzaraları',
    description: 'Eşsiz doğal güzellikleri ile Bodrum yarımadası',
  },
  {
    image: 'https://picsum.photos/id/65/1200/800',
    title: 'Marina Bölgesi',
    description: 'Modern marina ve yat limanı manzarası',
  },
  {
    image: 'https://picsum.photos/id/129/1200/800',
    title: 'Sahil Şeridi',
    description: 'Muhteşem sahil şeridi ve plajlar',
  },
  {
    image: 'https://picsum.photos/id/164/1200/800',
    title: 'Koylar',
    description: 'Bodrum\'un eşsiz koyları ve plajları',
  },
  {
    image: 'https://picsum.photos/id/184/1200/800',
    title: 'Gün Batımı',
    description: 'Bodrum\'da büyüleyici gün batımı manzarası',
  },
];

export default function FeaturesSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Load blog posts from localStorage
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('blogData');
      const blogData = savedData ? JSON.parse(savedData) : [];
      // Get the latest 3 posts and sort by date
      const sortedPosts = [...blogData].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      ).slice(0, 3);
      setBlogPosts(sortedPosts);
      // Get latest 3 posts
      const latestPosts = [...blogData]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);
      setRecentPosts(latestPosts);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          nextSlide();
          return 0;
        }
        return oldProgress + 0.25;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselItems.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setProgress(0);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Carousel Section */}
          <Grid item xs={12} md={7}>
            <Box 
              sx={{ 
                position: 'relative', 
                borderRadius: 4, 
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: 500,
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                {carouselItems.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: activeSlide === index ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out',
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ 
                        objectFit: 'cover',
                        transform: `scale(${activeSlide === index ? '1' : '1.1'})`,
                        transition: 'transform 5s ease',
                      }}
                    />
                  </Box>
                ))}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 4,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 40%, transparent 100%)',
                    color: 'white',
                    transform: 'translateY(0)',
                    transition: 'transform 0.3s ease',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      mb: 1,
                      fontWeight: 700,
                      textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                      fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                      letterSpacing: '0.5px',
                    }}
                  >
                    {carouselItems[activeSlide].title}
                  </Typography>
                  <Typography 
                    variant="h6"
                    sx={{
                      opacity: 1,
                      textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
                      fontWeight: 500,
                      fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                      maxWidth: '800px',
                      lineHeight: 1.5,
                      letterSpacing: '0.3px',
                    }}
                  >
                    {carouselItems[activeSlide].description}
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={progress} 
                      sx={{
                        height: 3,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'white',
                          boxShadow: '0 0 8px rgba(255,255,255,0.5)',
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <IconButton
                onClick={prevSlide}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(4px)',
                  '&:hover': { 
                    bgcolor: 'rgba(255,255,255,0.25)',
                  },
                  color: 'white',
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                onClick={nextSlide}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(4px)',
                  '&:hover': { 
                    bgcolor: 'rgba(255,255,255,0.25)',
                  },
                  color: 'white',
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Blog Posts Section */}
          <Grid item xs={12} md={5}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 3 
            }}>
              <Typography
                variant="h4"
                sx={{
                  background: commonStyles.gradients.primary,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600,
                }}
              >
                Son Yazılar
              </Typography>
              <Button
                component={Link}
                href="/blog"
                sx={{
                  color: 'primary.main',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                  },
                }}
              >
                Tümünü Gör
              </Button>
            </Box>
            <Grid container spacing={2}>
              {recentPosts.map((post) => (
                <Grid item xs={12} key={post.id}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: (theme) => theme.shadows[4],
                      },
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {post.summary}
                    </Typography>
                    <Typography variant="caption" color="primary">
                      {new Date(post.date).toLocaleDateString('tr-TR')}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 