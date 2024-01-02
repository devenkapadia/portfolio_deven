import React from 'react';
import { Avatar, Box, Grid, Typography, Button } from '@material-ui/core';
import Typed from 'react-typed';
import { useStyles } from './styles/hero';
import { heroInfo } from '../../data/data';
// import profile from '../../data/profile.jpg'
import profile from '../../data/pic.jpg'

const Hero = () => {
  const classes = useStyles();

  const aboutInfo = [
    {
      title: "About Me",
      desc: " I'm a self-motivated, passionate student with a strong interest in cutting-edge technologies. I excel in organizing academic projects and volunteering events, maintaining a CGPA above 9.39. I'm dedicated not only to my academic success but also to improving my university, supporting peers, and serving the community.",
      desc2: " Besides academics, I'm passionate about sports, particularly Chess and Cricket. I've also showcased my versatility through dance performances and skits at college events, highlighting my well-rounded character and commitment to diverse experiences."
    }
  ];

  const handleDownloadResume = () => {
    // Replace this with the actual URL of your resume file
    const resumeUrl = 'https://drive.google.com/file/d/1QPnNd5ATL1YjgbMq9RC14usi3HfIyQDJ/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  return (
    <Grid container className={classes.mainGrid} spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box className={classes.typedContainer}>
          <Grid container justify="center">
            <Avatar
              className={classes.avater}
              src={profile}
              alt={heroInfo.name}
            />
          </Grid>
          <Typography className={classes.title} variant="h4">
            <Typed strings={[heroInfo.name]} typeSpeed={100} />
          </Typography>
          <br />
          <Typography className={classes.subtitle} variant="h5">
            <Typed strings={heroInfo.title} typeSpeed={70} backSpeed={60} loop />
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownloadResume}
            className={classes.btn}
          >
             Resume
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box className={classes.containerTwo}>
          <Typography className={classes.aboutTitle} variant="h4">
            {aboutInfo[0].title}
          </Typography>
          <br />
          <Typography className={classes.desc} variant="h5">
            {aboutInfo[0].desc}
          </Typography>
          <Typography className={classes.desc} variant="h5">
            {aboutInfo[0].desc2}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
