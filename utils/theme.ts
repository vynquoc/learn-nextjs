import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export let theme = createTheme({
  typography: {
    fontFamily: 'Heebo, sans-serif'
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {maxWidth: 'md'},
      styleOverrides: {maxWidthSm: {
        '@media (min-width: 600px)': {
          maxWidth: '680px'
        }
      }, maxWidthMd: {
        '@media (min-width: 900px)': {
          maxWidth: '860px',
        }
      }},
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      },
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover, &.active': {
            color: '#556cd6',
            cursor: 'pointer'
          }
        }
      },

    }
  }
});

theme = responsiveFontSizes(theme)
