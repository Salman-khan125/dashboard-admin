import React from 'react'
import{ Box, Typography,useTheme} from "@mui/material";
import {token} from "../theme"

const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors= token(theme.palette.mode);
  return (
    <Box mb="30px">
   <Typography variant="h2" color={colors.grey[100]} font="boldWeight" sx={{mb:"5px"}}>{title}</Typography>
   <typography variant="h5" color={colors.greenAccent[400]}>{subtitle}</typography>
   </Box>
)
}

export default Header
