import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container, Link } from '@mui/material';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>Amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <Typography className={classes.footer}>
        All rights reserved. Next Amazona.
      </Typography>
    </div>
  );
}

export default Layout;
