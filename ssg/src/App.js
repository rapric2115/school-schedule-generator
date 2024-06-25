import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './vitals/theme';
import Name from './components/name';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Name name="Grades and Teachers" />
    </ThemeProvider>
  );
}

export default App;
