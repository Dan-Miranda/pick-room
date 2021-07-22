import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { signin } from 'next-auth/client';
import classes from './SignIn.module.scss';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        pick.room
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

export default function SignInTemplate() {
  return (
    <Grid container className={classes.container}>
      <Grid item xs={false} sm={6} md={8} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        component={Paper}
        className={classes.containerForm}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography align="center" component="h1" variant="h5">
            SignIn with Microsoft Account
          </Typography>
          {/* <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.input}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.input}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={`${classes.sign} ${classes.signin}`}
            onClick={() => signin('azure-ad-b2c')}
          >
            Sign In
          </Button>

          <Button
            variant="contained"
            color="primary"
            type="button"
            fullWidth
            className={`${classes.sign} ${classes.signup}`}
          >
            Sign Up
          </Button>

          <Box mt={5}>
            <Copyright />
          </Box>
          {/* </form> */}
        </div>
      </Grid>
    </Grid>
  );
}
