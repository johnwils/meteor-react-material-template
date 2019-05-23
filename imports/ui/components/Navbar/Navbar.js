import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar({ classes, loggedIn, history }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
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
                <AccountCircle />
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
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withStyles(styles)(NavBar);
