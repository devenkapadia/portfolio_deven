import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  avater: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    marginTop: "100px",
    overflow: 'hidden',

    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  },
  title: {
    color: 'tomato',
    fontSize: '2rem',
    marginTop:'0.5rem'
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem',
  },
  btn: {
    zIndex: 10,
    marginTop: '-30px',
    // color:'white'
  },
  typedContainer: {
    position: 'absolute',
    top: '5%',
    left: '8%',
    maxWidth: '50%',
    width: '400px',
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      width: '100%', // Full width on small screens
      left: '25%', // Center on small screens
      right: '30%', // Center on small screens
    },
  },
  containerTwo: {
    position: 'absolute',
    top: '30%',
    right: '7%',
    width: '50%',
    textAlign: 'center',
    // overflow:'hidden',
    zIndex: 1,

    [theme.breakpoints.down('md')]: {
      // top: '80%', // Adjust the vertical position on small screens
      width: '100%',
      left: '45%',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  aboutTitle: {
    color: "tomato",
    fontSize: '2.2rem',
    [theme.breakpoints.down('md')]: {
      margin: '0px 550px 10px 0px', // Adjust margin on small screens
    },
  },
  desc: {
    color: "tan",
    fontSize: '1.2rem',
    textAlign: "justify",
    margin: '10px 50px 0 0',
    [theme.breakpoints.down('md')]: {
      margin: '10px 600px 0 0px', // Adjust margin on small screens
    },
  }
}));
