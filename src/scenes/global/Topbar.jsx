import React, { useContext } from "react";
import {
  Box,
  IconButton,
  InputBase,
  useTheme,
} from "@mui/material";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";

import { ColorModeContext, token } from "../../theme";

const Topbar = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const  colorMode  = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent={"space-between"} >
      <Box display="flex" backgroundColor={colors.primary[900]} borderRadius="3px " ml="10px ">
    <InputBase sx={{ml:2, flex:1 }} placeholder="search"/>
    <IconButton type="button" sx={{p:1}}>
      <SearchIcon/>
    </IconButton>
    </Box>

    <Box display= "flex" >
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode==="dark" ?  (
          <DarkModeOutlined/>
        ):(
          <LightModeOutlined/>
        )
        }
      </IconButton>
      <IconButton>
          <NotificationsOutlined/>
      </IconButton>
      <IconButton>
          <SettingsOutlined/>
      </IconButton>
      <IconButton>
         < PersonOutlined/>
      </IconButton>
     

    </Box>
      </Box>

  );
};

export default Topbar;
