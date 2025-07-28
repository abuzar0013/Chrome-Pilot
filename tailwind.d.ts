// File: tailwind.d.ts

declare module 'tailwindcss/defaultTheme' {
    interface DefaultTheme {
      screens: Record<string, string>;
      colors: Record<string, string | Record<string, string>>;
      spacing: Record<string, string>;
      fontFamily: Record<string, string[]>;
      // Add other properties as needed
    }
    const defaultTheme: DefaultTheme;
    export default defaultTheme;
  }
  
  declare module 'tailwindcss/colors' {
    interface TailwindColors {
      [key: string]: string | Record<string, string>;
    }
    const colors: TailwindColors;
    export default colors;
  }
  
  declare module 'tailwindcss/lib/util/flattenColorPalette' {
    type ColorPalette = Record<string, string | Record<string, string>>;
    function flattenColorPalette(colors: ColorPalette): Record<string, string>;
    export default flattenColorPalette;
  }