'use client';

import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useScrollTrigger,
  Slide,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import EvilEyeLogo from './EvilEyeLogo';
import { commonStyles } from '../theme';
import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';

interface NavItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { label: 'Ana Sayfa', href: '/', icon: <HomeIcon /> },
  { label: 'Nüfus Ara', href: '/search', icon: <SearchIcon /> },
  { label: 'Blog', href: '/blog', icon: <ArticleIcon /> },
  { label: 'Hakkında', href: '#reach-us', icon: <InfoIcon /> },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            href={item.href}
            sx={{
              color: pathname === item.href ? 'primary.main' : 'text.primary',
              bgcolor: pathname === item.href ? 'action.selected' : 'transparent',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll>
      <AppBar 
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          borderBottom: commonStyles.borders.light,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            disableGutters 
            sx={{ 
              minHeight: { xs: '64px', sm: '70px' },
              justifyContent: 'space-between',
            }}
          >
            {/* Logo */}
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                fontWeight: 800,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.4rem', sm: '1.6rem' },
                position: 'relative',
                padding: '0.5rem 1rem',
                transition: 'all 0.3s ease',
                '& .logo': {
                  display: 'flex',
                  alignItems: 'center',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease',
                },
                '&:hover .logo': {
                  transform: 'scale(1.2) rotate(5deg)',
                },
              }}
            >
              <span>Bodrum Nüfus</span>
              <span className="logo">
                <EvilEyeLogo />
              </span>
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' },
              gap: 1,
            }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  startIcon={item.icon}
                  sx={{
                    px: 2,
                    py: 1,
                    color: isActive(item.href) ? 'primary.main' : 'text.primary',
                    backgroundColor: isActive(item.href) ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(59, 130, 246, 0.12)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { md: 'none' },
                color: 'primary.main',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        {/* Mobile Navigation Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              width: 280,
              backgroundColor: 'background.default',
            },
          }}
        >
          <Box sx={{ 
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}>
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}>
              <Typography
                variant="h6"
                sx={{ 
                  fontWeight: 600,
                  color: 'primary.main',
                }}
              >
                Menu
              </Typography>
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </Box>

            <List sx={{ flex: 1 }}>
              {navItems.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      py: 2,
                      backgroundColor: isActive(item.href) ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
                      borderRadius: 2,
                      mb: 1,
                    }}
                  >
                    <ListItemIcon sx={{ 
                      color: isActive(item.href) ? 'primary.main' : 'text.primary',
                      minWidth: 40,
                    }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.label}
                      primaryTypographyProps={{
                        sx: { 
                          color: isActive(item.href) ? 'primary.main' : 'text.primary',
                          fontWeight: isActive(item.href) ? 600 : 400,
                        }
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
} 