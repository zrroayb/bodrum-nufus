'use client';

import { Box, Container, Grid, Typography, Card, CardContent, Chip, CardMedia } from '@mui/material';
import { useEffect, useState } from 'react';
import { BlogPost } from '../data/blogData';
import ReachUs from '../components/ReachUs';
import Link from 'next/link';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('blogData');
      const blogData = savedData ? JSON.parse(savedData) : [];
      const sortedPosts = [...blogData].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setPosts(sortedPosts);
    }
  }, []);

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Simple Header */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              textAlign: 'center',
              mb: 2,
            }}
          >
            Blog
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
            sx={{ 
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Bodrum'un mahallelerinden en güncel haberler ve bilgiler
          </Typography>
        </Container>
      </Box>

      {/* Blog Posts */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card 
                component={Link}
                href={`/blog/${post.id}`}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) => theme.shadows[8],
                  },
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{ 
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      size="small"
                      label={new Date(post.date).toLocaleDateString('tr-TR')}
                      sx={{ 
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontWeight: 500,
                      }}
                    />
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 2,
                      color: 'text.primary',
                      lineHeight: 1.4,
                    }}
                  >
                    {post.title}
                  </Typography>

                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      mb: 2,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {post.summary}
                  </Typography>

                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      mt: 'auto',
                      pt: 2,
                      borderTop: '1px solid',
                      borderColor: 'divider',
                    }}
                  >
                    <Box
                      component="img"
                      src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
                      sx={{ 
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        mr: 1,
                      }}
                      alt={post.author}
                    />
                    <Typography 
                      variant="subtitle2" 
                      color="text.secondary"
                    >
                      {post.author}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {posts.length === 0 && (
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 8,
              color: 'text.secondary'
            }}
          >
            <Typography variant="h6" gutterBottom>
              Henüz blog yazısı bulunmamaktadır.
            </Typography>
            <Typography variant="body1">
              Yakında yeni yazılar eklenecektir.
            </Typography>
          </Box>
        )}
      </Container>

      <ReachUs />
    </Box>
  );
} 