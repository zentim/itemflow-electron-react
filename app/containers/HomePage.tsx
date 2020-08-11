/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import NestedList from '../components/Home/NestedList';
import ItemCard from '../components/Home/ItemCard';

const menus = [
  {
    text: 'Add',
  },
  {
    text: 'Home',
  },
  {
    text: 'Star',
  },
  {
    text: 'Trash',
  },
]

const itemCards = [
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
  {
    id: '123',
    title: 'something note',
    image: 'https://source.unsplash.com/random',
    description: 'test description...'
  },
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    minHeight: 48,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    // ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#0072F0',
    minHeight: 48,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    minHeight: 48,
  },
  appBarText: {
    fontSize: '11px',
  },
  appBarTextPaddingRight: {
    paddingRight: '42px',
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: {
    ...theme.mixins.toolbar,
    "@media (min-height:0)": { minHeight: 48 },
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  blockTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  blockTitleIcon: {
    fontSize: 18,
    color: '#0A77F0',
  },
  blockTitleText: {
    fontSize: 13,
    marginLeft: 9,
    color: '#0A77F0',
  },
  logo: {
    width: 109,
    height: 33,
    marginLeft: 21,
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  // 功能按鈕
  leftToolBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightToolBtn: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  toolBtnText: {
    display: 'inline-block',
    color: 'white',
    fontSize: 14,
    width: 43,
    marginTop: 20,
    marginLeft: 15,
    position: 'relative',
    top: '-10px',
  },
  toolBtnIcon: {
    width: 63,
    height: 59,
    position: 'relative',
    top: '20px',
    right: '-10px',
    opacity: 0.8,
    color: 'white',
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* 上方的工具列 */}
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>

          <Grid container spacing={3}>
            <Grid container item xs={12} sm={4}>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.appBarText}>
                GO BACK TO LAST PAGE
              </Typography>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.appBarText}>
                LOGO
              </Typography>
            </Grid>

            <Grid container item xs={12} sm={4}>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.appBarText}>
                SEARCH BOX
              </Typography>
            </Grid>

            <Grid container item xs={12} sm={4} justify="flex-end" alignItems="center">
              <Typography component="h1" variant="h6" color="inherit" align="right" noWrap className={classes.appBarText}>
                TOGGLE RIGHT SEARCH DRAWER
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* 左邊的導航欄 */}
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <div className={classes.logoText}>ItemFlow</div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            menus && menus.map((menu) => {
              return <NestedList menu={menu} key={menu.text} />
            })
          }
        </List>
      </Drawer>

      {/* 中間頁面內容 */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Cards */}
            <Grid container item spacing={2}>
              {itemCards.map((item) => (
                <ItemCard key={item.title} item={item} />
              ))}
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
