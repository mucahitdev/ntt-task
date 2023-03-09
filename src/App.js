import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Header } from './components';
import {
  Divider,
  Container,
  CssBaseline,
} from '@mui/material'
import { styled } from '@mui/system';

const SubContainer = styled(Container)(({ theme }) => ({

  [theme.breakpoints.up('xs')]: {
    padding: '0 16px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '0 32px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 120px',
  },
}));


function App() {

  const theme = createTheme({
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters>
        <SubContainer>
          <Header />
        </SubContainer>
        <Divider sx={{ borderColor: '#89919A' }} />

      </Container>

    </ThemeProvider>
  );
}

export default App;
