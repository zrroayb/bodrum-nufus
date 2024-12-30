import { createTheme } from '@mui/material';

// Define common gradients and styles that can be reused
const commonStyles = {
  gradients: {
    primary: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
    primaryHover: 'linear-gradient(135deg, #93C5FD, #60A5FA)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))',
  },
  shadows: {
    card: '0 2px 8px rgba(59, 130, 246, 0.06)',
    hover: '0 4px 12px rgba(59, 130, 246, 0.08)',
    button: '0 2px 6px rgba(59, 130, 246, 0.1)',
    buttonHover: '0 4px 10px rgba(59, 130, 246, 0.15)',
  },
  borders: {
    light: '1px solid rgba(59, 130, 246, 0.15)',
    lighter: '1px solid rgba(59, 130, 246, 0.08)',
  },
  transitions: {
    hover: 'all 0.25s ease',
  },
};

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB',
    },
    secondary: {
      main: '#EFF6FF',
      light: '#F8FAFC',
      dark: '#DBEAFE',
    },
    info: {
      main: '#60A5FA',
      light: '#93C5FD',
      dark: '#3B82F6',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
    },
    error: {
      main: '#EF4444',
    },
    warning: {
      main: '#F59E0B',
    },
    success: {
      main: '#10B981',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#2C3E50',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#2C3E50',
      lineHeight: 1.35,
      letterSpacing: '-0.005em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#2C3E50',
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#2C3E50',
      lineHeight: 1.45,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#2C3E50',
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      color: '#2C3E50',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#516B7D',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#516B7D',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        gradientTitle: {
          background: commonStyles.gradients.primary,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 600,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 24px',
          fontSize: '1rem',
          boxShadow: 'none',
          transition: commonStyles.transitions.hover,
          '&:hover': {
            boxShadow: commonStyles.shadows.button,
            transform: 'translateY(-1px)',
          },
          '&:focus-visible': {
            outline: '2px solid #00ABE4',
            outlineOffset: 2,
          },
        },
        contained: {
          background: commonStyles.gradients.primary,
          color: '#FFFFFF',
          '&:hover': {
            background: commonStyles.gradients.primaryHover,
            boxShadow: commonStyles.shadows.buttonHover,
          },
        },
        outlined: {
          borderColor: '#00ABE4',
          color: '#00ABE4',
          borderWidth: '1.5px',
          '&:hover': {
            borderColor: '#00ABE4',
            backgroundColor: 'rgba(0, 171, 228, 0.04)',
            borderWidth: '1.5px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: commonStyles.shadows.card,
          backgroundImage: 'none',
          border: commonStyles.borders.lighter,
          transition: commonStyles.transitions.hover,
          backgroundColor: '#FFFFFF',
          padding: '24px',
        },
        elevation1: {
          boxShadow: commonStyles.shadows.card,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          backdropFilter: 'blur(8px)',
          boxShadow: commonStyles.shadows.card,
          borderBottom: commonStyles.borders.light,
          padding: '8px 0',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            fontSize: '1rem',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00ABE4',
              borderWidth: '2px',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#00ABE4',
              borderWidth: '2px',
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: '1rem',
            color: '#516B7D',
          },
          '& .MuiInputHelperText-root': {
            fontSize: '0.875rem',
            marginTop: '4px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: commonStyles.shadows.card,
          border: commonStyles.borders.light,
          transition: commonStyles.transitions.hover,
          backgroundColor: '#FFFFFF',
          padding: '24px',
          '&:hover': {
            boxShadow: commonStyles.shadows.hover,
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#E9F1FA',
            color: '#2C3E50',
            fontWeight: 600,
            fontSize: '1rem',
            padding: '16px',
            borderBottom: commonStyles.borders.light,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          fontSize: '1rem',
          padding: '16px',
          color: '#516B7D',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(44, 62, 80, 0.95)',
          color: '#FFFFFF',
          fontSize: '0.875rem',
          padding: '8px 12px',
          borderRadius: 8,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '12px 16px',
        },
        standardSuccess: {
          backgroundColor: 'rgba(39, 174, 96, 0.1)',
          color: '#27AE60',
        },
        standardError: {
          backgroundColor: 'rgba(231, 76, 60, 0.1)',
          color: '#E74C3C',
        },
        standardWarning: {
          backgroundColor: 'rgba(243, 156, 18, 0.1)',
          color: '#F39C12',
        },
        standardInfo: {
          backgroundColor: 'rgba(0, 171, 228, 0.1)',
          color: '#00ABE4',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width: 600px)': {
            paddingLeft: '40px',
            paddingRight: '40px',
          },
        },
        maxWidthXl: {
          '@media (min-width: 1920px)': {
            maxWidth: '1600px',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// Export common styles for use in components
export { commonStyles }; 