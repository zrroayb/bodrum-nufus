import { useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import EvilEyeLogo from './EvilEyeLogo';
import SearchIcon from '@mui/icons-material/Search';
import { commonStyles } from '../theme';

export default function Navbar() {
  const theme = useTheme();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToReachUs = () => {
    setMobileOpen(false);
    const element = document.getElementById('reach-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#reach-us');
    }
  };

  const menuItems = [
    { text: 'Ana Sayfa', href: '/' },
    { text: 'Nüfus Ara', href: '/search', icon: <SearchIcon /> },
    { text: 'Bize Ulaşın', action: scrollToReachUs },
  ];

  return (
    <AppBar 
      position="sticky"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        boxShadow: commonStyles.shadows.card,
        borderBottom: commonStyles.borders.light,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                color: 'primary.dark',
              },
            }}
          >
            Bodrum Nüfus
            <Box sx={{ display: 'inline-flex', ml: 1, animation: 'pulse 2s infinite' }}>
              <EvilEyeLogo />
            </Box>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button 
              color="inherit" 
              component={Link}
              href="/"
              sx={{
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgba(0, 169, 181, 0.04)',
                },
              }}
            >
              Ana Sayfa
            </Button>
            <Button 
              variant="contained"
              component={Link}
              href="/nextnufus/search"
              startIcon={<SearchIcon />}
              sx={{
                background: commonStyles.gradients.primary,
                '&:hover': {
                  background: commonStyles.gradients.primaryHover,
                },
              }}
            >
              Nüfus Ara
            </Button>
            <Button 
              color="inherit"
              onClick={scrollToReachUs}
              sx={{ 
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgba(0, 169, 181, 0.04)',
                },
              }}
            >
              Bize Ulaşın
            </Button>
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

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'background.default',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              {item.href ? (
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={handleDrawerToggle}
                  sx={{
                    py: 2,
                    px: 3,
                  }}
                >
                  <ListItemText primary={item.text} />
                  {item.icon}
                </ListItemButton>
              ) : (
                <ListItemButton
                  onClick={item.action}
                  sx={{
                    py: 2,
                    px: 3,
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
} 