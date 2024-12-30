'use client';

import { Box, Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import { useState } from 'react';
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

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Carousel Section */}
          <Grid item xs={12} md={7}>
            <Box sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden' }}>
              <Box
                sx={{
                  position: 'relative',
                  height: 500,
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={carouselItems[activeSlide].image}
                  alt={carouselItems[activeSlide].title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    color: 'white',
                  }}
                >
                  <Typography variant="h4" gutterBottom>
                    {carouselItems[activeSlide].title}
                  </Typography>
                  <Typography variant="body1">
                    {carouselItems[activeSlide].description}
                  </Typography>
                </Box>
              </Box>
              <IconButton
                onClick={prevSlide}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255,255,255,0.8)',
                  '&:hover': { bgcolor: 'white' },
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
                  bgcolor: 'rgba(255,255,255,0.8)',
                  '&:hover': { bgcolor: 'white' },
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