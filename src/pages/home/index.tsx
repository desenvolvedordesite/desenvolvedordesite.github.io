import React from 'react';
import "./home.css";

import { makeStyles,  } from '@mui/styles';
import { Theme, useTheme } from '@mui/material/styles';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';

import logotipo from "@assets/logotipo-desenvolverdor-de-site.svg"
import OrbitAnimation from '@components/animationOrbit';

import AppConfig from '@config/appconfig';
import Footer from '@components/footer';

interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
     const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

    const ContentTitle = () => {
        const handleRedirectWhatsapp = () => {
            const phoneNumber = AppConfig.user.number;
            const message = 'Olá Jonathas Borges, estou interessado em seus serviços! Gostaria de solicitar um orçamento';
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        }
        return(
            <Grid container textAlign={"left"} alignItems={"center"} sx={{border: "0px solid red"}} gap={4}>
                <Grid item xs={12}>            
                    <Typography variant='h1' fontSize={ isMobile ? "2rem" : "2.7rem"} textAlign={isMobile ? "center" : "justify"} > Especialista em  <br/>
                    <span style={{fontWeight:700}} >Desenvolvimento de Sites</span> </Typography>
                </Grid>
    
                <Grid item xs={12} >
                    <Typography variant='h4' 
                        fontSize={"1.2rem"} fontWeight={300} 
                        textAlign={isMobile ? "center" : "justify"}
                    >
                        Somos especializados no desenvolvimento de sites profissionais e utilizamos as mais modernas técnicas para web design existentes na internet.
                    </Typography>
                </Grid>
                <Grid item xs={12} textAlign={isMobile ? "center" : "left"}>
                    <Button variant='outlined' color={"primary"} onClick={handleRedirectWhatsapp}
                        
                        sx={{
            
                            fontSize: "1.2rem", borderRadius: 2, backgroundColor: "#4659FF",
                            textTransform: "capitalize",
                            "&:hover" : {backgroundColor: "green"}
                        }}>
                            Solicitar Orçamento
                        </Button>
                </Grid>
    
            </Grid>
        )
    }
    
    const CardServices = () => {
        return(
            <Grid container justifyContent={"center"} alignItems={"center"} textAlign={"left"} >
                <Grid item xs={12} lg={4} >
                    <ul style={{lineHeight: 4, padding: 20 }}>
                        <li><Typography variant={"h3"} fontSize={"0.8rem"} >Desenvolvedor de sites para iniciantes</Typography></li>
                        <li><Typography variant={"h3"} fontSize={"0.8rem"} >Serviços de criação de sites</Typography></li>
                    </ul>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ul style={{lineHeight: 4, padding: 20 }}>
                        <li><Typography variant={"h3"} fontSize={"0.8rem"} >Profissional de design de sites</Typography></li>
                        <li><Typography variant={"h3"} fontSize={"0.8rem"} >Desenvolvedor web freelancer</Typography></li>
                    </ul>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <ul style={{lineHeight: 4, padding: 20}}>
                        <li><Typography variant={"h3"} fontSize={"0.8rem"} >Serviços de criação de sites personalizados</Typography></li>
                        <li><Typography variant={"h3"} fontSize={"0.8rem"} >Empresa de hospedagem de site</Typography></li>
                    </ul>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container position={"inherit"} width={"91%"} justifyContent={"center"} sx={{border: "0px solid red", marginLeft: "auto", marginRight: "auto", padding: 1.2, marginTop: isMobile ? 0 : 5}} gap={isMobile ? 1 : 4}>
    {/* Header */}
            <Grid item component={"header"}  xs={12} sx={{border: "0px solid blue", display:"flex", alignItems:"center", gap: 1 , margin: "auto", padding: 0.5}}>
        {/* Logotipo */}
                <img src={logotipo} alt="logotipo-desenvolver-site" /><Typography variant='h6' fontFamily={"Cursive"} >Desenvolvedor de Sites</Typography>
            </Grid>
    {/* Body */}        
            <Grid item component={"main"} xs={12}>
                <Grid container justifyContent={"center"} textAlign={"center"} gap={0.5}>
        {/* Content Left */} 
                    <Grid item xs={12} lg={5.9} sx={{border: "0px solid blue", display:"flex", alignItems: "center"}}>
                        
                        
                        {isMobile ? (<OrbitAnimation/>) : (<ContentTitle/>)}
                    </Grid>
        {/* Content Right */} 
                    <Grid item xs={12} lg={5.9} sx={{border: "0px solid blue"}}>

                        {/* <ContentRight/> */}
                        {isMobile ? (<ContentTitle></ContentTitle>) : (<OrbitAnimation/>)} 

                    </Grid>
        {/* Card Service */}
                    <Grid item xs={12} marginTop={2}>
                        <CardServices/>
                    </Grid> 
                </Grid>
            </Grid>
    {/* Footer */}
            <Grid item xs={12} className='footer' textAlign={"center"} sx={{backgroundColor: "#000", position: "relative", bottom: 0, width: "100%"}}>
                <Footer></Footer>
            </Grid>
        </Grid>
    )
}

export default Home;

const useStyles = makeStyles((theme: Theme) => ({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
