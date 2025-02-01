import React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import {  ListItemIcon, } from '@mui/material'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import List from '@mui/joy/List';
import Grid from "@mui/material/Grid";
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
    <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="Logo"
              src="https://i.im.ge/2025/01/22/HTlNiT.logo1.png"
              sx={{ width: 80, height: 50, marginRight: 2 }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <Avatar
              alt="Logo"
              src="https://i.im.ge/2025/01/22/HTlAaG.myportfolio1.jpeg"
              sx={{
                width: { xs: 180, sm: 250 },
                height: { xs: 60, sm: 80 },
                margin: "auto",
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Stack spacing={1} sx={{ backgroundColor: 'black',padding:4 }}>
    <Box sx={{ mt: 8, backgroundColor: "black" }}>
      {/* Hero Section */}
      <Box ref={addToRefs} sx={{ height: "auto", pt: 10 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%",width:"100%" }}
        >
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundColor: "rgba(11, 11, 11, 0.86)",
                p: 4,
                borderRadius: "30px",
                textAlign: { xs: "center", sm: "end" },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "rgb(252, 250, 249)",
                  fontWeight: "bold",
                  fontFamily: "Courier New, monospace",
                }}
              >
                Hello . . . !
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "rgb(252, 250, 249)",
                  fontWeight: "bold",
                  fontFamily: "Courier New, monospace",
                }}
              >
               My Name is 
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  background:
                    "linear-gradient(90deg, rgb(0, 179, 255) 0%, rgb(255, 119, 0) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                VISHNU ST
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  background:
                    "linear-gradient(90deg, rgb(235, 254, 114) 0%, rgb(11, 68, 40) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                A JAVA FULLSTACK DEVELOPER
              </Typography>
              <a href="https://drive.google.com/file/d/1MGl_XV2O0I2PBME9GvFRPn-o9PwsjT1E/view">
                <Box
                  sx={{
                    mt: 2,
                    width: "fit-content",
                    mx: { xs: "auto", sm: "unset" },
                    padding: "10px 20px",
                    background:
                      "linear-gradient(90deg, rgb(200, 0, 255) 0%, rgb(5, 167, 62) 100%)",
                    borderRadius: "30px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgb(15, 15, 14)",
                      textAlign: "center",
                    }}
                  >
                    View My Resume
                  </Typography>
                </Box>
              </a>
              <Typography
                variant="h6"
                sx={{
                  color: "rgb(252, 250, 249)",
                  fontFamily: "Courier New, monospace",
                  mt: 2,
                }}
              >
                Scroll down to know more about me!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="center">
            <CardMedia
              component="img"
              sx={{
                height: { xs: 250, sm: 350 },
                width: { xs: 300, sm: 400 },
                borderRadius: "50px",
                margin: "auto",
              }}
              image="https://i.im.ge/2025/01/22/HTl0Hf.imgvishnust.jpeg"
              alt="My Image"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Projects Section */}
      {/* 1st Projects Section */}
      <Box
className="parBox"
ref={addToRefs}
sx={{
  backgroundColor: "rgba(53, 52, 52, 0.51)",
  height: { xs: "auto", sm: 500, md: 450 },
  padding: { xs: 2, sm: 4 },
}}
>
<Stack
  direction={{ xs: "column", md: "row" }}
  spacing={{ xs: 3, md: 5 }}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  }}
>
  {/* Left box */}
  <Box
    sx={{
      backgroundColor: "rgba(53, 52, 52, 0.43)",
      flex: 1,
      height: { xs: 350, sm: 440, md: 440 },
      borderRadius: "30px",
      border: "7px solid orange",
    }}
  >
    <iframe
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        border: "none",
      }}
      src="https://my-project-orcin-three.vercel.app/"
    ></iframe>
  </Box>

  {/* Right box */}
  <Box
    sx={{
      backgroundColor: "rgba(53, 52, 52, 0)",
      flex: 1,
      height: "auto",
      borderRadius: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
      textAlign: { xs: "center", md: "start" },
    }}
  >
    <Typography
      gutterBottom
      variant="h3"
      component="div"
      sx={{
        color: "rgb(252, 250, 249)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
        fontSize: { xs: "1.8rem", sm: "2.5rem" },
      }}
    >
      EMPLOYMENT MANAGEMENT WEBSITE
    </Typography>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        color: "rgb(84, 82, 81)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Objective
    </Typography>
    <Typography
      gutterBottom
      variant="subtitle1"
      component="div"
      sx={{
        color: "rgb(238, 235, 234)",
        fontWeight: 100,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Developed a web application to help companies efficiently manage their
      employees allowing for functionalities such as adding, deleting, and
      filtering employees based on age, salary, and ID.
    </Typography>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        color: "rgb(84, 82, 81)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Role and Contribution
    </Typography>
    <Typography
      gutterBottom
      variant="subtitle1"
      component="div"
      sx={{
        color: "rgb(238, 235, 234)",
        fontWeight: 100,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Independently designed and developed the entire application using React
      Js and Material UI.
    </Typography>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        color: "rgb(84, 82, 81)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Link
    </Typography>
    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
      <a href="https://my-project-orcin-three.vercel.app/">
        <LinkIcon style={{ fontSize: 30, color: "white" }} />
      </a>
    </Box>
  </Box>
</Stack>
</Box>
{/* 2st Projects Section */}
<Box
className="parBox"
ref={addToRefs}
sx={{
  backgroundColor: "rgba(53, 52, 52, 0.51)",
  height: { xs: "auto", sm: 500, md: 450 },
  padding: { xs: 2, sm: 4 },
}}
>
<Stack
  direction={{ xs: "column", md: "row" }}
  spacing={{ xs: 3, md: 5 }}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  }}
>
  {/* Left box */}
  <Box
    sx={{
      backgroundColor: "rgba(53, 52, 52, 0)",
      flex: 1,
      height: "auto",
      borderRadius: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
      textAlign: { xs: "center", md: "start" },
    }}
  >
    <Typography
      gutterBottom
      variant="h3"
      component="div"
      sx={{
        color: "rgb(252, 250, 249)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
        fontSize: { xs: "1.8rem", sm: "2.5rem" },
      }}
    >
      TRAVEL BOOKING WEBPAGE
    </Typography>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        color: "rgb(84, 82, 81)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Objective
    </Typography>
    <Typography
      gutterBottom
      variant="subtitle1"
      component="div"
      sx={{
        color: "rgb(238, 235, 234)",
        fontWeight: 100,
        fontFamily: "Roboto, sans-serif",
      }}
    >
       A modern responsive travel booking webpage built using React.js and React Bootstrap , featuring
      an interative flight search form , travel destination highlights,newsletter subscription, and a clean 
      professional design for an engaging use experience .
    </Typography>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        color: "rgb(84, 82, 81)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Role and Contribution
    </Typography>
    <Typography
      gutterBottom
      variant="subtitle1"
      component="div"
      sx={{
        color: "rgb(238, 235, 234)",
        fontWeight: 100,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Independently designed and developed the entair application using React Js and React Bootstrap
    </Typography>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        color: "rgb(84, 82, 81)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Link
    </Typography>
    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
      <a href="https://my-project1-coral.vercel.app/">
        <LinkIcon style={{ fontSize: 30, color: "white" }} />
      </a>
    </Box>
  </Box>

  {/* Right box */}
  <Box
    sx={{
      backgroundColor: "rgba(53, 52, 52, 0.43)",
      flex: 1,
      height: { xs: 250, sm: 400, md: 440 },
      borderRadius: "30px",
      border: "7px solid orange",
    }}
  >
    <iframe
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        border: "none",
      }}
      src="https://my-project1-coral.vercel.app/"
    ></iframe>
  </Box>
 
</Stack>
</Box>
{/*3rd project*/}
<Box
className="parBox"
ref={addToRefs}
sx={{
  backgroundColor: "rgba(53, 52, 52, 0.51)",
  height: { xs: "auto", sm: 500, md: 450 },
  padding: { xs: 2, sm: 4 },
}}
>
<Stack
  direction={{ xs: "column", md: "row" }}
  spacing={{ xs: 3, md: 5 }}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  }}
>
  {/* Left box */}
  <Box
    sx={{
      backgroundColor: "rgba(53, 52, 52, 0.43)",
      flex: 1,
      height: { xs: 350, sm: 400, md: 440 },
      borderRadius: "30px",
      border: "7px solid orange",
    }}
  >
    <iframe
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        border: "none",
      }}
      src="https://publuu.com/flip-book/776956/1721154"
    ></iframe>
  </Box>

  {/* Right box */}
  <Box
    sx={{
      backgroundColor: "rgba(53, 52, 52, 0)",
      flex: 1,
      height: "auto",
      borderRadius: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
      textAlign: { xs: "center", md: "start" },
    }}
  >
    <Typography
      gutterBottom
      variant="h3"
      component="div"
      sx={{
        color: "rgb(252, 250, 249)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
        fontSize: { xs: "1.8rem", sm: "2.5rem" },
      }}
    >
      BENTCH POWER SUPPLY FROM DAMAGED SMPS
    </Typography>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        color: "rgb(84, 82, 81)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Objective
    </Typography>
    <Typography
      gutterBottom
      variant="subtitle1"
      component="div"
      sx={{
        color: "rgb(238, 235, 234)",
        fontWeight: 100,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Our project aimed to convert a damaged switch-mode power supply (SMPS) into a bench
      power supply thereby addressing and reducing e-waste in the world.This was the goal of the project .
    </Typography>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        color: "rgb(84, 82, 81)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Role and Contribution
    </Typography>
    <Typography
      gutterBottom
      variant="subtitle1"
      component="div"
      sx={{
        color: "rgb(238, 235, 234)",
        fontWeight: 100,
        fontFamily: "Roboto, sans-serif",
      }}
    >
            Led a team of 6 in planning ,executing and completing the project 
      .Assembled all electronic components and ensured proper intergration and functionality
      of the converted bench power supply.
    </Typography>
    <Typography
      gutterBottom
      variant="h5"
      component="div"
      sx={{
        color: "rgb(84, 82, 81)",
        fontWeight: 700,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      Link
    </Typography>
    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "start" } }}>
      <a href="https://publuu.com/flip-book/776956/1721154">
        <LinkIcon style={{ fontSize: 30, color: "white" }} />
      </a>
    </Box>
  </Box>
</Stack>
</Box>
<Box sx={{ backgroundColor: "black", minHeight: "10vh", pt: 4,pl:4,spacing:5 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ width: "90%", height: "90%" }}
      >
        {/* Education Section */}
        <Box
          sx={{
            backgroundColor: "black",
            flex: 1,
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            p: 3,
            boxShadow: "0 4px 40px rgba(246, 105, 5, 0.74)",
            width: "100%",
          }}
        >
          <Typography variant="h4" sx={{ color: "white", fontWeight: 700, fontFamily: "serif" }}>
            Education
          </Typography>
          <List sx={{ color: "white" }}>
            <ListItem>
              <Typography variant="h6">Bachelor Of Science in Physics</Typography>
            </ListItem>
            <ListItem>Iqbal College TVM, Kerala University (2024)</ListItem>
            <ListItem>CGPA: 6.670</ListItem>
            <ListItem>
              <Typography variant="h6">Higher Secondary Education</Typography>
            </ListItem>
            <ListItem>Lourdes Mount HSS (2019)</ListItem>
            <ListItem>CGPA: 8.56</ListItem>
          </List>
        </Box>

        {/* Skills Section */}
        <Box
          sx={{
            backgroundColor: "black",
            flex: 1,
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            p: 3,
            boxShadow: "0 4px 40px rgba(65, 157, 3, 0.74)",
            width: "100%",
          }}
        >
          <Typography variant="h4" sx={{ color: "white", fontWeight: 700, fontFamily: "serif" }}>
            Technological Skills
          </Typography>
          <List sx={{ color: "white" }}>
            <ListItem>Java, SpringBoot, Hibernate</ListItem>
            <ListItem>Figma, HTML, CSS, Bootstrap, Material UI, Tailwind CSS</ListItem>
            <ListItem>React.js, React Bootstrap</ListItem>
            <ListItem>MySQL, Git, GitHub</ListItem>
          </List>
        </Box>

        {/* Links Section */}
        <Box
          sx={{
            backgroundColor: "black",
            flex: 1,
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            p: 3,
            boxShadow: "0 4px 40px rgba(3, 108, 157, 0.74)",
            width: "100%",
          }}
        >
          <Typography variant="h4" sx={{ color: "white", fontWeight: 700, fontFamily: "serif" }}>
            Links
          </Typography>
          <List sx={{ color: "white" }}>
            <ListItem>
              <ListItemIcon>
                <GitHubIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <a href="https://github.com/VishnuST707" style={{ color: "white", textDecoration: "none" }}>
                GitHub
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIphoneIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <Typography sx={{ color: "white" }}>+91 6238996733</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AlternateEmailIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <Typography sx={{ color: "white" }}>vishnustshanmughan7@gmail.com</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <InsertLinkIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <a href="https://profile.indeed.com" style={{ color: "white", textDecoration: "none" }}>
                Indeed
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LinkedInIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <a href="https://www.linkedin.com/in/vishnu-st-1340aa327/" style={{ color: "white", textDecoration: "none" }}>
                LinkedIn
              </a>
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Box>


    </Box>
    </Stack>
    
  </>
  );
}

export default MyPortfolio;
