// Material UI
import { ThemeProvider } from '@mui/material/styles';
import { Header } from './components';
import {
  Divider,
  Container,
  CssBaseline,
} from '@mui/material'
import { styled } from '@mui/system';

// Custom theme
import { theme } from './lib/theme';

// Styled components

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
