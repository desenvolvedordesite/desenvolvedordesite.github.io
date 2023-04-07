import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

interface Props {
   children?: React.ReactNode;
}

const Footer: React.FC<Props> = ({ children, ...props }) => {
   const theme = useTheme();
   const content = "Copyright © 2023 All Rights Reserved by Jonathas Borges"
   return (
      <Grid container component={"footer"}>
         <Grid item xs={12}>
            <Typography variant={"caption"} sx={{color: theme.palette.textColor?.default,fontWeight:600}}> {content} </Typography>
         </Grid>
      </Grid>
   )
}

export default Footer;