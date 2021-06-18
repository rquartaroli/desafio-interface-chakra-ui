// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react"

// 2. Add your color mode config
const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ 
  config,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  colors: {
    highlight: "#FFBA08",
    dark: {
      "head": "#47585B",
      "info": "#999999",
    },
    light: {
      "head": "#F5F8FA",
      "info": "#DADADA",
    },
    // gray: {
    //   "900": "#181B23",
    //   "800": "#1F2029",
    //   "700": "#353646",
    //   "600": "#4B4D63",
    //   "500": "#616480",
    //   "400": "#797D9A",
    //   "300": "#9699B0",
    //   "200": "#B3B5C6",
    //   "100": "#D1D2DC",
    //   "50": "#EEEEF2",
    // }
  },
})

export default theme