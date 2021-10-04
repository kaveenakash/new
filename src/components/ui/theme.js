import { createTheme } from '@material-ui/core/styles';

const seaBlue = '#48A7E6'
const seaYellow = '#EBAC26'
const seaGray = '#A6A8A9'
const darkGray = '#9e9e9e'
const lightGray = '#F2F2F2'
const seaWhite = '#FFFFFF'
const borderColor = `#DDDDDD`
const pureBlack = `#000000`
const seaGreen = `#37A085`
const seaWood = `#856405`
const seaDark = `#1E272D`;
export default createTheme({
  palette: {
    common:{
      seaBlue:`${seaBlue}`,
      seaYellow:`${seaYellow}`,
      seaGray:`${seaGray}`,
      seaWhite:`${seaWhite}`,
      darkGray:`${darkGray}`,
      lightGray:`${lightGray}`,
      borderColor:`${borderColor}`,
      pureBlack:`${pureBlack}`,
      seaGreen:`${seaGreen}`,
      seaWood:`${seaWood}`
    },
    primary: {
      main: `${seaBlue}`,
    }, 
    secondary: {
      main: `${seaYellow}`,
    },
  },
  typography:{
    h3:{
      fontWeight:300
    }
  },
  overrides: {
    MuiFab: {
      root: {
        textTransform: "none",
      },
      extended: {
        "&$sizeSmall": {
          paddingLeft: "0px",
        },
      },
    },
    MuiPopover:{
      paper:{
          backgroundColor:`${seaDark}`,
          boxShadow:'0 2px 8px hsl(0deg 0% 100% / 15%)',
          minWidth:"13rem"
      }
  },
    MuiListItemIcon:{
        root:{
            minWidth:"35px"
        }
    }
  },
});