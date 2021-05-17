import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'
import './MinDrawer.css'
import {SidebarData} from './SidebarData'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    background:"rgb(66,64,67)",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  toolbar1:{
background:"rgb(66,64,67)"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height:"100%"
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root} onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar  style={{backgroundColor:"rgb(46, 42,47)"}}>
        <div>
          <Typography variant="h6" noWrap>
           <span style={{color:"rgb(155,120,222)",fontWeight:"bolder",fontSize:"30px",marginLeft:"60px"}}>Covid Stats</span>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer 
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Divider/>
        <List  style={{backgroundColor:"rgb(66,64,67)",color:"white",height:"100vh",paddingTop:"90px"}}>
        {SidebarData.map((item,index)=>{
                     return (
                         <ListItem style={{padding:"10px"}} id="sideList"  key={index} className={item.cName} sty>
                         <Link to={item.path}>
              <span ><ListItemIcon  style={{color:"white"}}>{item.icons}</ListItemIcon></span>
              <span ><ListItemText style={{fontSize:"20px"}} primary= {item.title} />
              </span></Link>
            </ListItem>
                     )
                 })}
               
                 <span id="textSafe">STAY SAFE</span> 
                 </List>

      </Drawer>
    </div>
  );
}


