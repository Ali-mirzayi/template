import { createTheme } from '@mui/material/styles';
import { blueGrey,teal } from '@mui/material/colors';
import type { AppProps } from 'next/app';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background:{
      paper:teal[50],
      default:teal[50],
     },
     primary:{
      main:teal[50]
     },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background:{
      paper:teal[900],
      default:teal[900],
     },
   primary:{
    main:teal[900]
   }, 
  },
});

const Theme = {lightTheme,darkTheme};

export default Theme;
