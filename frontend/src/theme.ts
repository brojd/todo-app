import { extendTheme } from '@chakra-ui/react';
import { theme as baseTheme } from '@saas-ui/react';
import { theme as glassTheme } from '@saas-ui/theme-glass';

export const theme = extendTheme(baseTheme, glassTheme, {
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  fonts: {
    body: "'Saira Semi Condensed', sans-serif",
    heading: "'Saira Semi Condensed', sans-serif",
  },
  styles: {
    global: {
      'html, body': {
        height: '100%',
      },
    },
  },
});
