import { createMuiTheme } from '@material-ui/core/styles';

import { red } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { indigo } from '@material-ui/core/colors';

// Themes derived from https://bootswatch.com/

export const defaultDark = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

export const defaultLight = createMuiTheme({
  palette: {
    type: 'light'
  }
});

export const darklyTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#375a7f' },
    secondary: { main: '#444' },
    error: { main: '#E74C3C' },
    background: { default: '#222' }
  }
});

export const superheroTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#DF691A' },
    secondary: { main: '#4E5D6C' },
    error: { main: '#d9534f' },
    background: { default: '#2B3E50' }
  }
});

export const theme = defaultDark; //darklyTheme;

export default theme;

// primary?: PaletteColorOptions;
// secondary?: PaletteColorOptions;
// error?: PaletteColorOptions;
// type?: PaletteType;
// tonalOffset?: number;
// contrastThreshold?: number;
// common?: Partial<CommonColors>;
// grey?: ColorPartial;
// text?: Partial<TypeText>;
// divider?: string;
// action?: Partial<TypeAction>;
// background?: Partial<TypeBackground>;
// getContrastText?: (background: string) => string;
