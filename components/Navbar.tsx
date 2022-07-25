import React, { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import lightThemeOptions from '../styles/theme/optionalTheme';

const { lightTheme, darkTheme } = lightThemeOptions;
type props = {
  setDark: React.Dispatch<React.SetStateAction<typeof darkTheme>>;
}

function Navar({setDark}:props) {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        isDarkTheme ? setDark(darkTheme) : setDark(lightTheme)
      };
    return ( <>
    <LightModeIcon  onClick={() => { changeTheme()} }  />

    </> );
}

export default Navar;