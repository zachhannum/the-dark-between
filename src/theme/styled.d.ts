// import original module declarations
import "styled-components";

type Color = { fg: string; bg: string };
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    fg: string[];
    bg: string[];
    red: Color;
    green: Color;
    yellow: Color;
    blue: Color;
    purple: Color;
    aqua: Color;
    orange: Color;
  }
}
