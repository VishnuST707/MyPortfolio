import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';

gsap.registerPlugin(ScrollTrigger);
const CustomListItem = styled(ListItem)({
    display: 'flex',
    alignItems: 'center',
  });
function MyPortfolio() {
  const sectionRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            scrub: true,
            start: "top 60%",
            end: "top 10%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <Avatar
                alt="Logo"
                src="https://i.im.ge/2025/01/22/HTlNiT.logo1.png"
                sx={{ width: 100, height: 60, marginRight: 2 }}
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Avatar
                alt="Logo"
                src="https://i.im.ge/2025/01/22/HTlAaG.myportfolio1.jpeg"
                sx={{ width: 250, height: 80, marginRight: 15 }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Stack spacing={5} sx={{ backgroundColor: 'black' }}>
        <Box className="myzone" ref={addToRefs} sx={{ backgroundColor: 'black', height: 550 }}>
          <Stack direction="row" spacing={10} sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Box sx={{ backgroundColor: 'rgba(11, 11, 11, 0.86)', flex: 1, height: 350, borderRadius: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end' }}>
           <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgb(252, 250, 249)', fontWeight: 'bold', fontFamily: 'Courier New, monospace' }}>
             Hello . . . !
            </Typography>
            <Typography variant="h5" component="div" sx={{ color: 'rgb(252, 250, 249)', fontWeight: 'bold', fontFamily: 'Courier New, monospace',display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
               My Name is 
               <Typography gutterBottom variant="h3" sx={{fontWeight: 900 ,  background: 'linear-gradient(90deg, rgb(0, 179, 255) 0%, rgb(255, 119, 0) 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent'}}>VISHNU ST</Typography>
              </Typography>
              <Typography  gutterBottom variant="h5" sx={{fontWeight: 800 ,  background: 'linear-gradient(90deg, rgb(235, 254, 114) 0%, rgb(11, 68, 40) 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',}}>
                A JAVA FULLSTACK DEVELOPER
              </Typography>
              <a href="https://drive.google.com/file/d/1MGl_XV2O0I2PBME9GvFRPn-o9PwsjT1E/view" >
                  <Box sx={{height: 30,width: 200,background: 'linear-gradient(90deg, rgb(200, 0, 255) 0%, rgb(5, 167, 62) 100%)',borderRadius: '30px',display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
                        <Typography sx={{color: 'rgb(15, 15, 14)',textAlign: 'center',}}>
                         View My Resume
                        </Typography>
                    </Box>
              </a>
              <Typography gutterBottom variant="h6" component="div" sx={{ color: 'rgb(252, 250, 249)', fontWeight: 4, fontFamily: 'Courier New, monospace' }}>
              to know more about me and my projects scroll down
            </Typography>
             
         </Box>

            <Box sx={{ backgroundColor: 'black', flex: 1, height: 350, borderRadius: '30px' }}>
              <CardMedia
                component="img"
                sx={{ height:350 ,width:400, borderRadius: '50px' }}
                image="https://i.im.ge/2025/01/22/HTl0Hf.imgvishnust.jpeg"
                title="My Image"
              />
            </Box>
          </Stack>
        </Box>

        {/* Project 1 */}
        <Box className="parBox" ref={addToRefs} sx={{ backgroundColor: 'rgba(53, 52, 52, 0.51)', height: 450 }}>
          <Stack direction="row" spacing={5} sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Box sx={{ backgroundColor: 'rgba(53, 52, 52, 0.43)', flex: 1, height: 440, borderRadius: '30px', border: '7px solid orange' }}>
              <iframe
                style={{ width: '100%', height: '100%', borderRadius: '20px', border: 'none' }}
                src="https://my-project-orcin-three.vercel.app/"
              ></iframe>
            </Box>
            <Box sx={{ backgroundColor: 'rgba(53, 52, 52, 0)', flex: 1, height: 390, borderRadius: '30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
            <Typography gutterBottom variant="h3" component="div" sx={{ color: 'rgb(252, 250, 249)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
             EMPLOYMENT MANAGEMENT WEBSITE
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgb(84, 82, 81)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
             Objective
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'rgb(238, 235, 234)', fontWeight:100, fontFamily: 'Roboto, sans-serif' }}>
            Developed a webapplication to help companies efficiently manage their 
            employees allowing for functionalities such as adding deleting 
            and filtering employees based on age , salary, and ID
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgb(84, 82, 81)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
            Role and Contribution
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'rgb(238, 235, 234)', fontWeight:100, fontFamily: 'Roboto, sans-serif' }}>
            Independently designed and developed the entair application using React Js and Material UI
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgb(84, 82, 81)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
            Link
            </Typography>
            <a href="https://my-project-orcin-three.vercel.app/">
            <LinkIcon style={{ fontSize: 30, color: 'white' }}/>
            </a>
            </Box>
          </Stack>
        </Box>

        {/* Project 2 */}
        <Box ref={addToRefs} sx={{ backgroundColor: 'black', height: 450 }}>
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', alignItems: 'center', height: '100%',ml:4 }}>
          <Box sx={{ backgroundColor: 'rgba(53, 52, 52, 0)', flex: 1, height: 390, borderRadius: '30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
            <Typography gutterBottom variant="h3" component="div" sx={{ color: 'rgb(252, 250, 249)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
            TRAVEL BOOKING WEBPAGE
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgb(84, 82, 81)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
             Objective
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'rgb(238, 235, 234)', fontWeight:100, fontFamily: 'Roboto, sans-serif' }}>
            A modern responsive travel booking webpage built using React.js and React Bootstrap , featuring
        an interative flight search form , travel destination highlights,newsletter subscription, and a clean 
        professional design for an engaging use experience .
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgb(84, 82, 81)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
            Role and Contribution
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'rgb(238, 235, 234)', fontWeight:100, fontFamily: 'Roboto, sans-serif' }}>
            Independently designed and developed the entair application using React Js and React Bootstrap
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgb(84, 82, 81)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
            Link
            </Typography>
            <a href="https://my-project1-coral.vercel.app/">
            <LinkIcon style={{ fontSize: 30, color: 'white' }}/>
            </a>
            </Box>
            <Box sx={{ backgroundColor: 'black', flex: 1, height: 440, borderRadius: '30px', border: '7px solid green' }}>
              <iframe
                style={{ width: '100%', height: '100%', borderRadius: '20px', border: 'none' }}
                src="https://my-project1-coral.vercel.app/"
              ></iframe>
            </Box>
          </Stack>
        </Box>

        {/* Project 3 */}
        <Box ref={addToRefs} sx={{ backgroundColor: 'black', height: 450 }}>
          <Stack direction="row" spacing={5} sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Box sx={{ backgroundColor: 'black', flex: 1, height: 390, borderRadius: '30px', border: '7px solid red' }}>
              <iframe
                style={{ width: '100%', height: '100%', borderRadius: '20px', border: 'none' }}
                src="https://publuu.com/flip-book/776956/1721154"
              ></iframe>
            </Box>
            <Box sx={{ backgroundColor: 'rgba(53, 52, 52, 0)', flex: 1, height: 390, borderRadius: '30px',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
            <Typography gutterBottom variant="h4" component="div" sx={{ color: 'rgb(252, 250, 249)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
            BENTCH POWER SUPPLY FROM DAMAGED SMPS
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgb(84, 82, 81)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
             Objective
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'rgb(238, 235, 234)', fontWeight:100, fontFamily: 'Roboto, sans-serif' }}>
            Our project aimed to convert a damaged switch-mode power supply (SMPS) into a bench
            power supply thereby addressing and reducing e-waste in the world.This was the goal of the project .
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgb(84, 82, 81)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
            Role and Contribution
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div" sx={{ color: 'rgb(238, 235, 234)', fontWeight:100, fontFamily: 'Roboto, sans-serif' }}>
            Led a team of 6 in planning ,executing and completing the project 
        .Assembled all electronic components and ensured proper intergration and functionality
        of the converted bench power supply.
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: 'rgb(84, 82, 81)', fontWeight:700, fontFamily: 'Roboto, sans-serif' }}>
            Link
            </Typography>
            <a href="https://publuu.com/flip-book/776956/1721154">
            <LinkIcon style={{ fontSize: 30, color: 'white' }}/>
            </a>
            </Box>
          </Stack>
        </Box>

        <Box sx={{ backgroundColor: 'black', height: 450 }}>
        <Box  sx={{ backgroundColor: 'black', height: 450, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Stack direction="row" sx={{ width: '90%', height: '90%', gap: 2 }}>
      <Box direction="column" sx={{ backgroundColor: 'black', flex: 1, borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 2,boxShadow: '0 4px 40px rgba(246, 105, 5, 0.74)' }}>
  <Typography gutterBottom variant="h4" component="div" sx={{ color: 'rgb(252, 250, 249)', fontWeight: 700, fontFamily: 'serif' }}>
    Education
    <List marker='disc' sx={{color: 'rgb(252, 250, 249)'}}>
        <ListItem nested>
          <ListItem>
            <Typography variant='h6' sx={{ color: 'rgb(252, 250, 249)'}}>
                Bachelor Of Science in Physics
            </Typography>
          </ListItem>
          <List marker="circle">
            <ListItem>
                <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>FROM :</Typography>
                <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  Iqbal College TVM</Typography>
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>UNDER :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  Kerala University</Typography>
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>POY :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  2024</Typography>
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>CGPA :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  6.670</Typography>
            </ListItem>
          </List>
        </ListItem>
        <ListItem nested>
          <ListItem>
            <Typography variant='h6' sx={{ color: 'rgb(252, 250, 249)'}}>
                Higher Secondary Education
            </Typography>
          </ListItem>
          <List marker="circle">
            <ListItem>
                <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>FROM :</Typography>
                <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  Lourdes Mount Higher Secondary School</Typography>
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>POY :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  2019</Typography>
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>CGPA :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  8.56</Typography>
            </ListItem>
          </List>
        </ListItem>
      </List>
  </Typography>
  <Stack spacing={2}>
      
    </Stack>
</Box>

        <Box direction="column" sx={{ backgroundColor: 'black', flex: 1, borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 2,boxShadow: '0 4px 40px rgba(65, 157, 3, 0.74)' }}>
        <Typography gutterBottom variant="h4" component="div" sx={{ ml:4,color: 'rgb(252, 250, 249)', fontWeight: 700, fontFamily: 'serif' }}>
        Technological Skills
          <List marker="disc">
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>LANGUAGE :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  java</Typography>  
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>JAVA FRAMEWORK :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  SpringBoot , Hibernate</Typography>  
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>DESIGN TOOL :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  Figma</Typography>  
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>MARKUP LANGUAGE :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  HTML</Typography>  
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>STYLING  :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  CSS , Bootstap , Material UI , TailWind CSS</Typography>  
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>JAVASCRIPT LIBRARIES AND FRAMEWORK :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  React.js,React Bootstrap</Typography>  
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>DATABASE MANAGEMENT :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >   MySQL</Typography>  
            </ListItem>
            <ListItem>
            <Typography variant='subtitie1' sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}}>VERSION CONTROL :</Typography>
            <Typography  variant='subtitie2'sx={{ fontWeight: 300,color: 'rgb(252, 250, 249)'}} >  Git,GitHub</Typography>  
            </ListItem>
          </List>
          </Typography>
        </Box>
        <Box direction="column" sx={{ backgroundColor: 'black', flex: 1, borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: 2,boxShadow: '0 4px 40px rgba(3, 108, 157, 0.74)' }}>
        <Typography gutterBottom variant="h4" component="div" sx={{ color: 'rgb(252, 250, 249)', fontWeight: 700, fontFamily: 'serif' }}>
        Links
        <List marker="disc">
        <CustomListItem>
            <a href="https://github.com/VishnuST707">
           <GitHubIcon style={{ fontSize: 30, color: 'white' }}/>
           </a>
           </CustomListItem>
            <CustomListItem>
                <PhoneIphoneIcon style={{ fontSize: 30, color: 'white' }} />
                    <Typography sx={{ fontFamily: 'serif', color: 'rgb(252, 250, 249)', marginLeft: 1 }}>
                     +91 6238996733
                    </Typography>
          </CustomListItem>
          <CustomListItem>
                <AlternateEmailIcon style={{ fontSize: 30, color: 'red' }} />
                    <Typography sx={{ fontFamily: 'serif', color: 'rgb(252, 250, 249)', marginLeft: 1 }}>
                     vishnustshanmughan7@gmail.com
                    </Typography>
          </CustomListItem>
          <CustomListItem>
          <InsertLinkIcon style={{ fontSize: 30, color: 'white' }} />
             <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage" className="text-expcolor1 font-serif text-font6">
              Indeed
            </a>
         </CustomListItem>
         <CustomListItem>
            <a href="https://www.linkedin.com/in/vishnu-st-1340aa327/">
           <LinkedInIcon style={{ fontSize: 30, color: 'white' }}/>
           </a>
           </CustomListItem>
        </List>
        </Typography>
        </Box>
      </Stack>
    </Box>
        </Box>
      </Stack>
    </>
  );
}

export default MyPortfolio;
