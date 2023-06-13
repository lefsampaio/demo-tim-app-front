import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        customBlue: {
            main: '#004691', // azul cor personalizada
        },
        neutral: {
            main: '#2F2F2F'
        },
        lighter: {
            main: '#565656'
        },
        neutralSecodary: {
            main: '#8A8A8A'
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: poppins.style.fontFamily,
    },
});

export default theme;