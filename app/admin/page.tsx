'use client';

import { Box, Grid, Paper, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import { useEffect, useState } from 'react';
import { BlogPost } from '../data/blogData';
import { DataItem } from '../data/nufusData';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    populationCount: 0,
    blogCount: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const populationData = JSON.parse(localStorage.getItem('nufusData') || '[]') as DataItem[];
      const blogData = JSON.parse(localStorage.getItem('blogData') || '[]') as BlogPost[];

      setStats({
        populationCount: populationData.length,
        blogCount: blogData.length,
      });
    }
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
        Yönetim Paneli
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 2,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: (theme) => theme.shadows[4],
              },
            }}
          >
            <Box>
              <Typography variant="h6" color="text.secondary">
                Nüfus Verileri
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 600 }}>
                {stats.populationCount}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Toplam Kayıt
              </Typography>
            </Box>
            <PeopleIcon sx={{ fontSize: 48, color: 'primary.main' }} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 2,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: (theme) => theme.shadows[4],
              },
            }}
          >
            <Box>
              <Typography variant="h6" color="text.secondary">
                Blog Yazıları
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 600 }}>
                {stats.blogCount}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Toplam Yazı
              </Typography>
            </Box>
            <ArticleIcon sx={{ fontSize: 48, color: 'success.main' }} />
          </Paper>
        </Grid>

        {/* Recent Activity Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mt: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Son Aktiviteler
            </Typography>
            {/* Add recent activity list here */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
} 