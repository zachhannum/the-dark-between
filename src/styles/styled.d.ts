// import original module declarations
import 'styled-components';

type Color = {
  dark: string;
  light: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string[];
    gray: string;
    fg: string[];
    red: Color;
    green: Color;
    yellow: Color;
    blue: Color;
    purple: Color;
    aqua: Color;
    orange: Color;
  }
}
