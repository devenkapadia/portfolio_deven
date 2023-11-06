import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    background: 'none',
    // marginTop:'30px',
    zIndex:2,
    '& .MuiBottomNavigationAction-root': {
      MinWidth: 0,
      maxWidth: 50,
    },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});
