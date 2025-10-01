import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { token } from "../../theme";

import React from 'react'

const FAQ = () => {
    const theme = useTheme();
    const colors= token(theme.palette.mode) 
      const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box m={"20px"}>
        <Header title={"FAQ"} subtitle={"Frequently Asked Question Page"}/> 
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
        
          aria-controls="panel1bh-content"
          id="panel1bh-header">
         <Typography color={colors.greenAccent[500]} variant="h5">
           An important Question
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis qui laboriosam veritatis, ea impedit id adipisci excepturi nobis ipsa, porro placeat numquam quod deleniti quas, veniam hic consectetur maiores!
            </Typography>
        </AccordionDetails>
      </Accordion>


       <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} 
         aria-controls="panel2bh-content"
          id="panel2bh-header">
         <Typography color={colors.greenAccent[500]} variant="h5">
           An important Question
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis qui laboriosam veritatis, ea impedit id adipisci excepturi nobis ipsa, porro placeat numquam quod deleniti quas, veniam hic consectetur maiores!
            </Typography>
        </AccordionDetails>
      </Accordion >


       <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
         aria-controls="panel3bh-content"
          id="panel3bh-header">
         <Typography color={colors.greenAccent[500]} variant="h5">
           An important Question
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis qui laboriosam veritatis, ea impedit id adipisci excepturi nobis ipsa, porro placeat numquam quod deleniti quas, veniam hic consectetur maiores!
            </Typography>
        </AccordionDetails>
      </Accordion>


       <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header">
         <Typography color={colors.greenAccent[500]} variant="h5">
           An important Question
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis qui laboriosam veritatis, ea impedit id adipisci excepturi nobis ipsa, porro placeat numquam quod deleniti quas, veniam hic consectetur maiores!
            </Typography>
        </AccordionDetails>
      </Accordion>

      
       <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel5bh-content"
          id="panel5bh-header">
         <Typography color={colors.greenAccent[500]} variant="h5">
           An important Question
         </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis qui laboriosam veritatis, ea impedit id adipisci excepturi nobis ipsa, porro placeat numquam quod deleniti quas, veniam hic consectetur maiores!
            </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ;

