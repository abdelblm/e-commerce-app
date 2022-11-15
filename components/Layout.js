import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Next Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <Typography>All rights reserved. Next Amazona.</Typography>
    </div>
  );
}

export default Layout;
