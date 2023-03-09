import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#0059BC',
        dark: '#004C9E',
        light: '#0059BC',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1440,
      },
    },
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            borderWidth: 1,
          },
        },
      },
    },
  });