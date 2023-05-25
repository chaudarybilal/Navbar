
import Nav from './Nav';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import HeroSection from './components/HeroSection';
import { Container } from '@mui/material';
import CakeSection from './components/CakeSection';
import ContactUs from './components/ContactUs';


const theme = createTheme({
  palette: {
    primary: {
      main: '#e28743',
    },
  },
});

function App() {
  return (
   <ThemeProvider theme={theme}>
       <Nav />
       <Container>
          <HeroSection /> 
          <CakeSection />
          <ContactUs />
       </Container>
   </ThemeProvider>
  );
}

export default App;