import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: `-${theme.spacing(2)}px`,
    marginRight: theme.spacing(3),
  },
}));

const NavBar = ({ loggedIn, history }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton> */}
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Button color="inherit" onClick={() => history.push('/')}>
              Brand/Landing
            </Button>
          </Typography>
          {loggedIn ? (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    history.push('/profile');
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    history.push('/');
                    handleClose();
                  }}
                >
                  Landing
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    Meteor.logout();
                    history.push('/signin');
                    handleClose();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <Button color="inherit" onClick={() => history.push('signup')}>
                Signup
              </Button>
              <Button color="inherit" onClick={() => history.push('signin')}>
                Signin
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default NavBar;
