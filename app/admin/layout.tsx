'use client';

import { Box, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, IconButton, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const drawerWidth = 280;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, href: '/admin' },
  { text: 'Nüfus Verileri', icon: <PeopleIcon />, href: '/admin/population' },
  { text: 'Blog Yazıları', icon: <ArticleIcon />, href: '/admin/blog' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ height: '100%', background: theme.palette.background.default }}>
      <Box sx={{ 
        p: 3, 
        display: 'flex', 
        alignItems: 'center',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
          Bodrum Nüfus
        </Typography>
      </Box>
      <List sx={{ p: 2 }}>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={Link} 
            href={item.href}
            sx={{
              mb: 1,
              borderRadius: 2,
              backgroundColor: pathname === item.href ? 'primary.main' : 'transparent',
              color: pathname === item.href ? 'white' : 'text.primary',
              '&:hover': {
                backgroundColor: pathname === item.href 
                  ? 'primary.dark'
                  : 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ListItemIcon sx={{ 
              color: pathname === item.href ? 'white' : 'primary.main',
              minWidth: 40,
            }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{
                fontSize: '0.9rem',
                fontWeight: pathname === item.href ? 600 : 500,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.divider}`,
          backgroundColor: 'white',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'text.primary', fontWeight: 500 }}>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              boxShadow: theme.shadows[8],
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              borderRight: `1px solid ${theme.palette.divider}`,
              boxShadow: 'none',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Toolbar />
        <Container maxWidth="xl">
          {children}
        </Container>
      </Box>
    </Box>
  );
} 