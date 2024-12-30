'use client';

import { Box, Container, Typography, Grid, Paper, IconButton, LinearProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { commonStyles } from '../theme';

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

const blogPosts = [
  {
    title: 'Nüfus Artışı',
    description: 'Bodrum\'da son 5 yılda görülen nüfus artışı ve etkileri',
    date: '15 Mart 2024',
  },
  {
    title: 'Mahalle Analizi',
    description: 'En kalabalık mahalleler ve demografik özellikleri',
    date: '12 Mart 2024',
  },
  {
    title: 'Mevsimsel Değişim',
    description: 'Yaz ve kış aylarında nüfus değişimi',
    date: '10 Mart 2024',
  },
];

export default function FeaturesSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

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
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                background: commonStyles.gradients.primary,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 3,
              }}
            >
              Son Yazılar
            </Typography>
            <Grid container spacing={2}>
              {blogPosts.map((post, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      border: commonStyles.borders.light,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: commonStyles.shadows.hover,
                      },
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {post.description}
                    </Typography>
                    <Typography variant="caption" color="primary">
                      {post.date}
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