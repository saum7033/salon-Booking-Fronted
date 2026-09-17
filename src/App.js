import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import greenTheme from './theme/greenTheme';

function App() {
  return (
    <ThemeProvider theme={greenTheme}>

<div className='App p-20'>
      <Button variant='contained' color='primary'>Code with saum</Button>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
