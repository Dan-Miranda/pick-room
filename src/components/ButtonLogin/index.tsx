import React, { useState } from 'react';
import { AccountInfo } from '@azure/msal-browser';
import { Button } from '@material-ui/core';
import AzureAuthenticationContext from '../../configurations/azure/azureAuthenticationContext';
import classes from './ButtonLogin.module.scss';

// Log In, Log Out button
const ButtonLogin = ({ onAuthenticated }: any) => {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');
  const msie11 = ua.indexOf('Trident/');
  const isIE = msie > 0 || msie11 > 0;

  // Azure client context
  const authenticationContext = new AzureAuthenticationContext();

  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<AccountInfo>();

  const logIn = (method: string) => {
    const typeName = 'loginPopup';
    const logInType = isIE ? 'loginRedirect' : typeName;

    // Azure Login
    authenticationContext.login(logInType, returnedAccountInfo);
  };
  const logOut = () => {
    if (user) {
      onAuthenticated(undefined);
      // Azure Logout
      authenticationContext.logout(user);
    }
  };

  const returnedAccountInfo = (user: AccountInfo) => {
    if (user) {
      setAuthenticated(!!user.name);
      onAuthenticated(user);
      setUser(user);
    }
  };

  const showLogInButton = () => (
    <button
      id="authenticationButton"
      type="button"
      onClick={() => logIn('loginPopup')}
    >
      Log in
    </button>
  );

  const showLogOutButton = () => (
    <div id="authenticationButtonDiv">
      <div id="authentication">
        <button
          id="authenticationButton"
          type="button"
          onClick={() => logOut()}
        >
          Log out
        </button>
      </div>
    </div>
  );

  return (
    <div id="authentication">
      {authenticationContext.isAuthenticationConfigured ? (
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={`${classes.sign} ${classes.signin}`}
          onClick={() => logIn('loginPopup')}
        >
          Sign In
        </Button>
      ) : (
        <div>Authentication Client ID is not configured.</div>
      )}
    </div>
  );
};

export default ButtonLogin;
