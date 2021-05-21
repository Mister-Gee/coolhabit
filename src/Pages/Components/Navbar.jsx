import clsx from 'clsx';
import {
    AppBar, 
    IconButton, 
    Button, 
    Typography, 
    Toolbar, 
    makeStyles,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import {
    Menu, 
    Search, 
    ShoppingCart, 
    FavoriteBorder
} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import StorefrontIcon from '@material-ui/icons/Storefront';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appbar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      },
    logoDiv: {
      flexGrow: 1,
    },
    logo: {
      width: "100%",
      maxWidth: "100px",
      height: "auto",
      margin: -20
    },
    menuItems: {
        flexGrow: 2
    },
    toolBar: {
      backgroundColor: "#825408"
    }
  }));
  
const Navbar = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar 
                position="fixed" 
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                  })}
            >
            <Toolbar className={classes.toolBar}>
                <div className={classes.logoDiv}>
                  <img src="./assets/images/logo.png" alt="Cool Habit" className={classes.logo}/>
                </div>
                <div className={classes.menuItems}>
                  <NavLink to="/" className="links">
                       Home
                  </NavLink>
                  <NavLink to="/category" className="links">
                       Category
                  </NavLink>
                  <NavLink to="/product" className="links">
                       Products
                  </NavLink>
                  <NavLink to="/about" className="links">
                       About
                  </NavLink>
                </div>
                <Button color="inherit">Login</Button>
                <IconButton aria-label="search" color="inherit">
                    <Search /> 
                </IconButton>
                <IconButton aria-label="search" color="inherit">
                    <FavoriteBorder />
                </IconButton>
                <IconButton aria-label="search" color="inherit">
                    <ShoppingCart />
                </IconButton>
                <IconButton 
                    aria-label="display more actions" 
                    edge="end" 
                    color="inherit" 
                    onClick={handleDrawerOpen}
                    className={clsx(open && classes.hide)}
                >
                    <Menu />
                </IconButton>
            </Toolbar>
        </AppBar>
        <main
            className={clsx(classes.content, {
            [classes.contentShift]: open,
            })}
        >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button>
              <ListItemIcon> <HomeIcon /> </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon> <CategoryIcon /> </ListItemIcon>
              <ListItemText primary={"Category"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon> <StorefrontIcon /> </ListItemIcon>
              <ListItemText primary={"Products"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon> <InfoIcon /> </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItem>
        </List>
      </Drawer>
        </div>
    )
}

export default Navbar
